"use client";

import Link from "next/link";
import { useState } from "react";

export default function Empire() {
  const [section, setSection] = useState("home");

  const renderContent = () => {
    if (section === "softwares") {
      return (
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-3xl font-bold text-red-500 mb-6">Softwares</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Softwares */}
            {renderSoftwareCard("software1.png", "Software 1", "Descripción del Software 1.")}
            {renderSoftwareCard("software2.png", "Software 2", "Descripción del Software 2.")}
            {renderSoftwareCard("software3.png", "Software 3", "Descripción del Software 3.")}
          </div>
        </div>
      );
    } else if (section === "cheats") {
      return (
        <>
          <section className="col-span-1 md:col-span-2 lg:col-span-3">
            <h2 className="text-3xl font-bold text-red-500 mb-6">CS 1.6 Cheats</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* CS 1.6 Cheats */}
              {renderCheatCard("alternative1.png", "ALTERNATIVE V4", "Alternative V4: un cheat avanzado para mejorar tu juego. Con características únicas, te ofrece ventajas en el campo de batalla. Mejora tu precisión y velocidad.")}
              {renderCheatCard("/evol2023.png", "EVOL 2023", "EVOL 2023: un cheat avanzado para potenciar tu juego. Con funciones únicas, mejora tu desempeño en el campo de batalla. Aumenta tu precisión y velocidad.")}
              {renderCheatCard("zeroware.png", "ZEROWARE", "ZEROWARE: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.")}
              {renderCheatCard("/evolv21.png", "EVOL V21", "EVOL V21: Eleva tu juego con este cheat de última generación. Con características innovadoras, mejora tu precisión y estrategia en el campo de batalla.")}
              {renderCheatCard("/aimware.png", "AIMWARE", "AIMWARE: El secreto mejor guardado de los jugadores profesionales. Con su tecnología avanzada Mejora tu puntería y velocidad.")}
              {renderCheatCard("/evolv23.png", "EVOL V23", "EVOL V23: Lleva tu experiencia de juego al siguiente nivel. Con herramientas de vanguardia, domina cada partida con facilidad.")}
            </div>
          </section>
          <section className="col-span-1 md:col-span-2 lg:col-span-3 mt-10">
            <h2 className="text-3xl font-bold text-red-500 mb-6">CS2 Cheats</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* CS GO Cheats */}
              {renderCheatCard("/aimstar.png", "AIMSTAR", "AIMSTAR: Desata el poder de la tormenta en tus partidas. Con características exclusivas, mejora tu rendimiento y precisión en el juego.")}
              {renderCheatCard("/trailer.png", "TEASER TRAILER", "TEASER TRAILER: Consigue frags fácilmente con este cheat de última generación. Aumenta tu precisión y velocidad en cada partida.")}
            </div>
          </section>
          <section className="col-span-1 md:col-span-2 lg:col-span-3 mt-10">
            <h2 className="text-3xl font-bold text-red-500 mb-6">GTA V Cheats</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* GTA V Cheats */}
              {renderCheatCard("/amnesia.png", "AIMNESIA", "AMNESIA: Desata el poder de la tormenta en tus partidas. Con características exclusivas, mejora tu rendimiento y precisión en el juego.")}
              {renderCheatCard("/recovery.png", "KIDDIONS", "KIDDIONS: Consigue frags fácilmente con este cheat de última generación. Aumenta tu precisión y velocidad en cada partida.")}
            </div>
          </section>
        </>
      );
    } else {
      return (
        <div className="flex items-center justify-center flex-col h-full">
          <h2 className="text-4xl font-bold text-red-500 mb-6">Welcome to ARABECS</h2>
          <p className="text-xl text-gray-400">Explore our cheats and software to enhance your gaming experience.</p>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-thumb-rounded-lg scrollbar-track-gray-950 scrollbar-track-rounded-lg">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link href="#" className="flex items-center" prefetch={false}>
          <MountainIcon className="h-6 w-6 text-red-500" />
          <span className="font-bold text-2xl text-red-500">ARABECS</span>
        </Link>
        <div className="hidden sm:block">
          <nav className="flex gap-4 sm:gap-6">
            <button
              onClick={() => setSection("home")}
              className={`text-sm font-medium hover:underline underline-offset-4 ${section === "home" ? "text-white" : "text-red-500"}`}
            >
              Home
            </button>
            <button
              onClick={() => setSection("cheats")}
              className={`text-sm font-medium hover:underline underline-offset-4 ${section === "cheats" ? "text-white" : "text-red-500"}`}
            >
              Cheats
            </button>
            <button
              onClick={() => setSection("softwares")}
              className={`text-sm font-medium hover:underline underline-offset-4 ${section === "softwares" ? "text-white" : "text-red-500"}`}
            >
              Softwares
            </button>
          </nav>
        </div>
        <div className="sm:hidden">
          <button className="rounded-full p-2">
            <MenuIcon className="h-6 w-6 text-red-500" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </header>

      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-6">
        {renderContent()}
      </main>

      <footer className="mt-auto py-4 border-t border-gray-800">
        <div className="px-4 lg:px-6">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} ARABECS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function renderCheatCard(imageSrc: string, title: string, description: string) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 w-full flex flex-col">
      <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
        <span className="sr-only">View</span>
      </Link>
      <img src={imageSrc} alt={title} className="object-cover w-full h-44" />
      <div className="bg-gray-900 p-4 flex flex-col flex-1">
        <h3 className="font-bold text-xl text-red-500">{title}</h3>
        <p className="text-sm text-gray-400 flex-grow">{description}</p>
        <a
          href="#"
          className="inline-flex h-8 items-center justify-center rounded-md border border-red-500 px-4 text-sm font-medium text-red-500 transition-colors hover:bg-red-500 hover:text-gray-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-950 disabled:pointer-events-none disabled:opacity-50 mt-auto"
        >
          Download
        </a>
      </div>
    </div>
  );
}

function renderSoftwareCard(imageSrc: string, title: string, description: string) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 w-full flex flex-col">
      <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
        <span className="sr-only">View</span>
      </Link>
      <img src={imageSrc} alt={title} className="object-cover w-full h-44" />
      <div className="bg-gray-900 p-4 flex flex-col flex-1">
        <h3 className="font-bold text-xl text-red-500">{title}</h3>
        <p className="text-sm text-gray-400 flex-grow">{description}</p>
        <a
          href="#"
          className="inline-flex h-8 items-center justify-center rounded-md border border-red-500 px-4 text-sm font-medium text-red-500 transition-colors hover:bg-red-500 hover:text-gray-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-950 disabled:pointer-events-none disabled:opacity-50 mt-auto"
        >
          Download
        </a>
      </div>
    </div>
  );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M12 2c.513 0 .977.26 1.25.677l7 11a1.5 1.5 0 01-1.25 2.323H5a1.5 1.5 0 01-1.25-2.323l7-11A1.5 1.5 0 0112 2zm0 3.4L7.4 12h9.2L12 5.4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M4 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM4 12a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM5 17a1 1 0 000 2h14a1 1 0 000-2H5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
