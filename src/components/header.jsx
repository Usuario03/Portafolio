import { useEffect, useState, useRef } from "react";
import { Button } from "./button";
import { HamburgerMenu } from "./hamburgerMenu";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [showHamburger, setShowHamburger] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrolled(currentScrollY > 10);

            if (window.innerWidth < 768) {
                setShowHamburger(currentScrollY < lastScrollY.current);
                lastScrollY.current = currentScrollY;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const scrollToSection = (id) => {
        requestAnimationFrame(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
            }
        });
    };
    return (
        <>
            {/* Header desktop */}
            <div
                className={`sticky top-2 z-50 hidden md:flex gap-1 justify-center px-1 py-1 
        ${scrolled
                        ? "bg-[var(--color-segundo)] border border-[var(--color-tercero)] shadow-md rounded-full mt-4 w-fit mx-auto"
                        : "bg-transparent border-transparent shadow-none rounded-none "
                    }`}
            >

                <Button onClick={() => scrollToSection("inicio")}>Inicio</Button>
                <Button onClick={() => scrollToSection("experiencia")}>Experiencia</Button>
                <Button onClick={() => scrollToSection("proyectos")}>Proyectos</Button>
                <Button onClick={() => scrollToSection("sobremi")}>Sobre mí</Button>
            </div>

            {/* Botón hamburguesa */}
            {showHamburger && !menuOpen && (
                <div className="md:hidden fixed top-4 right-4 z-50">
                    <button
                        onClick={() => setMenuOpen(true)}
                        aria-label="Menú"
                        className="p-2 rounded-full bg-[var(--color-segundo)] hover:bg-[var(--color-tercero)] transition-colors duration-300"
                    >
                        <img
                            src="/assets/images/tortuga-marina.png"
                            alt="Abrir menú"
                            className="w-8 h-8 object-contain cursor-pointer"
                        />
                    </button>
                </div>
            )}

            {/* Menú emergente en archivo separado */}
            <HamburgerMenu
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
                scrollToSection={scrollToSection}
            />
        </>
    );
};

