class GetRandomBlogsUseCase {
  constructor(blogRepository) {
    this.blogRepository = blogRepository;
  }
  
  async execute(limit) {
    const blogs = await this.blogRepository.getRandom(limit);
  
    return blogs;
  }
}
  
module.exports = GetRandomBlogsUseCase;
  