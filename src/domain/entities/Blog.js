class Blog {
  constructor({id, title, description, createdAt, image_url, therapistId, is_deleted}) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.createdAt = createdAt;
    this.image_url = image_url;
    this.therapistId = therapistId;
    this.is_deleted = is_deleted;
  }
}
  
module.exports = Blog;
  