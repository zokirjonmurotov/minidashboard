import { DATA } from "../../service/api";
import useQueryHook from "../../hooks/useQueryHook";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import classes from "./home.module.scss";

import { Layout, Menu, theme, Table } from "antd";
import React from "react";
const { Header, Content, Footer, Sider } = Layout;

const columns = [
  {
    title: "Product Name",
    dataIndex: "name",
  },
  {
    title: "Description",
    dataIndex: "shortDescription",
  },
];

const App = () => {
  const { data: recData, isLoading } = useQueryHook({
    url: DATA.all_data,
  });
  const newsData = recData?.data?.items || [];

  if (!isLoading) {
    console.log(newsData);
  }

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className={classes.home}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={[
            UserOutlined,
            VideoCameraOutlined,
            UploadOutlined,
            UserOutlined,
          ].map((icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: `nav ${index + 1}`,
          }))}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Table columns={columns} dataSource={newsData} size="middle" />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
