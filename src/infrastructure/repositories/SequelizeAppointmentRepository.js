const BaseRepository = require("../../domain/repositories/BaseRepository");
const Appointment = require("../../domain/entities/Appointment");
const { Op } = require("sequelize");

class SequelizeAppointmentRepository extends BaseRepository {
  constructor(model) {
    super();
    this.model = model;
  }

  async create(appointment) {
    try {
      const AppointmentCreated = await this.model.create(appointment);
      return new Appointment(AppointmentCreated);
    } catch (error) {
      throw new Error(`Error saving appointment: ${error.message}`);
    }
  }

  async getById(id) {
    try {
      const appointment = await this.model.findOne({
        where:{
          id:id,
          is_deleted: false
        }
      });
      if (!appointment)throw new Error("no appointment found");
      return new Appointment(appointment);
    } catch (error) {
      throw new Error(`Error getting appointment by ID: ${error.message}`);
    }
  }

  async getByPagination(limit, offset, title){
    if(title === undefined){
      title = "";
    }

    try {
      const blogs = await this.model.findAll({
        limit,
        offset,
        where: {
          is_deleted: false, // just we get all that has is_deleted prop in false
          title: {
            [Op.iLike]: `%${title}%`
          }
        }
      });
      return blogs;
    } catch (error) {
      throw new Error(`Error getting blogs: ${error.message}`);
    }
  }

  async update(id, data) {
    try {
      const appointment = await this.model.findOne({
        where:{
          id:id,
          is_deleted: false
        }
      });
      if (!appointment)throw new Error(`Appointment with id ${id} not found`);

      const updated = await appointment.update(data);

      return new Appointment(updated);
    } catch (error) {
      throw new Error(`Error updating appointment: ${error.message}`);
    }
  }

  async delete(id) {
    try {
      const appointment = await this.model.findByPk(id);
      if (!appointment) throw new Error(`Appointment with id ${id} not found`);

      const updated = await appointment.update({
        is_deleted: true,
      });

      return new Appointment(updated);
    } catch (error) {
      throw new Error(`Error deleting appointment: ${error.message}`);
    }
  }
}

module.exports = SequelizeAppointmentRepository;
