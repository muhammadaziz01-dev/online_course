import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Table , CardVdio } from "@ui";
import { useLassonsStore } from "@stor";
import "./style.scss";
import { Spin } from "antd";
import { ModalDelete , ModalLessons } from "@modals";

const index = () => {
  const { courseId } = useParams();
  const { isLoader, getDataLessons, dataLessons } = useLassonsStore();
  const id = courseId
 
  // function getDataLessons -----------
  useEffect(() => {
    getDataLessons(id);
    console.log(id);
  }, [courseId]);
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

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
      title: "Videos",
      dataIndex: "video",
      key: "video",
      align: "center",
      render: (_: any, record: any) => (
        <CardVdio videoUrl={record?.video} /> 
      ),
    },
    {
      title: "Lessons name",
      dataIndex: "title",
      key: "title",
      align: "center",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      align: "center",
      render: (_: any, record: any) => (
        <div className="flex gap-5 accent-inherit justify-center">
          <ModalLessons title="edit" data={record} id={record?._id} />
          <ModalDelete id={record?._id} title="lesson" />
          {/* <button onClick={() => console.log(record?._id)}>Delet</button> */}
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="flex items-center justify-between py-4">
        <h1 className=" font-semibold text-[20px] text-[#090d25]">
          Our lessons
        </h1>
        <ModalLessons title="post" />
      </div>
      <Spin spinning={isLoader} size="large">
        <Table boolean={isLoader} data={dataLessons} columns={columns} />
      </Spin>
    </>
  );
};

export default index;
