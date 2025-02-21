import mongoose from 'mongoose';

const lawyerinfo = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
});

const lawyer_id = mongoose.model('lawyer_id', lawyerinfo);

export default lawyer_id;