class GetBlogByIdUseCase {
  constructor(blogRepository) {
    this.blogRepository = blogRepository;
  }
  
  async execute(id) {
    if ( !id ) throw new Error("id required");
  
    const blog = await this.blogRepository.getById(id);
  
    return blog;
  }
}
  
module.exports = GetBlogByIdUseCase;
  