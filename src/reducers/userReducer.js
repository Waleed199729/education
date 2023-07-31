import { createSlice} from "@reduxjs/toolkit";
import { useReducer } from "react";
import { userList } from "../data/userDemoData";


const userSlice = createSlice({
    name: "users" ,
    initialState: userList,
    reducers: {
        addUser: (state, action) => {                                         //creating the action 
            state.push(action.payload)                                         // console.log(action);  
        },
        editUser: (state, action) => {
            const {id, name, email} = action.payload;              //yahan se ham data nikal arahe hain jo action ke payload me aya ha 
            const eu = state.find(user => user.id == id)                //eu => edited user
            if (eu) {
                eu.name = name;
                eu.email = email;
            }
        },
        deleteUser: (state, action) => {
            const {id} = action.payload;                             //yahan se ham data nikal arahe hain jo action ke payload me aya ha 
            const du = state.filter(user => user.id == id)
            if(du) {
                return state.filter( f => f.id !== id);
            }
        }
    }
})

export const {addUser, editUser, deleteUser} = userSlice.actions;                          // we are exporting the actions
export default userSlice.reducer;