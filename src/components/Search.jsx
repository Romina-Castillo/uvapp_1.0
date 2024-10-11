import { useState, useEffect } from "react";
import { InputBase, Box, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios'; // para traer datos desde la API

export default function SearchComponent() {
    const [searchQuery, setSearchQuery] = useState(""); // Para almacenar la búsqueda por palabra
    const [filter, setFilter] = useState(""); // Para filtrar por bodega o carrera
    const [data, setData] = useState([]); // Para almacenar los datos traídos de la API
    const [filteredData, setFilteredData] = useState([]); // Almacenar los resultados filtrados

    // 3. Función para traer los datos desde la API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/datos"); // Llama a tu API
                setData(response.data);
                setFilteredData(response.data); // Inicialmente muestra todos los datos
            } catch (error) {
                console.error("Error al traer los datos", error);
            }
        };
        fetchData();
    }, []);

    // 4. Función de filtrado por bodega o carrera
    const handleFilterChange = (filterType) => {
        setFilter(filterType);
        const filtered = data.filter(item => 
            filterType === "bodega" ? item.type === "bodega" : item.type === "carrera"
        );
        setFilteredData(filtered);
    };

    // 5. Función de búsqueda por palabra
    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        const searchResults = data.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(searchResults);
    };

    return (
        <Box>
            {/* Barra de búsqueda */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <SearchIcon />
                <InputBase
                    placeholder="Buscar por nombre..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    sx={{
                        ml: 1,
                        color: "black",
                        backgroundColor: "white",
                        borderRadius: 1,
                        padding: '0 10px',
                        width: '100%',
                    }}
                />
            </Box>

            {/* Botones de filtro */}
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                <Button onClick={() => handleFilterChange("bodega")} variant={filter === "bodega" ? "contained" : "outlined"}>
                    Filtrar por Bodega
                </Button>
                <Button onClick={() => handleFilterChange("carrera")} variant={filter === "carrera" ? "contained" : "outlined"}>
                    Filtrar por Carrera
                </Button>
            </Box>

            {/* 6. Renderizado de la vista con resultados */}
            <Box>
                {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                        <Box key={item.id} sx={{ mb: 2 }}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </Box>
                    ))
                ) : (
                    <p>No se encontraron resultados</p>
                )}
            </Box>
        </Box>
    );
}
