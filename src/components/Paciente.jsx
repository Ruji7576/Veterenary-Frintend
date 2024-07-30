import React from 'react';
import PropTypes from 'prop-types';

const Paciente = ({ paciente = {}, setPaciente, eliminarPaciente }) => {
  console.log(paciente);

  if (!paciente || typeof paciente !== 'object') {
    return <div className="text-center py-4">Invalid patient data</div>;
  }

  const {
    id,
    name,
    age,
    breed,
    gender,
    identificationNumber,
    tutorFirstName,
    tutorLastName,
    tutorPhoneNumber,
    treatment,
    profileImage,
  } = paciente;

  const handleEliminar = () => {
    if (window.confirm('Do you want to delete this patient?')) {
      eliminarPaciente(id);
    }
  };

  const renderField = (label, value) => (
    <p className="font-bold mb-3 text-gray-700 uppercase">
      {label}: <span className="font-normal normal-case">{value ?? 'Not specified'}</span>
    </p>
  );

  return (
    <div className="ml-5 mr-1 my-10 bg-white shadow-md px-5 py-5 rounded-xl">
            {profileImage && (
        <img 
          src={profileImage} 
          alt={`Profile of ${name || 'patient'}`} 
          className="w-32 h-32 object-cover mt-4 rounded-full"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/path/to/default-image.jpg";
          }}
        />
      )}
      {renderField('Name', name)}
      {renderField('Age', age)}
      {renderField('Breed', breed)}
      {renderField('Gender', gender)}
      {renderField('Identification Number', identificationNumber)}
      {renderField('Tutor First Name', tutorFirstName)}
      {renderField('Tutor Last Name', tutorLastName)}
      {renderField('Tutor Phone Number', tutorPhoneNumber)}
      {renderField('Treatment', treatment)}

      <div className="flex mt-4">
        <button 
          className="py-2 px-10 bg-red-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg transition duration-300" 
          type="button" 
          onClick={handleEliminar}
        >
          Delete
        </button>
        <button 
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg ml-2 transition duration-300" 
          type="button"
          onClick={() => setPaciente(paciente)}
        >
          Edit
        </button>
        <button 
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg ml-2 transition duration-300" 
          type="button" 
          onClick={handleEliminar}
        >
          See all appointmentrs
        </button>
      </div>
    </div>
  );
};

Paciente.propTypes = {
  paciente: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    age: PropTypes.number,
    breed: PropTypes.string,
    gender: PropTypes.string,
    identificationNumber: PropTypes.string.isRequired,
    tutorFirstName: PropTypes.string,
    tutorLastName: PropTypes.string,
    tutorPhoneNumber: PropTypes.string,
    treatment: PropTypes.string,
    profileImage: PropTypes.string,
  }),
  setPaciente: PropTypes.func.isRequired,
  eliminarPaciente: PropTypes.func.isRequired,
};

export default Paciente;
