import React from 'react';
import { Card, Col, Divider, Row } from 'antd';
import g1 from '../assets/Group 48.png';
import g2 from '../assets/Group 49.png';
import g3 from '../assets/Group 50.png';
import g4 from '../assets/Group 51.png';
const { Meta } = Card;
const Card1 = () => {
  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '6em' }}><h1> We offer Best services</h1></div>
      <Row justify="space-around" style={{ margin: '6em' }}>
        <Col xs={24} sm={24} md={12} lg={6}>  <Card
          hoverable
          style={{
            width: '185px',
            height: '310px',margin:'1em', padding: '0.5em', textAlign: 'center',
          }}
          cover={<img alt="example" src={g1} style={{ width: '65px', height: '75px', margin: '0 auto' }} />}
        >
          <Meta title="Calculated Weather" description="Built Wicket longer admire do barton vanity itself do in it." />
        </Card></Col>
        <Col xs={24} sm={24} md={12} lg={6}>  <Card
          hoverable
          style={{
            width: '185px',
            height: '310px',margin:'1em', padding: '0.5em', textAlign: 'center'
          }}
          cover={<img alt="example" src={g2} style={{ width: '65px', height: '75px', margin: '0 auto' }} />}
        >
          <Meta title="Best Flights" description="Engrossed listening. Park gate sell they west hard for the." />
        </Card></Col>
        <Col xs={24} sm={24} md={12} lg={6}>  <Card
          hoverable
          style={{
            width: '185px',
            height: '310px',margin:'1em', padding: '0.5em', textAlign: 'center'
          }}
          cover={<img alt="example" src={g3} style={{ width: '65px', height: '75px', margin: '0 auto' }} />}
        >

          <Meta title="Local Events" description="Barton vanity itself do in it. Preferd to men it engrossed listening." />
        </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>  <Card
          hoverable
          style={{
            width: '185px',
            height: '310px',margin:'1em', padding: '0.5em', textAlign: 'center'
          }}
          cover={<img alt="example" src={g4} style={{ width: '65px', height: '75px', margin: '0 auto' }} />}
        >
          <Meta title="Customization" description="We deliver outsourced aviation services for military customers" />
        </Card>
        </Col>
      </Row></>)
};
export default Card1;