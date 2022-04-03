import {api} from "./Server";



export const postUsersData = (product) => {
    console.log("cartproduct",product)
    
    return api.post("/users",product)
}
