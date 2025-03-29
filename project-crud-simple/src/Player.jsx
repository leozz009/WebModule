import React from "react";
import {
  Container,
  Button,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const data = [
  { id: 1, nombre: "Kylian Mbappe", team: "Real Madrid", edad: 25, sexo: "M", posicion: "DC" },
  { id: 2, nombre: "Jude Bellinham", team: "Real Madrid", edad: 21, sexo: "M", posicion: "MCO" },
  { id: 3, nombre: "Vinicius Jr", team: "Real Madrid", edad: 24, sexo: "F", posicion: "EI" },
  { id: 4, nombre: "Lamine Yamal", team: "Barcelona", edad: 17, sexo: "F", posicion: "ED" },
  { id: 5, nombre: "Julian Alvarez", team: "Atletico de Madrid", edad: 25, sexo: "M", posicion: "DC" },
  { id: 6, nombre: "Harry Kayne", team: "Bayern", edad: 31, sexo: "M", posicion: "DC" },
  { id: 7, nombre: "Santiago Gimenez", team: "Milan", edad: 23, sexo: "M", posicion: "DC" },
  { id: 8, nombre: "Leo Messi", team: "Inter de Miami", edad: 39, sexo: "M", posicion: "MP" },
  { id: 9, nombre: "Cristiano Ronaldo", team: "Al Nassar", edad: 40, sexo: "M", posicion: "DC" },
  { id: 10, nombre: "Neymar Jr", team: "Santos", edad: 31, sexo: "M", posicion: "MCO" },
];

class Player extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      nombre: "",
      team: "",
      edad: "",
      sexo: "",
      posicion: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    const arreglo = this.state.data.map((registro) =>
      registro.id === dato.id ? { ...dato } : registro
    );
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm(
      "¿Estás seguro que deseas eliminar el elemento " + dato.id + "?"
    );
    if (opcion) {
      var arreglo = this.state.data.filter(registro => registro.id !== dato.id);
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar = () => {
    var valorNuevo = { ...this.state.form };
    valorNuevo.id = this.state.data.length + 1;
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  };

  handleChange = (e) => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value },
    });
  };

  render() {
    return (
      <>
        <Container>
          <br />
          <Button color="success" onClick={() => this.mostrarModalInsertar()}>
            Crear
          </Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Equipo</th>
                <th>Edad</th>
                <th>Sexo</th>
                <th>Posición</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.team}</td>
                  <td>{dato.edad}</td>
                  <td>{dato.sexo}</td>
                  <td>{dato.posicion}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={() => this.eliminar(dato)}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div>
              <h3>Insertar jugador</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>Id: </label>
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length + 1}
              />
            </FormGroup>
            <FormGroup>
              <label>Nombre: </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>Equipo: </label>
              <input
                className="form-control"
                name="team"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Edad: </label>
              <input
                className="form-control"
                name="edad"
                type="number"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Género: </label>
              <input
                className="form-control"
                name="sexo"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Posición: </label>
              <input
                className="form-control"
                name="posicion"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.insertar()}>
              Insertar
            </Button>
            <Button className="btn btn-danger" onClick={() => this.cerrarModalInsertar()}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
            <div>
              <h3>Editar Registro</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>Id:</label>
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            <FormGroup>
              <label>Nombre:</label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.nombre}
              />
            </FormGroup>
            <FormGroup>
              <label>Equipo:</label>
              <input
                className="form-control"
                name="team"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.team}
              />
            </FormGroup>
            <FormGroup>
              <label>Edad:</label>
              <input
                className="form-control"
                name="edad"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.edad}
              />
            </FormGroup>
            <FormGroup>
              <label>Sexo:</label>
              <input
                className="form-control"
                name="sexo"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.sexo}
              />
            </FormGroup>
            <FormGroup>
              <label>Posición:</label>
              <input
                className="form-control"
                name="posicion"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.posicion}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.editar(this.state.form)}>
              Editar
            </Button>
            <Button color="danger" onClick={() => this.cerrarModalActualizar()}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default Player;
