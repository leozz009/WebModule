import React, { useState, useEffect } from 'react';
import { createEmployee, updateEmployee } from '../services/api';

const EmployeeForm = ({ employee, onSubmitSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    salary_currency: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (employee) {
      setFormData({
        name: employee.name || '',
        position: employee.position || '',
        salary_currency: employee.salary_currency || ''
      });
    }
  }, [employee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      setError('El nombre del empleado es obligatorio');
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      if (employee) {
        await updateEmployee(employee.id, formData);
      } else {
        await createEmployee(formData);
      }
      
      setFormData({ name: '', position: '', salary_currency: '' });
      if (onSubmitSuccess) onSubmitSuccess();
    } catch (err) {
      setError('Error al guardar el empleado');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      {error && <div className="error">{error}</div>}
      
      <div className="form-group">
        <label htmlFor="name">Nombre*:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={submitting}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="position">Puesto:</label>
        <input
          type="text"
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          disabled={submitting}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="salary_currency">Moneda de Sueldo:</label>
        <input
          type="text"
          id="salary_currency"
          name="salary_currency"
          value={formData.salary_currency}
          onChange={handleChange}
          disabled={submitting}
        />
      </div>
      
      <div className="form-actions">
        <button type="submit" disabled={submitting}>
          {submitting ? 'Guardando...' : employee ? 'Actualizar' : 'Crear'}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} disabled={submitting}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};

export default EmployeeForm;
