import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";

function App() {
  return (
    <Container className="App">
      <h1 className="text-center">Administrador pacientes de veterinaria</h1>
      <div>
      <hr/>
      <Formulario/>
     </div>
    </Container>

    
  );
}

export default App;
