import { useEffect, useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { Button, Modal, Select } from "antd";
import { ConfigProvider, Form, Input, message } from "antd";
import { useCoursesStore , useUsersStore , useCertificatesStore } from "@stor";
const { Option } = Select;
interface propsData {
  title?: string;
  id?: number;
  data?: any;
}

const Index = ({ title, data, id }: propsData) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const { getDataCourses , dataCourses } = useCoursesStore();
  const { getDataUsers, dataUsers } = useUsersStore();
  const { postDataCertificates , updateDataCertificates } = useCertificatesStore();
  const [messageApi, contextHolder] = message.useMessage();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(()=>{
    getDataCourses();
    getDataUsers();
  },[]);

  // function to create or update  country <---------------
  const handelSubmit = async (value: any) => {
    setLoader(true);
    let status;
    if (!id) {
      status = await postDataCertificates(value);
    } else {
      const updateData = { ...data, ...value };
      status = await updateDataCertificates(updateData);
    }

    if (status === 200 || status === 201) {
      messageApi.success(id ? "Update successful" : "Addition successful");
      //   toast.success(id ? "Update successful" : "Addition successful");
      setLoader(false);
      setTimeout(() => {
        handleCancel();
      }, 1000);
    } else {
      //   toast.error("Error: " + status);
      setLoader(false);
      handleCancel();
    }
  };
  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  return (
    <>
      {contextHolder}
      {title == "post" ? (
        <button
          onClick={showModal}
          className="py-2 px-6 text-white font-semibold bg-[#001529] hover:bg-[#001029] active:bg-[#001529] duration-200 rounded-lg"
        >
          To add
        </button>
      ) : (
        <Button
          color="inherit"
          onClick={showModal}
          style={{
            color: "#767676",
            border: "none",
            boxShadow: "none", // HEX formatida rang
          }}
        >
          <EditOutlined />
        </Button>
      )}
      <Modal
        className="testModal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
        width={400}
      >
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#001529",
            },
            components: {
              Input: {
                activeBorderColor: "#001529",
                activeShadow: "#001529",
                hoverBorderColor: "#001529",
              },
            },
          }}
        >
          <Form
            name="nest-messages"
            onFinish={handelSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            layout="vertical"
          >
            <h1 className="text-center mb-2 text-[23px] font-semibold">
              {title == "post" ? "Add a certificates" : "Edit a certificates"}
            </h1>
            <div>
              {/* User name | id */}
              <Form.Item
                  label="Select a user name"
                  name="userId"
                  hasFeedback
                  rules={[{ required: true, message: "Select country" }]}
                >
                  <Select
                    size="large"
                    value={data?.userId && data?.userId}
                  >
                    {dataUsers.map((item: any) => (
                      <Option key={item?._id} value={item?._id}>
                        {item?.email}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

                {/* Courses name | id */}
                <Form.Item
                  label="Select a course"
                  name="courseId"
                  hasFeedback
                  rules={[{ required: true, message: "Select country" }]}
                >
                  <Select
                    size="large"
                    value={data?.courseId && data?.courseId}
                  >
                    {dataCourses.map((item: any) => (
                      <Option key={item?._id} value={item?._id}>
                        {item?.title}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

              {/* issueDate  */}
              <Form.Item
                name="issueDate"
                label="Issue date"
                hasFeedback
                style={{ width: "100%" }}
                rules={[{ required: true }]}
                initialValue={data?.issueDate ? data.issueDate : ""}
              >
                <Input style={{ width: "100%" }} size="large" />
              </Form.Item>

              
            </div>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                loading={loader}
                style={{ width: "100%" }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </ConfigProvider>
      </Modal>
    </>
  );
};

export default Index;
