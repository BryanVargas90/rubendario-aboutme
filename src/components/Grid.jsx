import { Container, Row, Col } from "react-bootstrap";

export default function Grid () {
    return(
        <section>
            <Container>
                <Row>
                    <Col sm={12} md={14}>
                        <h2>Greatest Achievments</h2>
                        <p>His most famous work, Azul (Blue), published in 1888, marked a turning point in Spanish-language poetry and established him as a leading figure in the movement. 
                            In this collection of poems and prose, Darío used rich and imaginative language, exotic imagery, and 
                            themes of sensuality, decadence, and modernity to express a new vision of Latin America.
                            Darío's influence on the literary world was significant and far-reaching. He inspired generations of writers across Latin America and Spain, 
                            including Pablo Neruda, Federico García Lorca, and Jorge Luis Borges, among others.</p>
                    
                    
                    
                    </Col>

                    <Col>
                    <h2>Childhood</h2>
                    <p>
                    Rubén Darío's childhood was marked by poverty and instability. He was born on January 18, 1867, in the city of Metapa, Nicaragua, which is now known as Ciudad Darío in his honor.
                    Darío's family was poor, and his parents struggled to provide for him and his siblings. His father, Manuel García, was a failed businessman who was often absent from the family home. His mother, Rosa Sarmiento, worked as a domestic servant to support the family.


                    </p>
                    
                    </Col>

                    <Col>
                    <h2>Education</h2>
                    <p>Rubén Darío's education was limited and sporadic, as he grew up in a poor family in Nicaragua. His father was a failed businessman and his mother was a domestic servant. 
                        Despite the difficult circumstances, Darío showed an early interest in literature and began writing poetry at a young age.
                        He received some formal education at a Jesuit school in León, Nicaragua, where he was exposed to European literature and culture. 
                        However, he was often rebellious and did not excel academically.
                        Darío left school at the age of 13 and began working as a journalist for local newspapers. He continued to write poetry and prose and was eventually 
                        discovered by prominent writers and intellectuals in Nicaragua who recognized his talent and supported his career.</p>
                    
                    
                    </Col>


                </Row>
            </Container>
        </section>
    )
}