import React from 'react'
import { Col, Divider, Row, } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

function Sec2() {
    return (
        <>
            <Divider orientation="left">sub-element align full</Divider>
            <Content
                style={{
                    padding: '0 48px',
                }}
            >
                <div
                    style={{
                        background: '#fff',
                        minHeight: 280,
                        padding: 24,
                    }}
                >
                    <Row justify="space-around">
                        <Col xs={24}
                            sm={24}
                            md={24}
                            lg={12}>col-4</Col>
                        <Col xs={24}
                            sm={24}
                            md={24}
                            lg={12}>col-4</Col>

                    </Row>
                </div>
            </Content>
        </>
    )
}

export default Sec2
