import {Response, Request, NextFunction} from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import  User, {IUser } from '../models/Users'; 
import { SECRET_KEY } from './jsonWebToken-Config';

const patientSignupController = (req : Request, res: Response, next: NextFunction ) => {
  
}

export default patientSignupController
