
import { create } from 'zustand' ;
import {certificates  } from '../../service/certificates';
import {StoreCertificates} from "@interface"


const useCertificatesStore = create <StoreCertificates> ((set)=>({
    isLoader: false,
    dataCertificates: [],
    getDataCertificates : async()=>{
        try{
           set({isLoader: true})
           const response = await certificates.getCertificates()
        //    console.log(response);
           if(response.status === 200){
               set({dataCertificates: response?.data});
           }
           set({isLoader: false})
       }catch(error){
        console.log(error)
        set({isLoader: false})
       }
       
    },

    postDataCertificates: async(data)=>{
        
            try{
                const response = await certificates.postCertificates(data)
                // console.log(response)
                if(response.status === 201){
                    set((state)=>({dataCertificates: [...state.dataCertificates, response?.data] }))
                    return response?.status
                }
             }catch(error){
                 console.log(error)
             }
    },

    deleteDataCertificates: async(id)=>{
        try{
           const response = await certificates.deleteCertificates(id)
           console.log(response)
           if(response.status === 200){
               set((state)=>({dataCertificates: state.dataCertificates.filter((el:any)=>el._id !== id)})) 
               return response?.status
           }
        }catch(error:any){
            console.log(error)
        }
    },

    updateDataCertificates: async(data)=>{
            try{
                const response = await certificates.updateCertificates(data);
                // console.log(response);
                if(response?.status === 200){
                    set((state)=>({dataCertificates: state.dataCertificates.map((el:any)=>el._id == data?._id ? data : el)}))
                    return response?.status
                }
                
                }catch(error:any){
                    console.log(error)
                }
    },

}))

export default useCertificatesStore