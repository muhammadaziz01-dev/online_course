import React from "react";
import { Table } from "antd";
import { TableProps } from "@interface";

const App: React.FC<TableProps> = ({ columns, data, boolean }) => {
  
  return (
    <>
      <Table
        loading={boolean}
        size="large"
        columns={columns}
        dataSource={data}
        bordered
        scroll={{ y: 800 }}
        className="global-table"
        pagination={false}
      />
    </>
  );
};

export default App;