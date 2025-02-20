import mongoose from 'mongoose';
import AutoIncrement from 'mongoose-sequence'; // Import plugin
const BasicInfo = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Fixed `string` type
});
const CaseInfo = new mongoose.Schema({
  email: { type: String, unique: true, required: true }, 
  Fir_NO: { type: String, unique: true }, // Fixed `string` to `String`
});

CaseInfo.plugin(AutoIncrement(mongoose), { inc_field: 'Fir_NO' });

const victimSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
});

const culpritSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
});

const complaintSchema = new mongoose.Schema({
  filingOnBehalf: { type: String, enum: ['self', 'onBehalf'], required: true },
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String },
  age: { type: Number, required: true },
  gender: { type: String },
  fatherName: { type: String },
  address: { type: String, required: true },
  district: { type: String, required: true },
  policeStation: { type: String },
  incidentDate: { type: Date, required: true },
  incidentTime: { type: String },
  incidentLocation: { type: String },
  complaintType: { type: String, required: true },
  complaintTitle: { type: String, required: true },
  complaintDetails: { type: String, required: true },
  victims: [victimSchema], // Array of victims
  culprits: [culpritSchema], // Array of culprits
  evidence: { type: String }, // Store file path or URL
  additionalComments: { type: String },
  consent: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now }, // Timestamp
});


const Complaint = mongoose.model('Complaint', complaintSchema);

const UserDetailS = mongoose.model('UserDetail', BasicInfo);

const CaseInfoModel = mongoose.model('CaseInfo', CaseInfo);

export { Complaint, UserDetailS, CaseInfoModel };