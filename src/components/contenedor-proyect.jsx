export const Contenedorproyect = ({ titulo, imagen, descripcion, tecnologias, botones }) => {
  return (
    <div className="transform hover:scale-[1.10] transition-transform duration-150 ease-in-out flex flex-col md:flex-row gap-6 items-start mb-10 p-4 rounded-xl bg-[var(--color-segundo)] dark:bg-[var(--color-tercero)] border border-[var(--color-tercero)] dark:border-[var(--color-cuarto)] shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
      <img
        className="border border-[var(--color-tercero)] dark:border-[var(--color-cuarto)] w-full md:w-72 rounded-xl object-cover"
        src={imagen}
        alt={`Captura del proyecto ${titulo}`}
      />

      <div className="flex-1">
        <h2 className="text-xl font-bold mb-2 text-[var(--color-cuarto)] dark:text-[var(--color-primero)]">
          {titulo}
        </h2>
        <p className="text-sm text-justify text-[var(--color-cuarto)]/80 dark:text-[var(--color-primero)]/90 mb-2">
          {descripcion}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {tecnologias.map((tec, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-[var(--color-primero)]/70 dark:bg-[var(--color-primero)]/10 border border-[var(--color-tercero)] dark:border-[var(--color-cuarto)] px-3 py-1 rounded-full shadow-sm"
            >
              <img src={tec.icono} alt={tec.nombre} className="w-6 h-6 object-contain" />
              <span className="text-sm leading-none text-[var(--color-cuarto)] dark:text-[var(--color-primero)]">
                {tec.nombre}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-3 flex-wrap">
          {botones?.map((btn, i) => (
            <a
              key={i}
              href={btn.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[var(--color-tercero)] hover:bg-[var(--color-cuarto)] transition-colors text-[var(--color-primero)] dark:text-[var(--color-primero)] border border-[var(--color-cuarto)] dark:border-[var(--color-segundo)] px-3 py-1 rounded-full shadow-sm"
            >
              <img
                src={btn.icono}
                alt={btn.nombre}
                className="w-4 h-4 object-contain"
              />
              {btn.nombre}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
