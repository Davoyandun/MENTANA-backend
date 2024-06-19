class GetBlogsByPaginationUseCase {
  constructor(blogRepository) {
    this.blogRepository = blogRepository;
  }

  async execute(limit, offset, title) {
    const blogs = await this.blogRepository.getByPagination(limit, offset, title);
    return blogs;
  }
}

module.exports = GetBlogsByPaginationUseCase;
