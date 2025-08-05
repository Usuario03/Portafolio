import data from '../../proyectos.json'
import { Contenedorproyect } from "./contenedor-proyect"

export const Proyect = () => {
  return (
    <div >

      <section className="w-full max-w-3xl mx-auto py-10 sm:py-20">
        <h2 className="text-[var(--color-cuarto)] text-2xl font-bold flex items-center gap-3 mb-10">
          <di>
            <img className="h-9 w-9" src="/assets/images/Proyectos.svg" alt="icono proyectos" />
          </di>
          Proyectos
        </h2>


        {
          data.map(extension => <Contenedorproyect key={extension.titulo}{...extension} />)
        }


      </section>
    </div>
  )
}


