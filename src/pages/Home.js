import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/images/banner1.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>翻新手机</h3>
                                <p>高品质翻新手机，价格实惠。</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/images/banner2.jpg"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>配件精选</h3>
                                <p>精选优质配件，提升体验。</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>产品概览</h2>
                    <p>我们提供高品质的翻新手机和配件，价格实惠，性价比高。</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
