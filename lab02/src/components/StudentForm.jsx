import { useState } from "react";
import React from "react";

export const StudentForm = () => {
  const [formData, setFormData] = useState({
    matricula: "",
    nombre: "",
    apellidos: "",
    edad: "",
    universidad: "",
    carrera: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Matrícula: ${formData.matricula}\nNombre: ${formData.nombre}\nApellidos: ${formData.apellidos}\nEdad: ${formData.edad}\nUniversidad: ${formData.universidad}\nCarrera: ${formData.carrera}`
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card my-4">
            <form className="card-body cardbody-color p-lg-5" onSubmit={handleSubmit}>
              <div className="text-center">
                <img
                  src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                  className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px"
                  alt="profile"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="matricula"
                  placeholder="Matrícula"
                  value={formData.matricula}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  placeholder="Nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="apellidos"
                  placeholder="Apellidos"
                  value={formData.apellidos}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="edad"
                  placeholder="Edad"
                  value={formData.edad}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="universidad"
                  placeholder="Universidad"
                  value={formData.universidad}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="carrera"
                  placeholder="Carrera"
                  value={formData.carrera}
                  onChange={handleChange}
                />
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-color px-5 mb-5 w-100">
                  Dame toda tu info jojo
                </button>
              </div>

              <div id="emailHelp" className="form-text text-center mb-5 text-dark">
                Not Registered?{" "}
                <a href="#" className="text-dark fw-bold">
                  Create an Account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
