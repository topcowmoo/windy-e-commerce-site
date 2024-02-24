const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create({
    });
    res
      .status(200)
      .json({
        message: "Tag has been added to the database",
        tag: req.body.tag_name,
      });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a tag by its `id` value
  const idToUpdate = req.params.id;
  const nameToUpdate = req.body.tag_name;
  try {
    await Tag.update(
      { tag_name: nameToUpdate },
      { where: { id: idToUpdate } }
    );
    res
      .status(200)
      .json({
        message: "Tag has been updated",
        id: idToUpdate,
        tag: nameToUpdate,
      });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  const idToDelete = req.params.id;
  try {
    await Tag.destroy({ where: { id: idToDelete } });
    res
      .status(200)
      .json({ message: "Tag has been deleted", id: idToDelete });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
