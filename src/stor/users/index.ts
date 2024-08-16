
import { create } from 'zustand' ;
import { users  } from '../../service/users';
import {StoreUsers} from "@interface"


const useUsersStore = create <StoreUsers> ((set)=>({
    isLoader: false,
    dataUsers: [],
    getDataUsers : async()=>{
        try{
           set({isLoader: true})
           const response = await users.getUsers()
        //    console.log(response);
           if(response.status === 200){
               set({dataUsers: response?.data});
           }
           set({isLoader: false})
       }catch(error){
        console.log(error)
        set({isLoader: false})
       }
       
    },

    deleteDataUsers: async(id)=>{
        try{
           const response = await users.deleteUsers(id)
           console.log(response)
           if(response.status === 200){
               set((state)=>({dataUsers: state.dataUsers.filter((el:any)=>el._id !== id)})) 
               return response?.status
           }
        }catch(error:any){
            console.log(error)
        }
    },


}))

export default useUsersStore