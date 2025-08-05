export const Experience = () => {
  return (
    <section className="w-full max-w-3xl mx-auto py-10 sm:py-20">
      <h2 className="text-[var(--color-cuarto)] text-2xl font-bold flex items-center gap-3 mb-10">
        <div>
          <img className="h-9 w-9" src="/assets/images/Experiencia.svg" alt="icono maletín" />
        </div>
        Experiencia Laboral
      </h2>

      <div className="relative border-l border-[var(--color-tercero)] pl-6 space-y-10">
        <div className="relative">
          <div className="absolute -left-[32px] top-7 w-4 h-4 bg-[var(--color-tercero)] rounded-full shadow-md"></div>

          <h3 className="text-[var(--color-cuarto)] font-bold text-lg">
            AUXILIAR DE SISTEMA ADMINISTRADOR DE SOFTWARE DE GEOTECNIA
          </h3>

          <p className="text-[var(--color-tercero)] font-semibold">Ingeconsulta</p>
          <p className="text-[var(--color-segundo)] text-sm mb-2">Febrero 2022 a Julio 2024</p>

          <ul className="text-sm text-justify text-[var(--color-cuarto)]/80 dark:text-[var(--color-primero)]/90 mb-2 leading-relaxed list-disc list-inside space-y-1">
            <li>Elaboración de ensayo de laboratorio.</li>
            <li>Supervisar y liderar equipo de 5 personas en proyectos de geotecnia.</li>
            <li>Control de maquinaria y equipos.</li>
            <li>Administrador de software de geotecnia, mantenimiento de equipos y auxiliar de sistema.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
