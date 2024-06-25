class Appointment {
  constructor({id, date, videoCallLink, is_deleted}) {
    this.id = id;
    this.date = date;
    this.videoCallLink = videoCallLink;
    this.is_deleted = is_deleted;
  }
}
  
module.exports = Appointment;
  