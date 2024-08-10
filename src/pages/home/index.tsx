import CountUp from 'react-countup';
import "./style.scss"


const index = () => {
    return (
        <>
        <div className=" text-center py-2 text-[25px] text-[#090928] font-semibold">General status of the admin panel and our indicators </div>
        <div className="grid grid-cols-4 p-5 gap-4">
            <div className="col-span-1 text-[18px] text-[#090928] shadow-md rounded-xl hover:shadow-xl flex items-center justify-center flex-col h-[250px]">
                <h1 className=" text-[22px] font-medium pb-5">Total courses</h1>
                <CountUp duration={1} end={120} className='text-[34px] font-bold ' />
            </div>
            <div className="col-span-1 text-[18px] text-[#090928] shadow-md rounded-xl hover:shadow-xl flex items-center justify-center flex-col h-[250px]">
                <h1 className=" text-[22px] font-medium pb-5">Users online</h1>
                <CountUp duration={1} end={230} className='text-[34px] font-bold ' />
            </div>
            <div className="col-span-1 text-[18px] text-[#090928] shadow-md rounded-xl hover:shadow-xl flex items-center justify-center flex-col h-[250px]">
                <h1 className=" text-[22px] font-medium pb-5">Total users</h1>
                <CountUp duration={1} end={1200} className='text-[34px] font-bold ' />
            </div>
            <div className="col-span-1 text-[18px] text-[#090928] shadow-md rounded-xl hover:shadow-xl flex items-center justify-center flex-col h-[250px]">
                <h1 className=" text-[22px] font-medium pb-5">Total lessons</h1>
                <CountUp duration={1} end={2500}  className='text-[34px] font-bold ' />
            </div>
        </div>
        </>
    );
};

export default index;