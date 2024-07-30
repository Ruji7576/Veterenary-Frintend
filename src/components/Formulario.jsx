import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ addPaciente, updatePaciente, paciente, setPaciente }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [gender, setGender] = useState('');
  const [identificationNumber, setIdentificationNumber] = useState('');
  const [tutorFirstName, setTutorFirstName] = useState('');
  const [tutorLastName, setTutorLastName] = useState('');
  const [tutorphoneNumber, setTutorphoneNumber] = useState('');
  const [treatment, setTreatment] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (paciente && Object.keys(paciente).length > 0) {
      setName(paciente.name || '');
      setAge(paciente.age || '');
      setBreed(paciente.breed || '');
      setGender(paciente.gender || '');
      setIdentificationNumber(paciente.identificationNumber || '');
      setTutorFirstName(paciente.tutorFirstName || '');
      setTutorLastName(paciente.tutorLastName || '');
      setTutorphoneNumber(paciente.tutorphoneNumber || '');
      setTreatment(paciente.treatment || '');
      setProfileImage(paciente.profileImage || '');
    }
  }, [paciente]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, age, breed, gender, identificationNumber, tutorFirstName, tutorLastName, tutorphoneNumber, treatment, profileImage].includes('')) {
      setError(true);
      return;
    }
    setError(false);

    const objetoPaciente = {
      name,
      age,
      breed,
      gender,
      identificationNumber,
      tutorFirstName,
      tutorLastName,
      tutorphoneNumber,
      treatment,
      profileImage
    };

    if (paciente.id) {
      objetoPaciente.id = paciente.id;
      updatePaciente(objetoPaciente);
    } else {
      addPaciente(objetoPaciente);
    }

    reiniciarForm();
  };

  const reiniciarForm = () => {
    setName('');
    setAge('');
    setBreed('');
    setGender('');
    setIdentificationNumber('');
    setTutorFirstName('');
    setTutorLastName('');
    setTutorphoneNumber('');
    setTreatment('');
    setProfileImage('');
    setPaciente({});
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 text-center mb-8">
        Añade pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && 
          <Error>
            Todos los campos son obligatorios
          </Error>
        }
        <div className="mb-5">
          <label htmlFor="name" className="block text-gray-700 uppercase font-bold">
            Animal's name
          </label>
          <input 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type="text" 
            placeholder="Name of your pet"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="age" className="block text-gray-700 uppercase font-bold">
            Age
          </label>
          <input 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type="text" 
            placeholder="Age of the animal"
            id="age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="breed" className="block text-gray-700 uppercase font-bold">
            Breed
          </label>
          <input 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type="text" 
            placeholder="Breed of the animal"
            id="breed"
            onChange={(e) => setBreed(e.target.value)}
            value={breed}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="gender" className="block text-gray-700 uppercase font-bold">
            Gender
          </label>
          <input 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type="text" 
            placeholder="Gender of the animal"
            id="gender"
            onChange={(e) => setGender(e.target.value)}
            value={gender}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="identificationNumber" className="block text-gray-700 uppercase font-bold">
            Identification number
          </label>
          <input 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type="text" 
            placeholder="Animal's Identification number"
            id="identificationNumber"
            onChange={(e) => setIdentificationNumber(e.target.value)}
            value={identificationNumber}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="tutorFirstName" className="block text-gray-700 uppercase font-bold">
            Tutor's first name
          </label>
          <input 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type="text" 
            placeholder="Tutor's first name"
            id="tutorFirstName"
            onChange={(e) => setTutorFirstName(e.target.value)}
            value={tutorFirstName}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="tutorLastName" className="block text-gray-700 uppercase font-bold">
            Tutor's last name
          </label>
          <input 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type="text" 
            placeholder="Tutor's last name"
            id="tutorLastName"
            onChange={(e) => setTutorLastName(e.target.value)}
            value={tutorLastName}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="tutorphoneNumber" className="block text-gray-700 uppercase font-bold">
            Tutor's phone number
          </label>
          <input 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type="text" 
            placeholder="Tutor's phone number"
            id="tutorphoneNumber"
            onChange={(e) => setTutorphoneNumber(e.target.value)}
            value={tutorphoneNumber}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="treatment" className="block text-gray-700 uppercase font-bold">
            Treatment
          </label>
          <input 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type="text" 
            placeholder="Treatment"
            id="treatment"
            onChange={(e) => setTreatment(e.target.value)}
            value={treatment}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="profileImage" className="block text-gray-700 uppercase font-bold">
            Profile image
          </label>
          <input 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type="text" 
            placeholder="URL of the image"
            id="profileImage"
            onChange={(e) => setProfileImage(e.target.value)}
            value={profileImage}
          />
        </div>

        <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-indigo-700 transition-colors"
          value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
        />
      </form>
    </div>
  );
};

export default Formulario;
