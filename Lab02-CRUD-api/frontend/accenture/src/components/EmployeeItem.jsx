import React from 'react';

const EmployeeItem = ({ employee, onDelete, onEdit }) => {
  return (
    <div className="employee-item">
      <div className="employee-info">
        <h3>{employee.name}</h3>
        <p><strong>Puesto:</strong> {employee.position || 'No especificado'}</p>
        <p><strong>Moneda de Sueldo:</strong> {employee.salary_currency || 'No especificada'}</p>
      </div>
      <div className="employee-actions">
        <button onClick={onEdit} className="edit-btn">Editar</button>
        <button onClick={onDelete} className="delete-btn">Eliminar</button>
      </div>
    </div>
  );
};

export default EmployeeItem;
