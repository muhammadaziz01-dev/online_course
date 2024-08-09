
import { create } from 'zustand' ;
import {lessons  } from '../../service/lessons';
import {StoreLessons} from "@interface"


const useLessonsStore = create <StoreLessons> ((set)=>({
    isLoader: false,
    dataLessons: [],
    getDataLessons : async(id)=>{
        try{
           set({isLoader: true})
           const response = await lessons.getLessons(id)
        //    console.log(response);
           if(response.status === 200){
               set({dataLessons: response?.data});
           }
           set({isLoader: false})
       }catch(error){
        console.log(error)
        set({isLoader: false})
       }
       
    },

    postDataLessons: async(data)=>{
        
            try{
                const response = await lessons.postLessons(data)
                // console.log(response)
                if(response.status === 201){
                    set((state)=>({dataLessons: [...state.dataLessons, response?.data] }))
                    return response?.status
                }
             }catch(error){
                 console.log(error)
             }
    },

    deleteDataLessons: async(id)=>{
        try{
           const response = await lessons.deleteLessons(id)
           console.log(response)
           if(response.status === 200){
               set((state)=>({dataLessons: state.dataLessons.filter((el:any)=>el._id !== id)})) 
               return response?.status
           }
        }catch(error:any){
            console.log(error)
        }
    },

    updateDataLessons: async(data)=>{
            try{
                const response = await lessons.updateLessons(data);
                // console.log(response);
                if(response?.status === 200){
                    set((state)=>({dataLessons: state.dataLessons.map((el:any)=>el._id == data?._id ? data : el)}))
                    return response?.status
                }
                
                }catch(error:any){
                    console.log(error)
                }
    },

}))

export default useLessonsStore