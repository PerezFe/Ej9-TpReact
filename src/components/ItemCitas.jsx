import { Card, ListGroup, ListGroupItem, Col, Button } from "react-bootstrap";

const ItemCitas = (props) => {
  return (
    <>
      <Col sm={12} md={6} lg={4}>
        <Card className="mt-2">
          <Card.Header>
            <p>Dueño: {props.duenio}</p>
            <p>Mascota: {props.mascota}</p>
          </Card.Header>
          <Card.Body>
            <ListGroup>
              <ListGroupItem>Fecha: {props.fecha}</ListGroupItem>
              <ListGroupItem>Hora: {props.hora}</ListGroupItem>
              <ListGroupItem>Sintomas: {props.sintoma}</ListGroupItem>
            </ListGroup>
          <Button className="my-2" variant="danger" onClick={() => props.borrarCita(props.nombreCita)}>Borrar</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ItemCitas;
