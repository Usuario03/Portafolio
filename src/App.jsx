import { Header } from './components/Header.jsx'
import { Experience } from './components/experience.jsx'
import { TypingHeader } from './components/typingHeader.jsx'
import { Proyect } from './components/Proyect.jsx'
import { About } from './components/about.jsx'
export const App = () => {
  return (
    <main className='min-h-screen flex flex-col items-center'>
      <div>
        <section className="w-[343px] md:w-[672px] xl:w-[1170px] mx-auto px-4">
          <Header />

          <section id="inicio" className="scroll-mt-24">
            <TypingHeader />
          </section>

          <section id="experiencia" className="scroll-mt-24">
            <Experience />
          </section>

          <section id="proyectos" className="scroll-mt-24">
            <Proyect />
          </section>

          <section id="sobremi" className="scroll-mt-24">
            <About />
          </section>

        </section>
      </div>
    </main>
  )
}

export default App
