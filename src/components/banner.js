import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import heller1 from '../images/heller1.jpg';
import heller2 from '../images/heller2.jpg';
import heller3 from '../images/heller3.jpg';
import hellersign from '../images/hellersign.png';

const Banner = () => (
    <section id='banner'>
        <div className='inner'>
            <header className='container'>
                <Row>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant='top' src={heller1} />
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant='top' src={heller2} />
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant='top' src={heller3} />
                        </Card>
                    </Col>
                    <Col>
                        <img src={hellersign}/>
                    </Col>
                </Row>
                <Row></Row>
            </header>
            <div className='content'>
                <p>Hello Hello</p>
            </div>
        </div>
    </section>
)

export default Banner;