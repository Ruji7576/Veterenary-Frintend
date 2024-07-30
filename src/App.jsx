import { useEffect, useState } from "react";
import axios from 'axios';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
axios.defaults.baseURL = 'http://localhost:8080/api';
function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    fetchPacientes();
  }, []);

  const fetchPacientes = async () => {
    try {
      const response = await axios.get('/api/patients');
      setPacientes(response.data);
    } catch (error) {
      console.error('Error fetching pacientes:', error);
    }
  };

  const addPaciente = async (nuevoPaciente) => {
    try {
      const response = await axios.post('/api/patients', nuevoPaciente);
      setPacientes([...pacientes, response.data]);
    } catch (error) {
      console.error('Error adding paciente:', error);
    }
  };

  const updatePaciente = async (updatedPaciente) => {
    try {
      await axios.put(`/api/patients/${updatedPaciente.id}`, updatedPaciente);
      setPacientes(pacientes.map(p => p.id === updatedPaciente.id ? updatedPaciente : p));
    } catch (error) {
      console.error('Error updating paciente:', error);
    }
  };

  const eliminarPaciente = async (id) => {
    try {
      await axios.delete(`/api/patients/${id}`);
      setPacientes(pacientes.filter(paciente => paciente.id !== id));
    } catch (error) {
      console.error('Error deleting paciente:', error);
    }
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
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
    </div>
  );
}

export default App;
