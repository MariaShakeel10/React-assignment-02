import React from 'react';
import { Col, Row, Button, Image } from 'antd';
import img1 from '../assets/Image.png';
import './style.css';

function Sec1() {
    return (
        <Row
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                height: '100vh',
                padding: '2rem', // Adjusted for responsiveness
            }}
            gutter={[16, 16]} // Adds spacing between columns
        >
            {/* Text Content */}
            <Col xs={24} sm={24} md={12} lg={12} style={{ textAlign: 'center' }}>
                <p style={{ color: 'red', textTransform: 'capitalize' }}>
                    Best Destinations around the world
                </p>
                <h1 style={{ fontSize: '2rem' }}>
                    Travel, enjoy
                    <br />
                    and live a new
                    <br />
                    and full life
                </h1>
                <p>
                    Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                </p>
                <div style={{ marginTop: '1rem' }}>
                    <Button type="primary" style={{ marginRight: '1rem' }}>
                        Discover Now
                    </Button>
                    <Button type="primary" shape="circle" danger>
                        A
                    </Button>
                </div>
            </Col>

            {/* Image Content */}
            <Col xs={24} sm={24} md={12} lg={12} style={{ textAlign: 'center' }}>
                <Image
                    style={{ maxWidth: '100%', height: 'auto' }} // Ensures the image scales properly
                    src={img1}
                    alt="Travel Destination"
                />
            </Col>
        </Row>
    );
}

export default Sec1;