export const About = () => {
    return (
        <article className="w-full max-w-3xl mx-auto px-4">
            <section>
                <h2 className="text-[var(--color-cuarto)] text-2xl font-bold flex items-center gap-3 mb-6">
                    <div>
                        <img className="h-8 w-8" src="/assets/images/about.svg" alt="Icono sobre mí" />
                    </div>
                    Sobre mí
                </h2>

                <p className="text-sm text-justify text-[var(--color-cuarto)]  mb-10">
                    Estudiante de noveno semestre de Ingeniería de Sistemas, próximo a culminar mi carrera. Actualmente me encuentro enfocado en el desarrollo frontend, aprendiendo y aplicando tecnologías como React, Tailwind CSS y Vite para crear interfaces web modernas, dinámicas y adaptadas a distintos dispositivos. Me interesa especialmente el diseño limpio y funcional, así como la experiencia de usuario. Me considero una persona responsable, comprometida con el aprendizaje constante y con muchas ganas de aportar en proyectos que integren desarrollo web con enfoque visual y técnico.
                </p>

                <h3 className="text-[var(--color-cuarto)] text-2xl font-bold flex items-center gap-3 mb-6">
                   <img className="h-8 w-8" src="/assets/images/Estudios.svg" alt="Icono sobre mí" />  Estudios complementarios</h3>

                <div className="grid gap-4 sm:grid-cols-1 mb-20">
                    
                    {[
                        "Octubre 2023 - Construcción de bases de datos con MySQL duración 40 horas",
                        "Septiembre 2023 - Variables y estructuras de control en Java duración 40 horas",
                        "Octubre 2021 - Análisis para el desarrollo móvil duración 40 horas",
                        "Octubre 2021 - Aplicación de la calidad del software duración 40 horas",
                        "Octubre 2021 - Calidad del software en el proceso de desarrollo duración 40 horas",
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-[var(--color-segundo)]/10 border border-[var(--color-tercero)] rounded-lg p-4 shadow-sm text-sm text-[var(--color-cuarto)]"
                        >
                            
                            <span className="text-[var(--color-tercero)] font-bold mr-2">•</span>
                            {item}, <span className="italic">SENA Servicio Nacional de Aprendizaje</span>
                        </div>
                    ))}
                </div>
            </section>
        </article>
    );
};
