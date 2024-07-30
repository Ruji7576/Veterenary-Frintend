import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Appointment from './Appointment'; // Переконайтесь, що цей файл існує

const AppointmentList = ({ fetchAppointments, addAppointment, updateAppointment, deleteAppointment, appointments }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchAppointments(id);
  }, [fetchAppointments, id]);

  if (!appointments) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="font-black text-3xl text-center">Appointments for Patient {id}</h2>
      {appointments.length === 0 ? (
        <p>No appointments found for this patient.</p>
      ) : (
        appointments.map(appointment => (
          <Appointment
            key={appointment.id}
            appointment={appointment}
            setAppointment={() => {}}
            deleteAppointment={() => deleteAppointment(id, appointment.id)}
          />
        ))
      )}
    </div>
  );
};

AppointmentList.propTypes = {
  fetchAppointments: PropTypes.func.isRequired,
  addAppointment: PropTypes.func.isRequired,
  updateAppointment: PropTypes.func.isRequired,
  deleteAppointment: PropTypes.func.isRequired,
  appointments: PropTypes.array.isRequired,
};

export default AppointmentList;
