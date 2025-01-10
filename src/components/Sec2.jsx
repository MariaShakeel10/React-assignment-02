import React from 'react'
import { Col, Divider, Row, } from 'antd';
import { Breadcrumb, Layout, Menu, theme ,Card} from 'antd';
import { Avatar, List } from 'antd';
const { Header, Content, Footer } = Layout;
const { Meta } = Card;
import './style.css';

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },

];
function Sec2() {
    return (
        <>
            <div className="margin" style={{ margin: '20px !important' }}>
                <div
                    style={{
                        background: '#fff',
                        minHeight: 280,
                        padding: 24,
                        margin: '16px 0',
                    }}
                >
                    <Row justify="space-around" gutter={[16, 16]}>
                        <Col xs={24} sm={24} md={24} lg={12}>
                            <List
                                itemLayout="horizontal"
                                dataSource={data}
                                renderItem={(item, index) => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                                            title={<a href="https://ant.design">{item.title}</a>}
                                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                        />
                                    </List.Item>
                                )}
                            />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12} >
                            <Card
                                hoverable
                                style={{
                                    width: 240,
                                    margin:'0 auto'
                                }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default Sec2
