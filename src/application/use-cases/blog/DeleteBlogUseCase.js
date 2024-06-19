class DeleteBlogUseCase {
  constructor(blogRepository) {
    this.blogRepository = blogRepository;
  }
      
  async execute(id) {
    if ( !id ) throw new Error("id required");
      
    const deletedBlog = await this.blogRepository.delete(id);
      
    return deletedBlog;
  }
}
      
module.exports = DeleteBlogUseCase;
      