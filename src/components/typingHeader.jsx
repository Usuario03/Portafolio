import { useEffect, useState, useRef } from "react"

export const TypingHeader = () => {
  const name = "Jairo Arturo Leal Moreno"
  const [text, setText] = useState("")
  const isDeleting = useRef(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setText((prev) => {
        const next = isDeleting.current
          ? name.slice(0, prev.length - 1)
          : name.slice(0, prev.length + 1)

        return next
      })
    }, isDeleting.current ? 60 : 100)

    return () => clearInterval(interval)
  }, [isPaused, text])

  useEffect(() => {
    if (!isDeleting.current && text === name) {
      setIsPaused(true)
      setTimeout(() => {
        isDeleting.current = true
        setIsPaused(false)
      }, 120000) // ⏸ Esperar 2 minutos reales
    }

    if (isDeleting.current && text === "") {
      setIsPaused(true)
      setTimeout(() => {
        isDeleting.current = false
        setIsPaused(false)
      }, 1000) // ⏸ Esperar 1 seg antes de volver a escribir
    }
  }, [text])

  return (
<div className="w-full max-w-3xl mx-auto py-10 sm:py-20">
  <h2 className="desktop-typer text-2xl font-bold text-[var(--color-cuarto)] text-left  mb-5">
    {text}
    <span className="ml-1 animate-blink text-[var(--color-tercero)]">|</span>
  </h2>

  <p className="text-sm text-justify text-[var(--color-cuarto)]/80 dark:text-[var(--color-primero)]/90 mb-2">
   En proceso de formación como desarrollador web, creando interfaces modernas con React, Tailwind y Vite.
  </p>
</div>
  )
}
