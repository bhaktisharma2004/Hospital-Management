import { Admin } from "mongodb";
import mongoose, { Schema, Document } from "mongoose";


export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  imageURL: string;
  mobNumber: number;
  gender: string;
  NIC: number;
  dob: Date;
  specialty : string,
  experience : number, 
  address: number;

  role : 'admin' | 'doctor' | 'patient';

}

const UserSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  mobNumber: { type: Number, default: null },
  NIC: { type: Number, default: null },
  dob: { type: Date, default: null },
  gender: { type: String, default: null },
  specialty: { type: String, required : true },
  experience: { type: Number, required : true },
  
  password: { type: String, required: true },
  address: { type: Number, default: null },
});


export default mongoose.model<IUser>("User", UserSchema);