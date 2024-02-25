const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models");

// The `/api/products` endpoint

// get all products
router.get("/", async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  try {
    const productData = await Product.findAll({
      include: [{ model: Tag }],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// get one product
router.get("/:id", async (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [{ model: Tag }],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// create new product
router.post("/", async (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  Product.create(req.body)
    .then((product) => {
      if (req.body.tagIds.length) {
        const productTagIds = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIds);
      }
    })
    .then(() => {
      res.status(200).json({ message: "Product and Tags successfully created" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Internal server error" });
    });
});


// Update product route with .then statements
router.put("/:id", async (req, res) => {
  try {
    // Update product data
    Product.update(req.body, {
      where: { id: req.params.id },
    })
    .then(async (result) => {
      if (result > 0) {
        // Update associated tags
        const newTagIds = req.body.tagIds || [];
        const originalProductTags = await ProductTag.findAll({
          where: { product_id: req.params.id },
        });
        const originalTagIds = originalProductTags.map(
          (productTag) => productTag.tag_id
        );
        const tagsToAdd = newTagIds.filter(
          (tagId) => !originalTagIds.includes(tagId)
        );
        const tagsToRemove = originalProductTags.filter(
          (productTag) => !newTagIds.includes(productTag.tag_id)
        );

        await Promise.all([
          ProductTag.destroy({ where: { id: tagsToRemove.map(({ id }) => id) } }),
          ProductTag.bulkCreate(
            tagsToAdd.map((tagId) => ({
              product_id: req.params.id,
              tag_id: tagId,
            }))
          ),
        ]);

        // Respond with success message or updated product data
        const updatedProduct = await Product.findByPk(req.params.id, {
          include: [{ model: Tag }],
        });
        res.status(200).json(updatedProduct);
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Failed to update product", error: err });
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Failed to update product", error: err });
  }
});

router.delete("/:id", async (req, res) => {
  // delete one product by its `id` value
  const idToDelete = req.params.id; // Corrected variable name
  try {
    await Product.destroy({ where: { id: idToDelete } }); // Use the actual id value
    res
      .status(200)
      .json({ message: "Product has been deleted", id: idToDelete });
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

module.exports = router;
