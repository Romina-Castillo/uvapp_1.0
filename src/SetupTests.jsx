import '@testing-library/jest-dom';  // Importar los matchers
import { vi } from 'vitest';

// Mock de useNavigate para evitar errores
vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useNavigate: vi.fn(),
}));
