import { Button } from "./button";

export const HamburgerMenu = ({ isOpen, onClose, scrollToSection }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[var(--color-primero)] z-40 flex flex-col items-center justify-center gap-6 md:hidden">
      
      {/* Botón de cerrar "X" */}
      <button
        onClick={onClose}
        aria-label="Cerrar menú"
        className="absolute top-4 right-4 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-[var(--color-tercero)] hover:text-[var(--color-cuarto)] transition-colors duration-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Botones del menú */}
      <Button onClick={() => scrollToSection("inicio")}>Inicio</Button>
      <Button onClick={() => scrollToSection("experiencia")}>Experiencia</Button>
      <Button onClick={() => scrollToSection("proyectos")}>Proyectos</Button>
      <Button onClick={() => scrollToSection("sobremi")}>Sobre mí</Button>
    </div>
  );
};
