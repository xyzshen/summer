import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const News = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h2>公司动态</h2>
                    <p>这是我们公司的最新动态。</p>
                </Col>
            </Row>
        </Container>
    );
};

export default News;
