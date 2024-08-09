import type { PopconfirmProps } from "antd";
import { Button, message, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useCoursesStore } from "@stor";

const Index = ({id}:{id:string}) => {
  const { deleteDataCourses } = useCoursesStore();

  const confirm: PopconfirmProps["onConfirm"] = async(e) => {
    console.log(e);
    try{
        const status = await deleteDataCourses(id);
        if(status === 200){
            message.success("Course deleted successfully");
        }else{
            message.error("Error: Failed to delete course");
        }

    }catch(err:any){
        console.log(err)
        message.error("Error: " + err.message);
    }
  };

  const cancel: PopconfirmProps["onCancel"] = (e) => {
    console.log(e);
    message.info("Deletion cancelled");
  };

  return (
    <Popconfirm
      title="Delete the task"
      description="Are you sure to delete this task?"
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
      placement="leftBottom"
    >
      {/* <Button danger>Delete</Button> */}
      <Button
        color="inherit"
        danger
        style={{
          color: "#767676",
          border: "none",
          boxShadow: "none", // HEX formatida rang
        }}
      >
        <DeleteOutlined />
      </Button>
    </Popconfirm>
  );
};

export default Index;
