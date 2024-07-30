// src/components/AppointmentForm.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AppointmentForm = ({ appointment, onSave, onCancel }) => {
  const [dateTime, setDateTime] = useState('');
  const [consultationType, setConsultationType] = useState('');
  const [reason, setReason] = useState('');
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (appointment) {
      setDateTime(appointment.dateTime || '');
      setConsultationType(appointment.consultationType || '');
      setReason(appointment.reason || '');
      setStatus(appointment.status || false);
    }
  }, [appointment]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ dateTime, consultationType, reason, status, id: appointment ? appointment.id : undefined });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded">
      <div className="mb-4">
        <label className="block mb-1">Date and Time:</label>
        <input 
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Consultation Type:</label>
        <input 
          type="text"
          value={consultationType}
          onChange={(e) => setConsultationType(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Reason:</label>
        <textarea 
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Status:</label>
        <input 
          type="checkbox"
          checked={status}
          onChange={() => setStatus(!status)}
        />
        <span className="ml-2">{status ? 'Completed' : 'Pending'}</span>
      </div>
      <div className="flex">
        <button 
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Save
        </button>
        <button 
          type="button"
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

AppointmentForm.propTypes = {
  appointment: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default AppointmentForm;
