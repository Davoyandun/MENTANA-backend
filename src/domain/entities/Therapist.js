class Therapist {
  constructor({id, name, speciality, description, password, email, phone, image_url, is_admin, is_deleted}) {
    this.id = id;
    this.name = name;
    this.speciality = speciality;
    this.description = description;
    this.password = password;
    this.email = email;
    this.phone = phone;
    this.image_url = image_url;
    this.is_admin = is_admin;
    this.is_deleted = is_deleted;
  }
}

module.exports = Therapist;
