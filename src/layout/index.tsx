import { useState } from "react";
// antd
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  DatabaseOutlined,
  UserOutlined,
  BookOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
// rrd
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
// style
import "./style.scss";
const { Header, Sider, Content } = Layout;

const Index = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // my code start <--------------------------------
  const { pathname } = useLocation();
  const navigate = useNavigate();

  interface navListInterface {
    path: string;
    title: string;
    icon: React.ReactNode;
  }

  const navList: navListInterface[] = [
    { path: "/home", title: "home", icon: <HomeOutlined /> },
    { path: "/home/courses", title: "courses", icon: <DatabaseOutlined /> },
    { path: "/home/users", title: "users", icon: <UserOutlined /> },
    {
      path: "/home/certificates",
      title: "certificates",
      icon: <BookOutlined />,
    },
  ];

  const menuItems = navList.map((el) => ({
    key: el.path,
    icon: el.icon,
    label: (
      <NavLink className="flex items-center gap-6" to={el.path}>
       
         {el.title}
      </NavLink>
    ),
    className: pathname === el.path
      ? "custom-active-item text-[18px]"
      : "text-[18px]",
  }));

  return (
    <Layout className="">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={menuItems} // `items` prop'idan foydalaniladi
          style={{
            minHeight: "100vh",
          }}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div className="flex items-center ">
            <div
              className="logo"
              style={{ textAlign: "center" }}
            >
              <img
                src="https://img.freepik.com/premium-vector/online-course-logo-design-template_145155-3473.jpg"
                alt="logo"
                style={{ minWidth: 152, height: "60px", objectFit:"cover" }}
              />
            </div>
            <div className="flex items-center justify-between w-full">
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
              <Button
                type="text"
                icon={<LogoutOutlined />}
                onClick={() => {
                  navigate("/");
                }}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Index;
