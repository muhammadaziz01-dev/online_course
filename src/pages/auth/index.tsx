import { useState } from "react";
// import { useNavigate } from "react-router-dom";

import "./style.scss";
import { Button, ConfigProvider, Form, Input } from "antd";

const index = () => {
  // const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);

  //Aftarization -> signin and signup <-=-=-=--=-=-=-==-=-=-=-
  const signUp = async (values: any) => {
    console.log(values);

    //  try{
    //    const res = await auth.signup(usrData);
    //   //  console.log(res);
    //    if(res.status === 201){
    //       toast.success("Adbmin created successfully")
    //       setTimeout(()=>{
    //         setIsSignUp(false);
    //       }, 1000)
    //    }
    //  }catch(err:any){
    //    console.log(err);
    //    toast.error("Error " +  err?.message)
    //  }
  };

  const signIn = async (values: any) => {
    console.log(values);

    // try{
    //   const res = await auth.signin(usrData);
    //   if(res.status === 201){
    //     setCookies("access_token", res?.data?.data?.tokens?.access_token);
    //     setCookies("refresh_token", res?.data?.data?.tokens?.refresh_token);
    //     setCookies("admin_data", res?.data?.data?.admin);
    //     setCookies("admin_id", res?.data?.data?.data?.id);

    //     // setCookies("refresh_token", res?.data?.tokens?.refresh_token);
    //     toast.success("Sign in success")
    //     setTimeout(()=>{
    //         navigate("/home");
    //     }, 1000)
    //   }
    // }catch(error:any){
    //   console.log(error);
    //   toast.error("Error " +  error?.message)
    // }
  };

  //=-=-=-=-=-=---=---=--=-=-=-=-=-=-=-=-=-=-=-=---=---=--

  return (
    <>
      <div className="auth-parent">
        <div
          className={`container-auth ${isSignUp ? "active" : ""}`}
          id="container-auth"
        >
          <div className="form-container sign-up">
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#D55505",
                },
                components: {
                  Input: {
                    activeBorderColor: "#D55505",
                    activeShadow: "#D55505",
                    hoverBorderColor: "#D55505",
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
                    <Input style={{ width: 300 }} size="large" type="email" />
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
                    <Input.Password style={{ width: "100%" }} size="large" />
                  </Form.Item>

                  {/* role */}
                  <Form.Item
                    name="role"
                    label="Role"
                    hasFeedback
                    style={{ width: "100%" }}
                    rules={[{ required: true }]}
                  >
                    <Input style={{ width: "100%" }} size="large" />
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
            {/* <Formik
              initialValues={{first_name: "", last_name:"",  phone_number: "" , email: "", password: "" }}
              validationSchema={signUpValidationSchema}
              onSubmit={signUp}
            >
              {({ errors, touched }: FormikProps<any>) => (
              <Form className="w-full flex flex-col gap-[8px]">
              <h2 className=" text-center text-[#D55200] text-[22px] font-semibold">Registration</h2>
                <Field
                  as={TextField}
                  label="First name"
                  sx={{ "& input": { color: "#000", fontSize: "20px" } }}
                  type="text"
                  name="first_name"
                  error={touched.first_name && !!errors.first_name}
                  className="w-[100%] mb-1 outline-none py-0"
                  helperText={
                    <ErrorMessage
                  name="first_name"
                  component="p"
                  className="mb-1 text-red-500 text-center"/>
                  }
                />
                <Field
                  as={TextField}
                  label="Last name"
                  sx={{ "& input": { color: "#000", fontSize: "20px" } }}
                  type="text"
                  name="last_name"
                  error={touched.last_name && !!errors.last_name}
                  className="w-[100%] mb-1 outline-none py-0"
                  helperText={
                    <ErrorMessage
                  name="last_name"
                  component="p"
                  className="mb-1 text-red-500 text-center"/>
                  }
                />

                <Field
                 as={TextField}
                 label="Telafono"
                 type="tel"
                 inputRef={inputRef2}
                 name="phone_number"
                 error={touched.phone_number && !!errors.phone_number}
                 className="w-full mb-1 outline-none"
                 helperText={
                    <ErrorMessage name="phone_number" component="p" className="mb-1 text-red-500 text-center" />
                 }
                />
                

                <Field
                  as={TextField}
                  label="Email"
                  sx={{ "& input": { color: "#000", fontSize: "20px" } }}
                  type="email"
                  name="email"
                  error={touched.email &&!!errors.email}
                  className="w-[100%] mb-1 outline-none py-0"
                  helperText={
                    <ErrorMessage
                  name="email"
                  component="p"
                  className="mb-1 text-red-500 text-center"/>
                  }
                />
                

                <Field
                  as={TextField}
                  label="Password"
                  sx={{ "& input": { color: "#000", fontSize: "20px" } }}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  error={touched.password &&!!errors.password}
                  className="w-[100%] mb-1 outline-none py-0"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  helperText={
                    <ErrorMessage
                    name="password"
                    component="p"
                    className="mb-1 text-red-500 text-center"/>
                  }
                />
                

                <Button
                  sx={{ fontSize: "16px", fontWeight: "600", padding: "14px" ,backgroundColor: "#D55200" ,"&:hover" :{background: "#D52200"} }}
                  variant="contained"
                  type="submit"
                  className="w-[100%]"
                >
                  Sign Up
                </Button>
              </Form>
              )}
            </Formik> */}
          </div>
          <div className="form-container sign-in">
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#D55505",
                },
                components: {
                  Input: {
                    activeBorderColor: "#D55505",
                    activeShadow: "#D55505",
                    hoverBorderColor: "#D55505",
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
                    <Input style={{ width: 300 }} size="large" type="email" />
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
                    <Input.Password style={{ width: "100%" }} size="large" />
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
            {/* <Formik
              initialValues={{ phone_number: "", password: "" }}
              validationSchema={signInValidationSchema}
              onSubmit={signIn}
            >
              {({ errors, touched }: FormikProps<any>) => (
              <Form className="w-full flex flex-col gap-[15px]">
                <h2 className=" text-center text-[#D55200] text-[22px] font-semibold">login</h2>
                <Field
                 as={TextField}
                 label="Telafono"
                 type="tel"
                 inputRef={inputRef}
                 name="phone_number"
                 error={touched.phone_number && !!errors.phone_number}
                 className="w-full mb-1 outline-none"
                 helperText={
                    <ErrorMessage name="phone_number" component="p" className="mb-1 text-red-500 text-center" />
                 }
                />

                <p
                  onClick={() => {
                    alert("therefore, it should not be forgotten : ) ");
                    localStorage.clear();
                  }}
                  className="text-[20px] text-[#D52200] forgrt-pasword hover:text-[#d86f59] duration-200 cursor-pointer"
                >
                  Forgot password?
                </p>

                <Field
                  as={StyledTextField}
                  label="Password"
                  sx={{ "& input": { color: "#000", fontSize: "20px" } }}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  error={touched.password && !!errors.password}
                  className="w-[100%] mb-3 outline-none py-0"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  helperText={
                    <ErrorMessage
                  name="password"
                  component="p"
                  className="mb-3 text-red-500 text-center"/>
                  }
                />

                <Button
                  sx={{ fontSize: "16px", fontWeight: "600", padding: "14px" , backgroundColor: "#D55200", "&:hover" :{background: "#D52200"} }}
                  variant="contained"
                  type="submit"
                  className="w-[100%]"
                >
                  Sign In
                </Button>
              </Form>
              )}
            </Formik> */}
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of site features</p>
                <button
                  className="bg-white  rounded-md  text-[#D55505] px-3 py-1  mt-3 font-medium"
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
                  className="bg-white  rounded-md  text-[#D55505] px-3 py-1  mt-3 font-medium"
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
