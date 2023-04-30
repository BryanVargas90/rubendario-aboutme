import {Col, Container, Row } from "react-bootstrap"

export default function About () {
    return (
        <main>
            <Container>
                <Row className="rounded-circle">
                    <Col sm={12} md={6}>
                        <img src="/images/Dario.png" className="rounded-circle"/>
                
                    </Col>

                    <Col>
                    <h1> Ruben Dario</h1>
                    <p className="aboutp">Rubén Darío was a Nicaraguan poet who lived from 1867 to 1916 and is widely considered to be the 
                        father of the modernist literary movement in Spanish language literature. 
                        He was a prolific writer who created works in various genres including poetry, prose, and journalism.
                        His poetry is known for its musicality, vivid imagery, and innovative use of language and was influential 
                        in shaping modern Spanish-language poetry. He was also a diplomat and traveled widely throughout Europe and the Americas, which influenced his writing and gave him a unique perspective on cultural and social issues of his time.

                    </p>
                    
                    </Col>

                </Row>
            </Container>
        </main>
    );
}