import mongoose from 'mongoose';

const PolicestationInfo = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
});

const police_station_info = mongoose.model('Police_Id', PolicestationInfo);

export default police_station_info;