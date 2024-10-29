const prisma = require("../database/db.config");

const postController = {
  //CREATE POST
  async createPost(req, res) {
    const { title, content, published } = req.body;
    try {
      const post = await prisma.post.create({
        data: {
          title,
          content,
          published,
        },
      });
      res.status(201).json(post);
    } catch (error) {
      res.status(400).json({ error: "Error creating post" });
    }
  },

  //GET POSTS
  async getPosts(req, res) {
    try {
      const posts = await prisma.post.findMany();
      res.status(200).json(posts);
    } catch (error) {
      res.status(400).json({ error: "Error fetching posts" });
    }
  },

  // GET POST BY ID
  async getById(req, res) {
    const { id } = req.params;
    try {
      const post = await prisma.post.findUnique({
        where: { id: parseInt(id) },
      });
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ error: "Post not found" });
      }
    } catch (error) {
      res.status(400).json({ error: "Error fetching post" });
    }
  },

  //UPDATE POST
  async updatePost(req, res) {
    const { id } = req.params;
    const { title, content, published } = req.body;
    try {
      const updatedPost = await prisma.post.update({
        where: { id: parseInt(id) },
        data: { title, content, published },
      });
      res.status(200).json(updatedPost);
    } catch (error) {
      res.status(400).json({ error: "Error updating post" });
    }
  },

  //DELETE POST
  async deletePost(req, res) {
    const { id } = req.params;
    try {
      await prisma.post.delete({
        where: { id: parseInt(id) },
      });
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: "Error deleting post" });
    }
  },
};

module.exports = postController;
