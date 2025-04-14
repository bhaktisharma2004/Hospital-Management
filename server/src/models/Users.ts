import { Admin } from "mongodb";
import mongoose, { Schema, Document } from "mongoose";


export enum UserType {
  Doctor = "doctor",
  Patient = "patient",
  Admin = "admin"
}


export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  mobNumber: number;
  gender: string;
  NIC: string;
  dob: Date;
  specialty : string,
  experience : number, 
  password: string;
  address: number;

  role : string;

}

const UserSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  mobNumber: { type: Number, default: null },
  NIC: { type: String, default: null },
  dob: { type: Date, default: null },
  gender: { type: String, default: null },
  specialty: { type: String, required : true },
  experience: { type: Number, required : true },
  role: {type: String, required: true, default: UserType.Patient },
  password: { type: String, required: true },
  address: { type: Number, default: null },
});


export default mongoose.model<IUser>("User", UserSchema);