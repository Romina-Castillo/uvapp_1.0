import React from 'react';
import { useParams } from 'react-router-dom';
import { bodegasData } from '../views/Bodegas'; 
import { industriasData } from '../views/Industrias'; 
import { eventosData } from '../views/Eventos';
import InfoCard from '../components/InfoCard';

const EntityPage = ({ entityType }) => {
    const { name } = useParams();

    // Elige el conjunto de datos según el tipo de entidad
    const dataMap = {
        bodega: bodegasData,
        industria: industriasData,
        evento: eventosData
    };

    // Busca la entidad que coincide con el nombre en la URL
const data = dataMap[entityType]?.find(
    item => item.route?.split('/').pop().toLowerCase() === name.toLowerCase()
);

    return (
        <InfoCard data={data} />
    );
};

export default EntityPage;
