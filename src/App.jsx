import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import AppointmentList from "./components/AppointmentList";

axios.defaults.baseURL = 'http://localhost:8080/api';

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchPacientes();
  }, []);

  const fetchPacientes = async () => {
    try {
      const response = await axios.get('/patients');
      setPacientes(response.data);
    } catch (error) {
      console.error('Error fetching pacientes:', error);
    }
  };

  const addPaciente = async (nuevoPaciente) => {
    try {
      const response = await axios.post('/patients', nuevoPaciente);
      setPacientes([...pacientes, response.data]);
    } catch (error) {
      console.error('Error adding paciente:', error);
    }
  };

  const updatePaciente = async (updatedPaciente) => {
    try {
      await axios.put(`/patients/${updatedPaciente.id}`, updatedPaciente);
      setPacientes(pacientes.map(p => p.id === updatedPaciente.id ? updatedPaciente : p));
    } catch (error) {
      console.error('Error updating paciente:', error);
    }
  };

  const eliminarPaciente = async (id) => {
    try {
      await axios.delete(`/patients/${id}`);
      setPacientes(pacientes.filter(paciente => paciente.id !== id));
    } catch (error) {
      console.error('Error deleting paciente:', error);
    }
  };

  // CRUD methods for appointments
  const fetchAppointments = async (patientId) => {
    try {
      const response = await axios.get(`/patients/${patientId}/appointments`);
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const addAppointment = async (patientId, newAppointment) => {
    try {
      const response = await axios.post(`/patients/${patientId}/appointments`, newAppointment);
      setAppointments([...appointments, response.data]);
    } catch (error) {
      console.error('Error adding appointment:', error);
    }
  };

  const updateAppointment = async (patientId, updatedAppointment) => {
    try {
      await axios.put(`/patients/${patientId}/appointments/${updatedAppointment.id}`, updatedAppointment);
      setAppointments(appointments.map(appt => appt.id === updatedAppointment.id ? updatedAppointment : appt));
    } catch (error) {
      console.error('Error updating appointment:', error);
    }
  };

  const deleteAppointment = async (patientId, appointmentId) => {
    try {
      await axios.delete(`/patients/${patientId}/appointments/${appointmentId}`);
      setAppointments(appointments.filter(appt => appt.id !== appointmentId));
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  return (
    <Router>
      <div className="container mx-auto mt-20">
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={
              <div className="mt-12 md:flex">
                <Formulario 
                  addPaciente={addPaciente}
                  updatePaciente={updatePaciente}
                  paciente={paciente}
                  setPaciente={setPaciente}
                />
                <ListadoPacientes 
                  pacientes={pacientes}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
              </div>
            } 
          />
          <Route 
            path="/patients/:id/appointments" 
            element={
              <AppointmentList 
                fetchAppointments={fetchAppointments}
                addAppointment={addAppointment}
                updateAppointment={updateAppointment}
                deleteAppointment={deleteAppointment}
                appointments={appointments}
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
