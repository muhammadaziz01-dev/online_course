


// --------- Authorization  -------------
export interface Signin{
    email: string;
    password: string;
}

export interface Signup extends Signin{
    role: string;
}
export interface Request{
    signin:(data:Signin)=>any,
    signup:(data:Signup)=>any,
}
// =-=-=---=--=--=-=-=--=--=--=--=---=-=-=-=--

// ------ Courses Request ------------------

interface postCourses {
    title: string;
    description: string;
    photo: string;
    lessonsCount: number;
}

interface UpdateCourses extends postCourses{
    id: number;
}

export interface CoursesRequest {
    getCourses : ()=> any,
    postCourses : (data:postCourses)=> any,
    deleteCourses : (id:string)=> any,
    updateCourses: (data:UpdateCourses)=> any,
}

export interface StoreCourses {
    isLoader:boolean;
    dataCourses:any[];
    getDataCourses: ()=> Promise <any>;
    postDataCourses: (data:postCourses)=> Promise <any>;
    deleteDataCourses: (id:string)=> Promise <any>;
    updateDataCourses: (data:UpdateCourses)=> Promise <any>;
}
//=-=-=-========-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-










// ------------ Global ----------------
export interface TableProps {
    columns: {
      title: string;
      dataIndex: string;
      key: string;
      render?: any;
    }[];
    data: { key: string; name: string }[];
    boolean: boolean;
  }



// ------------------------------------