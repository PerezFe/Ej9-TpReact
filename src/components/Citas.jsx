import { Card, Row } from "react-bootstrap";
import ItemCitas from "./ItemCitas";


const Citas = (props) => {
  return (
    <>
      <Card className="mt-3">
        <Card.Header>
          <h3>Citas</h3>
        </Card.Header>
        <Card.Body>
          <Row>
            {props.arregloCitas.map((cita, posicion) => (
              <ItemCitas
                key={posicion}
                nombreCita={cita}
                borrarCita={props.borrarCita}
                mascota={cita.mascota}
                duenio={cita.duenio}
                fecha={cita.fecha}
                hora={cita.hora}
                sintoma={cita.sintoma}
              ></ItemCitas>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Citas;