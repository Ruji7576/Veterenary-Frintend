import React from 'react';
import PropTypes from 'prop-types';

const Appointment = ({ appointment, setAppointment, deleteAppointment }) => {
  const { id, dateTime, consultationType, reason, status } = appointment;

  const handleDelete = () => {
    if (window.confirm('Do you want to delete this appointment?')) {
      deleteAppointment(id);
    }
  };

  const handleEdit = () => {
    setAppointment(appointment);
  };

  return (
    <div className="ml-5 mr-1 my-10 bg-white shadow-md px-5 py-5 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Date and Time: <span className="font-normal normal-case">{dateTime ?? 'Not specified'}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Consultation Type: <span className="font-normal normal-case">{consultationType ?? 'Not specified'}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Reason: <span className="font-normal normal-case">{reason ?? 'Not specified'}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Status: <span className="font-normal normal-case">{status ? 'Completed' : 'Pending'}</span>
      </p>
      <div className="flex mt-4">
        <button
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg transition duration-300"
          type="button"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg ml-2 transition duration-300"
          type="button"
          onClick={handleEdit}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

Appointment.propTypes = {
  appointment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    dateTime: PropTypes.string,
    consultationType: PropTypes.string,
    reason: PropTypes.string,
    status: PropTypes.bool,
  }).isRequired,
  setAppointment: PropTypes.func.isRequired,
  deleteAppointment: PropTypes.func.isRequired,
};

export default Appointment;
