const Blog = require("../../../domain/entities/Blog");

class CreateBlogUseCase {
  constructor(blogRepository) {
    this.blogRepository = blogRepository;
  }

  async execute(blogData) {
    if (
      !blogData.title ||
      !blogData.description ||
      !blogData.createdAt ||
      !blogData.image_url ||
      !blogData.therapistId
    ) {
      throw new Error("Creation data missing");
    }


    const therapist = new Blog(blogData);

    const savedTherapist = await this.blogRepository.create(therapist);

    return savedTherapist;
  }
}

module.exports = CreateBlogUseCase;
