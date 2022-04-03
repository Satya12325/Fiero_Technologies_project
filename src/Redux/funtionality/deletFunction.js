import { delete_failure, delete_request, delete_success } from "./action"
import axios from "axios";
import { addTodo,getTodo } from "../add/action";

export const delete_api = (_id)=>(dispatch)=>{
   console.log("id",_id)
    dispatch(delete_request());
    return axios
    .delete(`http://localhost:8000/users/${_id}`)
    
    .then((res)=>{
        dispatch(delete_success(_id))
        console.log(res)
        dispatch(getTodo())
    })
    .catch((res)=>{
        dispatch(delete_failure())
        console.log(res)
    })
   
}