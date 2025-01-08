import React from 'react'
import { Col, Row, Button, Flex,Image } from 'antd';
import img1 from '../assets/Image.png'
import './style.css'


function Sec1() {
    return (
        <Row style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexWrap: 'wrap', height: '100vh', padding: '16rem', }}gap='medium'>
            <Col xs={24}
                sm={24}
                md={24}
                lg={12} style={{ textAlign: 'center', margin: '10px !important' }}>
                <p style={{ color: 'red', textTransform: 'capitalize' }}>Best Destinations around the world</p>
                <h1 style={{}}>Travel, enjoy
                    <br />
                    and live a new
                    <br />
                    and full life</h1>
                <p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                <Flex gap="small" wrap align="center" justify="center" margin='small'>
                    <Button type="primary">Primary Button</Button>
                    <Button type="danger" shape="circle">
                        A
                    </Button>
                </Flex>
            </Col>
            <Col xs={24}
                sm={24}
                md={24}
                lg={12}>
                <Image
                    width={250}
                    src={img1}
                />
            </Col>
        </Row>
    )
}

export default Sec1
