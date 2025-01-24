import React from 'react';
import { Flex, Button} from 'antd';
import image27 from '../assets/image 27.png';
import image28 from '../assets/image 28.png';
import image29 from '../assets/image 29.png';
import image30 from '../assets/image 30.png';
import image31 from '../assets/image 31.png';

const Flights = () => {
    return (
        <Flex gap="middle"  wrap justify='space-evenly' align='center' >
            <Button type="default" variant='filled'  style={{padding:'0.5em',margin:'0.5em',height:'4em'}}><img src={image27} alt="" /></Button>
            <Button type="default" variant='filled'  style={{padding:'0.5em',margin:'0.5em',height:'4em'}}><img src={image28} alt="" /></Button>
            <Button type="default" variant='filled'  style={{padding:'0.5em',margin:'0.5em',height:'4em'}}><img src={image29} alt="" /></Button>
            <Button type="default" variant='filled'  style={{padding:'0.5em',margin:'0.5em',height:'4em'}}><img src={image30} alt="" /></Button>
            <Button type="default" variant='filled'  style={{padding:'0.5em',margin:'0.5em',height:'4em'}}><img src={image31} alt="" /></Button>

        </Flex>

    );
};
export default Flights;