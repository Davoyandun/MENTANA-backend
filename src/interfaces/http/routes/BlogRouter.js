const express = require("express");
const { Blog } = require("../../../infrastructure/database/sequelize");
const SequelizeBlogRepository = require("../../../infrastructure/repositories/SequelizeBlogRepository");
const BlogController = require("../../../adapters/controllers/BlogController");

const blogRouter = express.Router();

const blogRepository = new SequelizeBlogRepository(Blog);
const blogController = new BlogController(blogRepository);

blogRouter.post("/blogs", (req, res) =>
  blogController.create(req, res)
);
blogRouter.get("/blogs/getAll", (req, res) =>
  blogController.getAll(req, res)
);
blogRouter.get("/blogs/:id", (req, res) =>
  blogController.getById(req, res)
);
blogRouter.get("/blogs/random", (req, res) =>
  blogController.getRandom(req, res)
);
blogRouter.get("/blogs", (req, res) =>
  blogController.getByPagination(req, res)
);
blogRouter.put("/blogs/:id", (req, res) =>
  blogController.update(req, res)
);
blogRouter.delete("/blogs/:id", (req, res) =>
  blogController.delete(req, res)
);

module.exports = blogRouter;
