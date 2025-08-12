export const Contenedorproyect = ({ titulo, imagen, descripcion, tecnologias, botones }) => {
  return (
    <div className="w-full max-w-sm rounded-xl bg-[var(--color-segundo)] dark:bg-[var(--color-tercero)] border border-[var(--color-tercero)] dark:border-[var(--color-cuarto)] shadow-[0_4px_12px_rgba(0,0,0,0.08)] overflow-hidden">
      
      {/* Imagen arriba */}
      <img
        className="w-full h-48 object-cover border-b border-[var(--color-tercero)] dark:border-[var(--color-cuarto)]"
        src={imagen}
        alt={`Captura del proyecto ${titulo}`}
      />

      {/* Contenido abajo */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold mb-1 text-[var(--color-cuarto)] dark:text-[var(--color-primero)]">
            {titulo}
          </h2>
          <p className="text-sm text-[var(--color-cuarto)]/80 dark:text-[var(--color-primero)]/90 line-clamp-5">
            {descripcion}
          </p>
        </div>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tecnologias.map((tec, i) => (
            <div
              key={i}
              className="flex items-center gap-1 bg-[var(--color-primero)]/70 dark:bg-[var(--color-primero)]/10 border border-[var(--color-tercero)] dark:border-[var(--color-cuarto)] px-2 py-1 rounded-full shadow-sm"
            >
              <img src={tec.icono} alt={tec.nombre} className="w-5 h-5 object-contain" />
              <span className="text-xs text-[var(--color-cuarto)] dark:text-[var(--color-primero)]">
                {tec.nombre}
              </span>
            </div>
          ))}
        </div>

        {/* Botones */}
        <div className="mt-4 flex gap-2 flex-wrap">
          {botones?.map((btn, i) => (
            <a
              key={i}
              href={btn.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-[var(--color-tercero)] hover:bg-[var(--color-cuarto)] transition-colors text-[var(--color-primero)] border border-[var(--color-cuarto)] dark:border-[var(--color-segundo)] px-2 py-1 rounded-full shadow-sm text-xs"
            >
              <img
                src={btn.icono}
                alt={btn.nombre}
                className="w-3.5 h-3.5 object-contain"
              />
              {btn.nombre}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
