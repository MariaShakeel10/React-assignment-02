import React from 'react'
import './App.css'
import Navbar from './components/Navbar';
import './App.css';
import { Layout } from 'antd';
import Sec1 from './components/Sec1';
import Card1 from './components/Card1';
import Sec2 from './components/Sec2';
import Footer1 from './components/Foooter1';
import Flights from './components/Flights';
const { Header, Content, Footer } = Layout;
function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Content>
          <Sec1 />
          <Card1 />
          <Sec2 />
          <Flights  />
        </Content>
      </div>
      <Footer >
        <Footer1 />
      </Footer>
    </>
  )
}

export default App
