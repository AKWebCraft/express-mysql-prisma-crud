const { Router } = require("express");
const PostController = require("../controller/Post.controller");

const router = Router();

router.post("/posts", PostController.createPost);
router.get("/posts", PostController.getPosts);
router.get("/posts/:id", PostController.getById);
router.put("/posts/:id", PostController.updatePost);
router.delete("/posts/:id", PostController.deletePost);

module.exports = router;
