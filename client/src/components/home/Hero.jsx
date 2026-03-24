import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { LogIn } from 'lucide-react'
import { StickyNote } from 'lucide-react'
import { ClipboardPen } from 'lucide-react'

const Hero = () => {
   const { user } = useSelector((state) => state.auth)
   const [menuOpen, setMenuOpen] = useState(false)

   return (
      <>
         <div className="min-h-screen">
            {/* Navbar */}
            <nav
               className="z-50 flex flex-col 
               gap-5 items-center justify-center 
               lg:flex-row lg:justify-between h-40 
               w-full py-4 px-6 lg:px-24 xl:px-40 
               text-sm bg-gradient-to-b from-gray-900 to-gray-600"
            >
               <a href="#">
                  <h1 className="text-slate-100 font-medium text-4xl">
                     CurriculoGen
                  </h1>
               </a>

               <div className="flex items-center justify-center gap-8 transition duration-500 text-base text-slate-800">
                  <a
                     href="#"
                     className="text-slate-200 hover:text-slate-400 transition"
                  >
                     Inicio
                  </a>

                  <a
                     href="#features"
                     className="text-slate-200 hover:text-slate-400 transition"
                  >
                     Funcionalidades
                  </a>

                  <a
                     href="#cta"
                     className="text-slate-200 hover:text-slate-400 transition"
                  >
                     Contato
                  </a>
               </div>

               <div className="flex gap-2">
                  <Link
                     to="/app?state=register"
                     className="hidden lg:block px-6 py-2 bg-gray-700 hover:bg-gray-900 border-black border border-slate-200 transition-all rounded-full text-slate-200"
                     hidden={user}
                  >
                     Começar
                  </Link>

                  <Link
                     to="/login"
                     className="hidden lg:block px-6 py-2 border-slate-200 active:scale-95 bg-gray-700 hover:bg-gray-800 hover:text-slate-100 border border-slate-200 transition-all rounded-full text-slate-200 hover:text-gray-300"
                     hidden={user}
                  >
                     login
                  </Link>

                  <Link
                     to="/app"
                     className="hidden lg:flex items-center justify-center gap-2 block px-6 py-2 border-slate-200 active:scale-95 bg-gray-500 hover:bg-gray-800 hover:text-slate-100 border border-slate-200 transition-all rounded-full text-slate-900 hover:text-gray-300"
                     hidden={!user}
                  >
                     Dashboard
                     <ClipboardPen className="size-4" />
                  </Link>
               </div>
            </nav>

            {/* Hero Section */}
            <div className="relative flex flex-col mt-10 items-center justify-center lg:mt-8 text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">
               <h1 className="z-2 text-4xl flex flex-col font-normal md:text-5xl text-slate-100 text-center lg:text-7xl font-bold max-w-4xl lg:mt-8 leading-[70px]">
                  Crie um currículo{' '}
                  <span className="z-2 bg-slate-100 bg-clip-text text-transparent">
                     profissional com{' '}
                  </span>
                  <span className="z-2 bg-slate-100 bg-clip-text text-transparent text-nowrap">
                     CurriculoGen{' '}
                  </span>
               </h1>

               <p className="text-sm flex flex-col z-2 lg:text-base text-center text-slate-300  max-w-md md:text-center my-7">
                  Crie, edite e baixe currículos
                  <span>profissionais com CurrículoGen.</span>
               </p>

               {/* CTA Buttons */}

               <div className="flex flex-col mb-50 lg:mb-1 md:flex-row items-center gap-4 mt-13">
                  <Link
                     to="/app/builder/:id"
                     className="
                       z-2
                       bg-gray-500 
                       hover:bg-gray-800
                       text-slate-900 
                       hover:text-slate-200
                       rounded-full 
                       px-9 gap-2
                       h-12 m-1 ring-offset-3
                       border border-slate-200 
                       flex items-center 
                       transition-all
                       transition-colors"
                  >
                     Criar meu currículo
                     <StickyNote className="size-4" />
                  </Link>

                  <Link
                     to="/login?state=register"
                     className="flex z-2 items-center gap-2 border border-slate-200 hover:bg-gray-800 transition rounded-full px-7 h-12 text-slate-200"
                     hidden={user}
                  >
                     <span>Realizar cadastro</span>
                     <LogIn className="size-4" />
                  </Link>
                  <Link
                     to="/app"
                     className="flex lg:hidden z-2 items-center gap-2 border border-slate-200 hover:bg-gray-800 transition rounded-full px-7 h-12 text-slate-200"
                     hidden={!user}
                  >
                     <span>Dashboard</span>
                     <ClipboardPen className="size-4" />
                  </Link>
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
