import { useEffect, useState } from "react";
import { Table } from "@ui";
import { useCoursesStore } from "@stor";
import "./style.scss";
import { Spin } from "antd";

const index = () => {
  const { getDataCourses, dataCourses, isLoader } = useCoursesStore();
  console.log(dataCourses);
  
  // function useEffect <----
  useEffect(() => {
    getDataCourses();
  }, []);
  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  const columns = [
    {
      title: "№",
      dataIndex: "index",
      key: "index",
      render: (_: any, __: any, index: any) => index + 1,
      width: "52px",
      align: "center",
    },
    {
      title: "Courses name",
      dataIndex: "title",
      key: "title",
      align: "center",
    },
    {
      title: "Lessons count",
      dataIndex: "lessonsCount",
      key: "lessonsCount",
      align: "center",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      align: "center",
      render: (_: any, record: any) => (
        <div className="flex gap-5 accent-inherit justify-center">
          <button onClick={() => console.log(record?.title)}>Edit</button>
          <button onClick={() => console.log(record?._id)}>Delet</button>
        </div>
      ),
    },
  ];
  

  return (
    <>
      <div className=" text-center py-5">Curslar</div>
      <Spin spinning={isLoader} size="large">

      <Table boolean={isLoader} data={dataCourses} columns={columns} />
      </Spin>
    </>
  );
};

export default index;
