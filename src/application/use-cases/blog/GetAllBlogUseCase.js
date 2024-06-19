class GetBlogByTitleUseCase {
  constructor(blogRepository){
    this.blogRepository = blogRepository;
  }

  async execute(limit, offset){
    const blogs = await this.blogRepository.getAll(limit, offset);
    
    return blogs;
  };
}

module.exports = GetBlogByTitleUseCase;