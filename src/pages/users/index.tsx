import { useEffect } from "react";
import {  Spin } from "antd";

import { Table } from "@ui";
import {  ModalDelete } from "@modals";
import { useUsersStore } from "@stor";

const index = () => {
  const { getDataUsers, dataUsers, isLoader } = useUsersStore();


  // function useEffect <----
  useEffect(() => {
    getDataUsers();
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
      title: "User email",
      dataIndex: "email",
      key: "email",
      align: "start",
    },
    {
      title: "User ID",
      dataIndex: "_id",
      key: "_id",
      align: "center",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      align: "center",
      render: (_: any, record: any) => (
        <div className="flex accent-inherit justify-center">
          <ModalDelete id={record?._id} title="users" />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between py-2">
        <h1 className="text-[22px] font-bold text-[#090d25]">User list</h1>
      </div>
      <Spin spinning={isLoader} size="large">
        <Table boolean={isLoader} data={dataUsers} columns={columns} />
      </Spin>
    </>
  );
};

export default index;
