import React from 'react';
import { Card,Col, Divider, Row } from 'antd';
const { Meta } = Card;
const Card1 = () => {
  return (
  <>
  <div style={{textAlign:'center',marginTop:'6em'}}><h1> We offer Best services</h1></div>
  <Row justify="space-around" style={{margin:'6em'}}>
    <Col xs={24} sm={24} md={12} lg={6}>  <Card
    hoverable
    style={{
      width: 100,
      margin: '10px',
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card></Col>
    <Col xs={24} sm={24} md={12} lg={6}>  <Card
    hoverable
    style={{
      width: 100,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card></Col>
    <Col xs={24} sm={24} md={12} lg={6}>  <Card
    hoverable
    style={{
      width: 100,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card></Col>
    <Col xs={24} sm={24} md={12} lg={6}>  <Card
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