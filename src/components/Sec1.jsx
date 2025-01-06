import React from 'react'
import { Col, Row } from 'antd';


function Sec1() {
    return (
        <Row style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', height: '100vh', padding: '16rem' }}>
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
            </Col>
            <Col xs={24}
                sm={24}
                md={24}
                lg={12}>col-12</Col>
        </Row>
    )
}

export default Sec1
