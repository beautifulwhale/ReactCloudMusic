import React from "react";
import { Layout, Menu } from "antd";
import Routers from "./components/menu";
import { Outlet } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <>
      <Routers />
      <Layout className="layout">
        <Header>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              return {
                key,
                label: `nav ${key}`,
              };
            })}
          />
        </Header>
        <Content style={{ padding: "20px 50px" }}>
          <Outlet></Outlet>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
};

export default App;
