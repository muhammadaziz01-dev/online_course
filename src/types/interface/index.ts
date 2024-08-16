


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
    _id: number;
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



// ------ Lessons Request ------------------
interface postLessons {
    title: string;
    video: string;
    courseId: string;
}

interface UpdateLessons extends postLessons{
    _id: number;
}

export interface LessonsRequest {
    getLessons : (id:string|undefined)=> any,
    postLessons : (data:postLessons)=> any,
    deleteLessons : (id:string)=> any,
    updateLessons: (data:UpdateLessons)=> any,
}

export interface StoreLessons {
    isLoader:boolean;
    dataLessons:any[];
    getDataLessons: (id:string|undefined)=> Promise <any>;
    postDataLessons: (data:postLessons)=> Promise <any>;
    deleteDataLessons: (id:string)=> Promise <any>;
    updateDataLessons: (data:UpdateLessons)=> Promise <any>;
}
//=-=-=-========-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-



// ------ Users Request ------------------
export interface UsersRequest {
    getUsers : ()=> any,
    deleteUsers : (id:string)=> any,
}

export interface StoreUsers {
    isLoader:boolean;
    dataUsers:any[];
    getDataUsers: ()=> Promise <any>;
    deleteDataUsers: (id:string)=> Promise <any>;
}
//=-=-=-========-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-




// ------ Certificates Request ------------------
interface postCertificates {
    userId: string;
    courseId: string;
    issueDate: string;
}

interface UpdateCertificates extends postCertificates{
    _id: number;
}

export interface CertificatesRequest {
    getCertificates : ()=> any,
    postCertificates : (data:postCertificates)=> any,
    deleteCertificates : (id:string)=> any,
    updateCertificates: (data:UpdateCertificates)=> any,
}

export interface StoreCertificates {
    isLoader:boolean;
    dataCertificates:any[];
    getDataCertificates: ()=> Promise <any>;
    postDataCertificates: (data:postCertificates)=> Promise <any>;
    deleteDataCertificates: (id:string)=> Promise <any>;
    updateDataCertificates: (data:UpdateCertificates)=> Promise <any>;
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