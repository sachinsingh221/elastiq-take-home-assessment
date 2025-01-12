"use client"
import React from 'react';
import { Spin, Layout, Row } from 'antd';
import SiteStyle from '../../components/style/cms-style';
// import BottomBar from '../components/footer';

const { Content, Footer, Header } = Layout;
function Master({ children }) {

    return (
        <SiteStyle>
            <Layout className="site-layout" >
                <Header className="site-header"/>
                <Content className="site-content">{children}</Content>
                {/* <Footer className="site-footer"><BottomBar /></Footer> */}
            </Layout>
        </SiteStyle>
    );
};

export default Master
