import { combineReducers } from "redux"
import { AllPostReducers } from "./AllPostsReducers"
import { LoginReducers } from "./LoginReducers"
import { SinglePostReducers } from "./SinglePostReducer"
import { RegisterReducers } from "./RegisterReducers"

export const Reducers = combineReducers({ 
  allPosts: AllPostReducers, 
  login: LoginReducers,
  singlePost: SinglePostReducers,
  register: RegisterReducers
})