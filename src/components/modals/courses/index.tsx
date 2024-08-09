import { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { ConfigProvider, Form, Input, message } from "antd";
import { useCoursesStore } from "@stor";

interface propsData {
  title?: string;
  id?: number;
  data?: any;
}

const Index = ({ title, data, id }: propsData) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const { updateDataCourses, postDataCourses } = useCoursesStore();
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

  // function to create or update  country <---------------
  const handelSubmit = async (value: any) => {
    setLoader(true);
    let status;
    if (!id) {
      status = await postDataCourses(value);
    } else {
      const updateData = { ...data, ...value };
      status = await updateDataCourses(updateData);
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
              {title == "post" ? "Add a course" : "Edit a courses"}
            </h1>
            <div>
              {/*Courses title*/}
              <Form.Item
                name="title"
                label="Courses title"
                hasFeedback
                style={{ width: "100%" }}
                rules={[{ required: true }]}
                initialValue={data?.title ? data?.title : ""}
              >
                <Input style={{ width: "100%" }} size="large" />
              </Form.Item>

              {/* Courses photo */}
              <Form.Item
                name="photo"
                label="Courses photo"
                hasFeedback
                style={{ width: "100%" }}
                rules={[{ required: true }]}
                initialValue={data?.photo ? data.photo : ""}
              >
                <Input style={{ width: "100%" }} size="large" />
              </Form.Item>

              {/* Courses lessonsCount */}
              <Form.Item
                name="lessonsCount"
                label="Lessons count"
                hasFeedback
                style={{ width: "100%" }}
                rules={[{ required: true }]}
                initialValue={data?.lessonsCount ? data.lessonsCount : ""}
              >
                <Input type="number" style={{ width: "100%" }} size="large" />
              </Form.Item>

              {/* Courses description */}
              <Form.Item
                name="description"
                label="Courses description"
                hasFeedback
                style={{ width: "100%" }}
                rules={[{ required: true }]}
                initialValue={data?.description ? data.description : ""}
              >
                <Input.TextArea style={{ width: "100%" }} size="small" />
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
