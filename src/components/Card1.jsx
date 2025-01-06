import React from 'react';
import { Card,Col, Divider, Row } from 'antd';
const { Meta } = Card;
const Card1 = () => {
  return (
  <>
  <div style={{textAlign:'center'}}><h1> We offer Best services</h1></div>
  <Row justify="space-around">
    <Col span={4}>  <Card
    hoverable
    style={{
      width: 100,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card></Col>
    <Col span={4}>  <Card
    hoverable
    style={{
      width: 100,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card></Col>
    <Col span={4}>  <Card
    hoverable
    style={{
      width: 100,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card></Col>
    <Col span={4}>  <Card
    hoverable
    style={{
      width: 100,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card></Col>
  </Row></>)
};
export default Card1;