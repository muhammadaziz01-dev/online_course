import { Outlet } from "react-router-dom";

const index = () => {
    return (
        <>
           <div>
            Home layot 
            <Outlet/>
           </div>
        </>
    );
};

export default index;