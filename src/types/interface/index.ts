// --------- Authorization  -------------

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




// ------------------------------------