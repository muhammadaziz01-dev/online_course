
import { create } from 'zustand' ;
import {courses  } from '../../service/courses';
import {StoreCourses} from "@interface"


const useCoursesStore = create <StoreCourses> ((set)=>({
    isLoader: false,
    dataCourses: [],
    getDataCourses : async()=>{
        try{
           set({isLoader: true})
           const response = await courses.getCourses()
        //    console.log(response);
           if(response.status === 200){
               set({dataCourses: response?.data});
           }
           set({isLoader: false})
       }catch(error){
        console.log(error)
        set({isLoader: false})
       }
       
    },

    postDataCourses: async(data)=>{
        
            try{
                const response = await courses.postCourses(data)
                // console.log(response)
                if(response.status === 201){
                    set((state)=>({dataCourses: [...state.dataCourses, response?.data] }))
                    return response?.status
                }
             }catch(error){
                 console.log(error)
             }
    },

    deleteDataCourses: async(id)=>{
        try{
           const response = await courses.deleteCourses(id)
           console.log(response)
           if(response.status === 200){
               set((state)=>({dataCourses: state.dataCourses.filter((el:any)=>el._id !== id)})) 
               return response?.status
           }
        }catch(error:any){
            console.log(error)
        }
    },

    updateDataCourses: async(data)=>{
            try{
                const response = await courses.updateCourses(data);
                // console.log(response);
                if(response?.status === 200){
                    set((state)=>({dataCourses: state.dataCourses.map((el:any)=>el._id == data?._id ? data : el)}))
                    return response?.status
                }
                
                }catch(error:any){
                    console.log(error)
                }
    },

}))

export default useCoursesStore