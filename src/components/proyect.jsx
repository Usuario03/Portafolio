import { useState, useEffect } from "react";
import data from '../../proyectos.json';
import { Contenedorproyect } from "./contenedor-proyect";

export const Proyect = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640); // Menos de 640px = móvil
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div>
      {/* Título */}
      <section className="w-full max-w-3xl mx-auto pt-8 sm:pt-16 pb-4">
        <h2 className="text-[var(--color-cuarto)] text-2xl font-bold flex items-center gap-3 mb-6">
          <img
            className="h-9 w-9"
            src="/assets/images/Proyectos.svg"
            alt="icono proyectos"
          />
          Proyectos
        </h2>
      </section>

      {/* Grid */}
      <section
        className={`w-full mx-auto mt-0 mb-12 ${
          isMobile ? "max-w-xl px-4" : "max-w-4xl px-10"
        }`}
      >
        <div
          className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-6`}
        >
          {data.map((extension) => (
            <Contenedorproyect key={extension.titulo} {...extension} />
          ))}
        </div>
      </section>
    </div>
  );
};
