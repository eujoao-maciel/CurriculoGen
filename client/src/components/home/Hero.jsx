import { useState } from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
   const [menuOpen, setMenuOpen] = useState(false)

   return (
      <>
         <div className="min-h-screen ">
            {/* Navbar */}
            <nav className="z-50 flex items-center justify-between h-40 w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
               <a href="#">
                  <h1 className="text-slate-100 font-semibold text-3xl">
                     CurriculoGen
                  </h1>
               </a>

               <div className="hidden md:flex items-center gap-8 transition duration-500 text-base text-slate-800">
                  <a
                     href="#"
                     className="text-slate-200 hover:text-black transition"
                  >
                     Inicio
                  </a>

                  <a
                     href="#features"
                     className="text-slate-200 hover:text-black transition"
                  >
                     Funcionalidades
                  </a>

                  <a
                     href="#testimonials"
                     className="text-slate-200 hover:text-black transition"
                  >
                     Depoimentos
                  </a>

                  <a
                     href="#cta"
                     className="text-slate-200 hover:text-black transition"
                  >
                     Contato
                  </a>
               </div>

               <div className="flex gap-2">
                  <Link
                     to="/app?state=register"
                     className="hidden md:block px-6 py-2 bg-gray-900 hover:bg-gray-800 border-black hover:border-blackactive:scale-95 transition-all rounded-full text-slate-200"
                  >
                     Começar
                  </Link>

                  <Link
                     to="/app?state=login"
                     className="hidden md:block px-6 py-2 border active:scale-95 hover:bg-gray-700 hover:text-slate-100 transition-all rounded-full text-slate-200 hover:text-gray-300"
                  >
                     login
                  </Link>
               </div>

               <button
                  onClick={() => setMenuOpen(true)}
                  className="md:hidden active:scale-90 transition text-slate-200"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="26"
                     height="26"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     className="lucide lucide-menu"
                  >
                     <path d="M4 5h16M4 12h16M4 19h16" />
                  </svg>
               </button>
            </nav>
            {/* Mobile Menu */}
            <div
               className={`fixed inset-0 z-[100] bg-black/40 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transform transition-transform duration-300 ${
                  menuOpen ? 'translate-x-0' : '-translate-x-full'
               }`}
            >
               <a href="#" className="text-white">
                  Inicio
               </a>

               <a href="#features" className="text-white">
                  Funcionalidades
               </a>

               <a href="#testimonials" className="text-white">
                  Depoimentos
               </a>

               <a href="#cta" className="text-white">
                  Contato
               </a>

               <button
                  onClick={() => setMenuOpen(false)}
                  className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-black hover:bg-red-700 transition text-white rounded-md flex"
               >
                  X
               </button>
            </div>
            {/* Hero Section */}
            <div className="relative flex flex-col items-center md:items-center justify-center mt-8 text-sm px-4 md:items-center md:px-16 lg:px-24 xl:px-40 text-black">
               <div className="absolute z-1 top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-120 2xl:size-132 bg-gray-200 blur-[80px] opacity-30"></div>

               <h1 className="z-2 text-4xl text-slate-100 text-center md:text-7xl font-semibold max-w-4xl md:text-center mt-8 md:leading-[70px]">
                  Crie um currículo profissional com{' '}
                  <span className="z-2 bg-slate-100 bg-clip-text text-transparent text-nowrap">
                     CurriculoGen{' '}
                  </span>
               </h1>

               <p className="z-2 text-center text-slate-300  max-w-md md:text-center text-base my-7">
                  Crie, edite e baixe currículos profissionais com CurrículoGen.
               </p>

               {/* CTA Buttons */}

               <div className="flex items-center gap-4 ">
                  <Link
                     to="/app"
                     className="
                       z-2
                       bg-gray-500 
                       hover:bg-gray-700
                       text-stone-900 
                       hover:text-white
                       rounded-full 
                       px-9 
                       h-12 m-1 ring-offset-3
                       ring-1 ring-red
                       flex items-center 
                       transition-all
                       transition-colors"
                  >
                     Começar
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right ml-1 size-4"
                        aria-hidden="true"
                     >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                     </svg>
                  </Link>

                  <button className="flex z-2 items-center gap-2 border border-white hover:bg-gray-700 transition rounded-full px-7 h-12 text-white">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-video size-5"
                        aria-hidden="true"
                     >
                        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                        <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                     </svg>

                     <span>Testar</span>
                  </button>
               </div>
            </div>
         </div>

         <style>
            {`

                    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


                    * {

                        font-family: 'Poppins', sans-serif;

                    }

                `}
         </style>
      </>
   )
}

export default Hero
