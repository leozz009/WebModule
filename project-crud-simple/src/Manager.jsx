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
  { id: 1, nombre: "Jorge Carranza", empresa: "Tec", edad: 20, sexo: "M", puesto: "Desarrollador" },
  { id: 2, nombre: "Juan Perez", empresa: "Tec", edad: 20, sexo: "M", puesto: "Desarrollador" },
  { id: 3, nombre: "Maria Lopez", empresa: "Tec", edad: 20, sexo: "F", puesto: "Desarrollador" },
  { id: 4, nombre: "Ana Martinez", empresa: "Tec", edad: 20, sexo: "F", puesto: "Desarrollador" },
  { id: 5, nombre: "Pedro Rodriguez", empresa: "Tec", edad: 20, sexo: "M", puesto: "Desarrollador" },
  { id: 6, nombre: "Jose Hernandez", empresa: "Tec", edad: 20, sexo: "M", puesto: "Desarrollador" },
  { id: 7, nombre: "Luis Gonzalez", empresa: "Tec", edad: 20, sexo: "M", puesto: "Desarrollador" },
  { id: 8, nombre: "Carlos Ramirez", empresa: "Tec", edad: 20, sexo: "M", puesto: "Desarrollador" },
  { id: 9, nombre: "Ricardo Torres", empresa: "Tec", edad: 20, sexo: "M", puesto: "Desarrollador" },
];

class Manager extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      nombre: "",
      empresa: "",
      edad: "",
      sexo: "",
      puesto: "",
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
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id === registro.id) {
        registro.nombre = dato.nombre;
        registro.empresa = dato.empresa;
        registro.edad = dato.edad;
        registro.sexo = dato.sexo
        registro.puesto = dato.puesto
        contador++;
      }
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm(
      "Estás Seguro que deseas Eliminar el elemento " + dato.id
    );
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id === registro.id) {
          arreglo.splice(contador, 1);
        }
      });
      contador++;
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


  render(){
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
              <th>Empresa</th>
              <th>Edad</th>
              <th>Sexo</th>
              <th>Puesto</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((dato) => (
              <tr key={dato.id}>
                <td>{dato.id}</td>
                <td>{dato.nombre}</td>
                <td>{dato.empresa}</td>
                <td>{dato.edad}</td>
                <td>{dato.sexo}</td>
                <td>{dato.puesto}</td>
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
            <h3>Insertar nombre</h3>
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
            <label>Empresa: </label>
            <input
              className="form-control"
              name="empresa"
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
            <label>Sexo: </label>
            <input
              className="form-control"
              name="sexo"
              type="text"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Puesto: </label>
            <input
              className="form-control"
              name="puesto"
              type="text"
              onChange={this.handleChange}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => this.insertar()}>
            Insertar{" "}
          </Button>
          <Button
            className="btn btn-danger"
            onClick={() => this.cerrarModalInsertar()}
          >
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
            <label> Id:</label>
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
            <label>Empresa:</label>
            <input
              className="form-control"
              name="empresa"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.empresa}
            />
          </FormGroup>

          <FormGroup>
            <label>Edad: :</label>
            <input
              className="form-control"
              name="edad"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.edad}
            />
          </FormGroup>

          <FormGroup>
            <label>Sexo: :</label>
            <input
              className="form-control"
              name="sexo"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.sexo}
            />
          </FormGroup>

          <FormGroup>
            <label>Puesto: </label>
            <input
              className="form-control"
              name="puesto"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.puesto}
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
export default Manager;