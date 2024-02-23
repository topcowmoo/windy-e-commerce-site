const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  try{
    const productData = await Product.findAll({
      include: [{model: Tag}]
    })
    res.status(200).json(productData);
  }
  catch(err){
    res.status(400).json(err);
  }
});

// get one product
router.get('/:id', async (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  try{
    const productData = await Product.findByPk(req.params.id,{
      include: [{model: Tag}]
    })
    res.status(200).json(productData);
  }
  catch(err){
    res.status(400).json(err);
  }
});

// create new product
router.post('/', async (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
    try {
      const product = await Product.create({
        product_name: req.body.product_name,
        price: req.body.price,
        stock: req.body.stock
      });
      
      let tag_list = JSON.parse(req.body.tagIds);
      if (tag_list.length) {
        const productTagIdArr = tag_list.map((tag_id) => ({
          product_id: product.id,
          tag_id,
        }));
        await ProductTag.bulkCreate(productTagIdArr);
      }
  
      res.status(201).json(product);
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: 'Failed to create product.', error: err });
    }
    });



// NOT FINISHED
// update product
router.put('/:id', async (req, res) => {
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      if (req.body.tagIds && req.body.tagIds.length) {

        ProductTag.findAll({
          where: { product_id: req.params.id }
        }).then((productTags) => {
          // create filtered list of new tag_ids
          const productTagIds = productTags.map(({ tag_id }) => tag_id);
          const newProductTags = req.body.tagIds
            .filter((tag_id) => !productTagIds.includes(tag_id))
            .map((tag_id) => {
              return {
                product_id: req.params.id,
                tag_id,
              };
            });

          // figure out which ones to remove
          const productTagsToRemove = productTags
            .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
            .map(({ id }) => id);
          // run both actions
          return Promise.all([
            ProductTag.destroy({ where: { id: productTagsToRemove } }),
            ProductTag.bulkCreate(newProductTags),
          ]);
        });
      }

      return res.json(product);
    })
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});






router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value
  id_to_delete = req.params.id;
  try{
    await Product.destroy({where: {id: id_to_delete}})
    res.status(200).json({message: "Product has been deleted", id: id_to_delete});
  }
  catch(err) {
    res.status(400).json(err);
  }
});

module.exports = router;
