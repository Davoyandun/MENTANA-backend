const CreateBlogUseCase = require("../../application/use-cases/blog/CreateBlogUseCase");
const GetAllBlogUseCase = require("../../application/use-cases/blog/GetAllBlogUseCase");
const GetBlogByIdUseCase = require("../../application/use-cases/blog/GetBlogByIdUseCase");
const GetRandomBlogsUseCase = require("../../application/use-cases/blog/GetRandomBlogsUseCase");
const GetBlogsByPaginationUseCase = require("../../application/use-cases/blog/GetBlogsByPaginationUseCase");
const UpdateBlogUseCase = require("../../application/use-cases/blog/UpdateBlogUseCase");
const DeleteBlogUseCase = require("../../application/use-cases/blog/DeleteBlogUseCase");

class BlogController {
  constructor(blogRepository) {
    this.createBlogUseCase = new CreateBlogUseCase(
      blogRepository
    );
    this.getAllBlogUseCase = new GetAllBlogUseCase(
      blogRepository
    );
    this.getBlogByIdUseCase = new GetBlogByIdUseCase(
      blogRepository
    );
    this.getRandomBlogsUseCase = new GetRandomBlogsUseCase(
      blogRepository
    );
    this.getBlogsByPaginationUseCase = new GetBlogsByPaginationUseCase(
      blogRepository
    );
    this.updateBlogUseCase = new UpdateBlogUseCase(
      blogRepository
    );
    this.deleteBlogUseCase = new DeleteBlogUseCase(
      blogRepository
    );
  }

  async create(req, res) {
    try {
      const blogData = req.body;
      const newBlog = await this.createBlogUseCase.execute(
        blogData
      );
      res.status(201).json(newBlog);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    const limit = parseInt(req.query.limit) || 30;
    const offset = parseInt(req.query.offset) || 0; 
    try {
      const blogs = await this.getAllBlogUseCase.execute(limit, offset);
      res.status(200).json(blogs);
    } catch (error) {
      res.status(400).json({ message: error.message });
      
    }
  }

  async getById(req, res) {
    try {
      const id = req.params.id;

      const blog = await this.getBlogByIdUseCase.execute(id);
      res.status(200).json(blog);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getRandom(req, res) {
    const limit = parseInt(req.query.limit) || 5;
    try {
      const blogs = await this.getRandomBlogsUseCase.execute(limit);
      res.status(200).json(blogs);
    } catch (error) {
      res.status(400).json({ message: error.message});
    }
  }

  async getByPagination(req, res) {
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0; 
    const title = req.query.title;

    try {
      const blogs = await this.getBlogsByPaginationUseCase.execute(limit, offset, title);
      res.status(200).json(blogs);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async update(req, res) {
    const id = req.params.id;
    const data = req.body;

    try {
      const updateBlog = await this.updateBlogUseCase.execute(id, data);
      res.status(200).json(updateBlog);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async delete(req, res) {
    const id = req.params.id;

    try {
      await this.deleteBlogUseCase.execute(id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  }
}

module.exports = BlogController;
