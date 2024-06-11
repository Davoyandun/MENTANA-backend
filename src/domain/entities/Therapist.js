class Therapist {
  constructor(id, name, speciality, description, password, email, phone, is_deleted) {
    this.id = id;
    this.name = name;
    this.speciality = speciality;
    this.description = description;
    this.password = password;
    this.email = email;
    this.phone = phone;
    this.is_deleted = is_deleted;
  }
}

module.exports = Therapist;
