import mongoose from 'mongoose';

const magistrateinfo = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
});

const magistrate_info = mongoose.model('magistrate_id', magistrateinfo);

export default magistrate_info;