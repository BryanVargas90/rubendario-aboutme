import { Container, Row, Col } from "react-bootstrap";

export default function Footer () {
    return(
        <footer>
            <Container>
                <Row className="text-center">
                    <p>
                        &copy; {2023} Bryan D. Vargas
                    </p>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}