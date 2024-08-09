import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../service/auth";

import "./style.scss";
import { Button, ConfigProvider, Form, Input, message } from "antd";
import { setCookies } from "../../utils/cookies";

const index = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  //Aftarization -> signin and signup <-=-=-=--=-=-=-==-=-=-=-
  const signUp = async (values: any) => {
    console.log(values);

    try {
      const res = await auth.signup(values);
      console.log(res);
      if (res.status === 201) {
        messageApi.success("Signup successful");
        setTimeout(() => {
          setIsSignUp(false);
        }, 1000);
      }
    } catch (err: any) {
      console.log(err);
      messageApi.error("Error " + err?.message);
    }
  };

  const signIn = async (values: any) => {
    try {
      const res = await auth.signin(values);
      console.log(res);
      if (res.status === 200) {
        setCookies("access_token", res?.data?.token);
        messageApi.success("Signin successful");
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      }
    } catch (error: any) {
      console.log(error);
      messageApi.error("Error " + error?.message);
    }
  };

  //=-=-=-=-=-=---=---=--=-=-=-=-=-=-=-=-=-=-=-=---=---=--

  return (
    <>
      {contextHolder}
      <div className="auth-parent">
        <div
          className={`container-auth ${isSignUp ? "active" : ""}`}
          id="container-auth"
        >
          <div className="form-container sign-up">
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
                onFinish={signUp}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
                layout="vertical"
              >
                <h1 className="text-center mb-2 text-[23px] font-semibold">
                  Sign up
                </h1>
                <div>
                  {/*email*/}
                  <Form.Item
                    name="email"
                    label="Email"
                    hasFeedback
                    style={{ width: 300 }}
                    rules={[{ required: true }]}
                  >
                    <Input
                      style={{ width: 300, fontSize: 16 }}
                      size="large"
                      type="email"
                    />
                  </Form.Item>

                  {/* Password */}
                  <Form.Item
                    name="password"
                    label="Password"
                    hasFeedback
                    style={{ width: "100%" }}
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                      //   {
                      //     min: 6,
                      //     message: "Please input at least 6 characters!",
                      //   },
                    ]}
                  >
                    <Input.Password
                      style={{ width: "100%", fontSize: 16 }}
                      size="large"
                    />
                  </Form.Item>

                  {/* role */}
                  <Form.Item
                    name="role"
                    label="Role"
                    hasFeedback
                    style={{ width: "100%" }}
                    rules={[{ required: true }]}
                  >
                    <Input
                      style={{ width: "100%", fontSize: 16 }}
                      size="large"
                    />
                  </Form.Item>
                </div>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    //   loading={loader}
                    style={{ width: 300 }}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </ConfigProvider>
          </div>
          <div className="form-container sign-in">
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
                onFinish={signIn}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
                layout="vertical"
              >
                <h1 className="text-center mb-2 text-[23px] font-semibold">
                  Sign in
                </h1>
                <div>
                  {/*email*/}
                  <Form.Item
                    name="email"
                    label="Email"
                    hasFeedback
                    style={{ width: 300 }}
                    rules={[{ required: true }]}
                  >
                    <Input
                      style={{ width: 300, fontSize: 16 }}
                      size="large"
                      type="email"
                    />
                  </Form.Item>

                  {/* Password */}
                  <Form.Item
                    name="password"
                    label="Password"
                    hasFeedback
                    style={{ width: "100%" }}
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                      //   {
                      //     min: 6,
                      //     message: "Please input at least 6 characters!",
                      //   },
                    ]}
                  >
                    <Input.Password
                      style={{ width: "100%", fontSize: 16 }}
                      size="large"
                    />
                  </Form.Item>
                </div>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    //   loading={loader}
                    style={{ width: 300 }}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </ConfigProvider>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of site features</p>
                <button
                  className="bg-white  rounded-md  text-[#001529] px-3 py-1  mt-3 font-medium"
                  onClick={() => setIsSignUp(false)}
                >
                  Sign In
                </button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>Hello, Friend!</h1>
                <p>
                  Register with your personal details to use all of site
                  features
                </p>
                <button
                  className="bg-white  rounded-md  text-[#001529] px-3 py-1  mt-3 font-medium"
                  onClick={() => setIsSignUp(true)}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
