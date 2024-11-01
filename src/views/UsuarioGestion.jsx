import React, { useState } from 'react';

const UsuarioGestion = () => {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      color: '#333', 
      maxWidth: '800px', 
      margin: 'auto', 
      padding: '20px', 
      backgroundColor: '#f9f9f9', 
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333', textAlign: 'center' }}>Datos personales</h1>
      <p style={{ color: '#666', textAlign: 'center', marginBottom: '30px' }}>
        Actualiza tus datos y descubre cómo se utilizan.
      </p>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
        <img 
          src="https://via.placeholder.com/100" 
          alt="Profile" 
          style={{ borderRadius: '50%', border: '4px solid #ffc107', width: '100px', height: '100px', marginRight: '20px' }}
        />
        <button style={{ 
          backgroundColor: '#ffc107', 
          color: '#fff', 
          border: 'none', 
          padding: '10px 15px', 
          borderRadius: '5px', 
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Cambiar foto
        </button>
      </div>

      <InfoRow label="Nombre" defaultValue="Abril Aballay" />
      <InfoRow label="Nombre para mostrar" defaultValue="Elige un nombre para mostrar" />
      <InfoRow 
        label="Dirección de email" 
        defaultValue="abrillaballay@gmail.com" 
        extra="Este es el e-mail que usas para iniciar sesión y en el que recibes la confirmación de las reservas." 
        verified
      />
      <InfoRow 
        label="Número de teléfono" 
        defaultValue="Indica tu número de teléfono" 
        extra="Los proveedores de los alojamientos y las atracciones turísticas que reserves usarán este número para ponerse en contacto contigo si lo necesitan." 
      />
      <InfoRow label="Fecha de nacimiento" defaultValue="Introduce tu fecha de nacimiento" />
    </div>
  );
};

const InfoRow = ({ label, defaultValue, extra, verified }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      borderBottom: '1px solid #e0e0e0', 
      padding: '15px 0' 
    }}>
      <div style={{ flex: 1 }}>
        <p style={{ margin: '0', fontWeight: 'bold', color: '#333' }}>{label}</p>
        {isEditing ? (
          <input 
            type="text" 
            value={value} 
            onChange={handleChange} 
            style={{
              marginTop: '5px',
              padding: '8px',
              width: '100%',
              fontSize: '14px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
        ) : (
          <p style={{ margin: '5px 0', color: '#666' }}>{value}</p>
        )}
        {extra && <p style={{ margin: '0', color: '#999', fontSize: '13px' }}>{extra}</p>}
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {verified && (
          <span style={{ 
            marginRight: '10px', 
            padding: '4px 8px', 
            borderRadius: '4px', 
            backgroundColor: '#4CAF50', 
            color: '#fff', 
            fontSize: '12px',
            fontWeight: 'bold' 
          }}>
            Verificado
          </span>
        )}
        <button 
          onClick={isEditing ? handleSaveClick : handleEditClick} 
          style={{ 
            color: '#007bff', 
            textDecoration: 'none', 
            fontSize: '14px', 
            fontWeight: 'bold',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            border: 'none'
          }}
        >
          {isEditing ? 'Guardar' : 'Editar'}
        </button>
      </div>
    </div>
  );
};

export default UsuarioGestion;
