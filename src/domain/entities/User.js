class User {
  constructor({id, name, password, email, phone, image_url, is_deleted}) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.email = email;
    this.phone = phone;
    this.image_url = image_url;
    this.is_deleted = is_deleted;
  }
}
  
module.exports = User;
  