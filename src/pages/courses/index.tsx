import { useEffect } from "react";
import { Table } from "@ui";
import { ModalCourses, ModalDelete } from "@modals";
import { useCoursesStore } from "@stor";
import "./style.scss";
import { Image, Spin } from "antd";

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
      title: "Photos",
      dataIndex: "photo",
      key: "photo",
      align: "center",
      render: (_: any, record: any) => (
        <div className="flex accent-inherit justify-center">
          <Image
            width={100}
            height={40}
            src={
              record?.photo
                ? `${record?.photo}`
                : "https://static.vecteezy.com/system/resources/previews/005/720/408/original/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg"
            }
            alt="image"
          />
        </div>
      ),
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
          <ModalCourses title="edit" data={record} id={record?._id} />
          <ModalDelete id={record?._id} />
          {/* <button onClick={() => console.log(record?._id)}>Delet</button> */}
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between py-4">
        <h1 className=" font-semibold text-[20px] text-[#090d25]">Our courses</h1>
        <ModalCourses title="post" />
      </div>
      <Spin spinning={isLoader} size="large">
        <Table boolean={isLoader} data={dataCourses} columns={columns} />
      </Spin>
    </>
  );
};

export default index;
