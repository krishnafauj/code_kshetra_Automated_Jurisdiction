import mongoose from 'mongoose';
const BasicInfo = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Fixed `string` type
  role:{type:String,required:true},
});
const culpritVictimSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const complaintSchema = new mongoose.Schema({
  additionalComments: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
  age: {
    type: Number,
    required: true,
  },
  complaintDetails: {
    type: String,
    required: true,
  },
  complaintTitle: {
    type: String,
    required: true,
  },
  complaintType: {
    type: String,
    required: true,
  },
  consent: {
    type: Boolean,
    required: true,
  },
  culprits: {
    type: [culpritVictimSchema], // Array of objects
    default: [],
  },
  district: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    default: "",
  },
  evidence: {
    type: mongoose.Schema.Types.Mixed,
    default: null,
  },
  fatherName: {
    type: String,
    default: "",
  },
  filingOnBehalf: {
    type: String,
    required: true,
    enum: ["self", "others"],
  },
  gender: {
    type: String,
    default: "",
  },
  incidentDate: {
    type: Date,
    required: true,
  },
  incidentLocation: {
    type: String,
    default: "",
  },
  incidentTime: {
    type: String,
    default: "",
  },
  mobile: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  policeStation: {
    type: String,
    default: "",
  },
  useremail: {
    type: String,
    required: true,
  },
  victims: {
    type: [culpritVictimSchema], // Array of objects
    default: [],
  },
}, { timestamps: true });

// Create the model
const Complaint = mongoose.model('Complaint', complaintSchema);

const UserDetailS = mongoose.model('UserDetail', BasicInfo);


export { Complaint, UserDetailS };