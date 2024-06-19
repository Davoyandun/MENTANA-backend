const validateProperties = require("../../../utils/validationProps.js");

class UpdateBlogUseCase {
  constructor(blogRepository) {
    this.blogRepository = blogRepository;
  }
    
  async execute(id, data) {
    if ( !id ) throw new Error("id required");

    const isEmptyObject = obj => Object.keys(obj).length === 0;
    if ( isEmptyObject(data) ) throw new Error("At least one piece of information is required to update");

    const validProperties = ["title","description","createdAt","image_url","therapistId"];

    validateProperties(data, validProperties);
    
    const updateBlog = await this.blogRepository.update(id, data);
    
    return updateBlog;
  }
}
    
module.exports = UpdateBlogUseCase;
    