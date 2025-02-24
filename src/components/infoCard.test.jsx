import { render, screen } from '@testing-library/react';
import InfoCard from './InfoCard';
import { vi } from 'vitest';  // Importa `vi` de Vitest

// Mock de useNavigate para evitar errores
vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"), // Usar `importActual` para obtener las funciones reales
  useNavigate: vi.fn(),  // Usar `vi.fn()` en lugar de `jest.fn()`
}));

describe('InfoCard', () => {
  test('debería renderizar correctamente el componente', () => {
    const mockData = {
      name: "Bodega X",
      description: "Una bodega increíble.",
      location: [10, 20],
      img: "img_url",
      website: "http://bodega.com"
    };
    
    render(<InfoCard data={mockData} />);
    
    // Verificar si el nombre de la bodega se renderiza
    expect(screen.getByText(/Bodega X/i)).toBeInTheDocument();
  });
});
