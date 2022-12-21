import React from "react";
import RouterELement from '../src/router/index';
import { Layout } from "antd";
import Menus from "./components/menu";
const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <>
      <Layout className="layout">
        <Header>
          <Menus />
        </Header>
        <Content style={{ padding: "20px 50px" }}>
                <RouterELement/> 
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
};

export default App;
