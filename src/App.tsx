import React, { Suspense } from "react";
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
        <Content>
          <Suspense fallback={<div>Loading...</div>}>
            <RouterELement />
          </Suspense>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          
        </Footer>
      </Layout>
    </>
  );
};

export default App;
