import { response } from "express";
import User from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import Token from "../model/token.js";
export const createUser = async (request, response) => {
  try {
    // As we set the email as unique, so first we are checking whether the email user entered to 
    // sign up already exist or not, if yes, give error that email already exist
    const existingUser = await User.findOne({ email: request.body.email });

    //this will run if email already exist and return the response with error
    if (existingUser) {
      return response.status(400).json({ error: 'Email already exists' });
    }
    //if email does not already exist then create a new user
    const hashedPassword = await bcrypt.hash(request.body.password, 10);
    const user = {
      firstname: request.body.firstname,
      lastname: request.body.lastname,
      email: request.body.email,
      password: hashedPassword,
    };

    const newUser = new User(user);
    await newUser.save();

    return response.status(200).json({ msg: "User Created Successfully" });
  } catch (error) {
    return response.status(500).json(error);
  }
};


export const Login = async (request, response) => {
  const ACCESS_SECRET_KEY = '3593f5eec41f77e895d8cb2c83e82354e08e9e68f61c1a2eb0be929c2d023ef42ad38ac160fcf68481b0481a9508fcc53e69aefeb8f0c9a2f1bfd3e3092686b9'
  const REFRESH_SECRET_KEY = '11ff6a98a5f0b74832845219a48f07f153ebd495381add3fae4615f6e0c835af2f20c4b7ead7df738af1ba35c20afef68bc1b167f1f7f733ad7206cbf55fa24f'

  let user = await User.findOne({email: request.body.email});
  if(!user){
    return response.status(400).json({msg: 'User not found'})
  }
  try {
    let match = await bcrypt.compare(request.body.password, user.password)
if(match){
  const accessToken = jwt.sign(user.toJSON(), ACCESS_SECRET_KEY, {expiresIn: '15m'})
  const refreshToken = jwt.sign(user.toJSON(), REFRESH_SECRET_KEY)
  const newToken = new Token({token: refreshToken})
  await newToken.save();
  return response.status(200).json(
    {
      accessToken: accessToken,
      refreshToken: refreshToken,
      userData: {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email // Add other necessary user data you want to send
      }
    }
  )
}else{
  return response.status(400).json({msg: 'Incorrect Password'})
}
  } catch (error) {
    return response.status(500).json({msg: 'Login Failed'});
  }
}
