import React from 'react';
import { Layout, Row, Col } from 'antd';


const { Footer } = Layout;

const Footer1 = () => {
    return (
        <Footer style={{ padding: '40px 50px' }}>
            <Row gutter={[16, 16]} justify="space-between">
                <Col xs={24} sm={12} md={4}>
                    <h3 style={{ color:'black' }}>Jadoo.</h3>
                    <p>Book your trip in minute, get full Control for much longer.</p>
                </Col>
                <Col xs={24} sm={12} md={4}>
                    <h3 style={{ color:'black' }}>Company</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li><a href="#" style={{ color:'black' }}>About</a></li>
                        <li><a href="#" style={{ color:'black' }}>Careers</a></li>
                        <li><a href="#" style={{ color:'black' }}>Contact</a></li>
                    </ul>
                </Col>
                <Col xs={24} sm={12} md={4}>
                    <h3 style={{ }}>Quick Links</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li><a href="#" style={{ color:'black' }}>Home</a></li>
                        <li><a href="#" style={{ color:'black' }}>Services</a></li>
                        <li><a href="#" style={{ color:'black' }}>Contact</a></li>
                    </ul>
                </Col>
                <Col xs={24} sm={12} md={4}>
                    <h3 style={{  }}>Contact</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li><a href="#" style={{ color:'black' }}>Help</a></li>
                        <li><a href="#" style={{ color:'black' }}>FAQs</a></li>
                        <li><a href="#" style={{ color:'black' }}>Affilates</a></li>
                    </ul>
                </Col>
                <Col xs={24} sm={12} md={4}>
                    <h3 style={{ color:'black' }}>More</h3>
                    <p>Airline Fees</p>
                    <p>Low fare airlines</p>
                    <p>Airlines</p>
                    
                </Col>
            </Row>
            <div style={{ textAlign: 'center', marginTop: 20 }}>
                
            </div>
        </Footer>
    );
};

export default Footer1;
