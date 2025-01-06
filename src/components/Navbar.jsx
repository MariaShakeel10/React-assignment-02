import React, { useState } from 'react';
import { Layout, Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const { Header } = Layout;

const Navbar = () => {
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);

    const items = [
        { key: '1', label: 'Home' },
        { key: '2', label: 'About' },
        { key: '3', label: 'Contact' },
    ];

    const showDrawer = () => setIsDrawerVisible(true);
    const closeDrawer = () => setIsDrawerVisible(false);

    return (
        <Header style={{ padding: '0 16px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'white' }}>
            <div className="logo" style={{ color: 'black', fontWeight: 'bold' }}>MyLogo</div>

            {/* Desktop Menu */}
            <Menu  mode="horizontal" style={{ }} items={items} className="desktop-menu menu-items" />

            {/* Mobile Menu Button */}
            <Button className="mobile-menu-button" icon={<MenuOutlined />} onClick={showDrawer} />

            {/* Mobile Drawer */}
            <Drawer
                title="Menu"
                placement="right"
                onClose={closeDrawer}
                open={isDrawerVisible}
            >
                <Menu theme="light" mode="vertical" items={items} />
            </Drawer>
        </Header>
    );
};

export default Navbar;
