import { useEffect } from "react";
import { Spin } from "antd";

import { Table } from "@ui";
import { ModalDelete , ModalCertificates } from "@modals";
import { useCertificatesStore } from "@stor";

const index = () => {
  const { getDataCertificates, dataCertificates, isLoader } = useCertificatesStore();

  // function useEffect <----
  useEffect(() => {
    getDataCertificates();
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
      dataIndex: "courseId",
      key: "courseId",
      align: "center",
    },
    {
      title: "User name",
      dataIndex: "userId",
      key: "userId",
      align: "center",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      align: "center",
      render: (_: any, record: any) => (
        <div className="flex gap-5 accent-inherit justify-center">
          <ModalCertificates title="edit" data={record} id={record?._id} />
          <ModalDelete id={record?._id} title="certificates" />
          {/* <button onClick={() => console.log(record?._id)}>Delet</button> */}
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between py-4">
        <h1 className=" font-semibold text-[20px] text-[#090d25]">Our certificates</h1>
        <ModalCertificates title="post" />
      </div>
      <Spin spinning={isLoader} size="large">
        <Table boolean={isLoader} data={dataCertificates} columns={columns} />
      </Spin>
    </>
  );
};

export default index;
