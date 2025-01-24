import React, { useState } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navbar = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const items = [
    { key: "1", label: "Home" },
    { key: "2", label: "About" },
    { key: "3", label: "Contact" },
  ];

  const showDrawer = () => setIsDrawerVisible(true);
  const closeDrawer = () => setIsDrawerVisible(false);

  return (
    <Header
      style={{
        padding: "0 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        position: "fixed",
        zIndex: 1000,
        width: "100%",
      }}
    >
      <div
        className="logo"
        style={{ color: "black", fontWeight: "bold", fontSize: "1.5rem" }}
      >
        MyLogo
      </div>

      {/* Desktop Menu */}
      <Menu
        mode="horizontal"
        items={items}
        className="desktop-menu"
        style={{
          flex: 1,
          justifyContent: "flex-end",
          display: "none",
        }}
      />

      {/* Mobile Menu Button */}
      <Button
        className="mobile-menu-button"
        icon={<MenuOutlined />}
        onClick={showDrawer}
        style={{
          display: "block",
          border: "none",
          background: "transparent",
          fontSize: "1.25rem",
        }}
      />

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        open={isDrawerVisible}
        style={{ padding: 0 }}
      >
        <Menu theme="light" mode="vertical" items={items} />
      </Drawer>
    </Header>
  );
};

export default Navbar;
