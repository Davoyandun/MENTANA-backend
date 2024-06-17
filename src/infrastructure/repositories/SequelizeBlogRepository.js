const BaseRepository = require("../../domain/repositories/BaseRepository");
const Blog = require("../../domain/entities/Blog");

const {sequelize} = require("../../infrastructure/database/sequelize");
const { Op } = require("sequelize");

class SequelizeBlogRepository extends BaseRepository {
  constructor(model) {
    super();
    this.model = model;
  }

  async create(blog) {
    try {
      const [BlogCreated, isCreated] = await this.model.findOrCreate({
        where: {
          title: blog.title,
          is_deleted: false
        },
        defaults: {
          title: blog.title,
          description: blog.description,
          createdAt: blog.createdAt,
          image_url: blog.image_url,
          therapistId: blog.therapistId,
        }
      });
      if(!isCreated) throw new Error("the title is taken");
      return new Blog(BlogCreated);
    } catch (error) {
      throw new Error(`Error saving blog: ${error.message}`);
    }
  }

  async getAll(limit, offset) {
    try {
      const blogs = await this.model.findAll({
        where:{
          is_deleted: false,
        },
        attributes: ["id","title"],
        limit,
        offset
      });
      return blogs;
    } catch (error) {
      throw new Error(`Error getting blogs: ${error.message}`);
    }
  }

  async getById(id) {
    try {
      const blog = await this.model.findOne({
        where:{
          id:id,
          is_deleted: false
        }
      });
      if (!blog)throw new Error("no blog found");
      return new Blog(blog);
    } catch (error) {
      throw new Error(`Error getting blog by ID: ${error.message}`);
    }
  }

  async getRandom(limit) {
    try {
      const randomBlogs = await this.model.findAll({
        where: {
          is_deleted: false
        },
        order: sequelize.random(), 
        limit
      });
      return randomBlogs;
    } catch (error) {
      throw new Error(`Error getting random blogs: ${error.message}`);
    }
  }

  async getByPagination(limit, offset, title){
    if(title === undefined){
      title = "";
    }

    try {
      const blogs = await this.model.findAll({
        limit,
        offset,
        where: {
          is_deleted: false, // just we get all that has is_deleted prop in false
          title: {
            [Op.iLike]: `%${title}%`
          }
        }
      });
      return blogs;
    } catch (error) {
      throw new Error(`Error getting blogs: ${error.message}`);
    }
  }

  async update(id, data) {
    try {
      const blog = await this.model.findOne({
        where:{
          id:id,
          is_deleted: false
        }
      });
      if (!blog)throw new Error(`Blog with id ${id} not found`);

      const updated = await blog.update({
        title: data.title,
        description: data.description,
        createdAt: data.createdAt,
        image_url: data.image_url,
        therapistId: data.therapistId,
      });

      return new Blog(updated);
    } catch (error) {
      throw new Error(`Error updating blog: ${error.message}`);
    }
  }

  async delete(id) {
    try {
      const blog = await this.model.findByPk(id);
      if (!blog) throw new Error(`Blog with id ${id} not found`);

      const updated = await blog.update({
        is_deleted: true,
      });

      return new Blog(updated);
    } catch (error) {
      throw new Error(`Error deleting blog: ${error.message}`);
    }
  }
}

module.exports = SequelizeBlogRepository;
