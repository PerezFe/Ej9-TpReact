import Citas from "./Citas";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

const Formulario = () => {
  const citaLS = JSON.parse(localStorage.getItem("CitaKey")) || [];
  const [mascota, setMascota] = useState("");
  const [duenio, setduenio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintoma, setSintoma] = useState("");
  const [arregloCitas, setArregloCitas] = useState(citaLS);

  useEffect(() => {
    localStorage.setItem("CitaKey", JSON.stringify(arregloCitas));
  }, [arregloCitas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      mascota.trim() === "" &&
      duenio.trim() === "" &&
      fecha.trim() === "" &&
      hora.trim() === "" &&
      sintoma.trim() === ""
    ) {
      alert("Falta completar datos");
    } else {
      let infoCliente = { mascota, duenio, fecha, hora, sintoma };
      setArregloCitas([...arregloCitas, infoCliente]);

      setMascota("");
      setduenio("");
      setFecha("");
      setHora("");
      setSintoma("");
    }
  };

  const borrarCita = (nombre) => {
    let modCita = arregloCitas.filter((item) => item !== nombre);

    setArregloCitas(modCita);
  };

  return (
    <>
      <Card>
        <Card.Header className="text-center">Formulario para cita</Card.Header>
        <Form className="m-3" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nombre de Mascota</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre de mascota"
              required
              minLength={3}
              maxLength={30}
              onChange={(e) => setMascota(e.target.value)}
              value={mascota}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Nombre de dueño</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre de dueño"
              required
              minLength={3}
              maxLength={30}
              onChange={(e) => setduenio(e.target.value)}
              value={duenio}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Row>
              <Col sm={12} md={6} lg={6}>
                <Form.Label>Fecha</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="dd/mm/yyyy"
                  required
                  minLength={8}
                  maxLength={10}
                  onChange={(e) => setFecha(e.target.value)}
                  value={fecha}
                ></Form.Control>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <Form.Label>Hora</Form.Label>
                <Form.Control
                  type="time"
                  placeholder="hh:mm"
                  required
                  minLength={5}
                  maxLength={5}
                  onChange={(e) => setHora(e.target.value)}
                  value={hora}
                ></Form.Control>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Form.Label>Sintomas</Form.Label>
            <Form.Control
              type="text"
              placeholder="Sintomas"
              required
              minLength={5}
              maxLength={100}
              onChange={(e) => setSintoma(e.target.value)}
              value={sintoma}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" className="my-3">
            Cargar cita
          </Button>
        </Form>
      </Card>
      <Citas arregloCitas={arregloCitas} borrarCita={borrarCita}></Citas>
    </>
  );
};

export default Formulario;