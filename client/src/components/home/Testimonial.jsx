import Title from "./Title.jsx"

const Testimonial = () => {
    const cardsData = [
        {
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
            name: "Briar Martin",
            handle: "@neilstellar",
        },
        {
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
            name: "Avery Johnson",
            handle: "@averywrites",
        },
        {
            image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
            name: "Jordan Lee",
            handle: "@jordantalks",
        },
        {
            image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
            name: "Avery Johnson",
            handle: "@averywrites",
        },
    ]

    const CreateCard = ({ card }) => (
        <div className="p-4 rounded-lg bg-gray-400 mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0">
            <div className="flex gap-2">
                <img
                    className="size-11 rounded-full"
                    src={card.image}
                    alt="User Image"
                />

                <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                        <p className="text-stone-900">{card.name}</p>
                    </div>

                    <span className="text-xs text-stone-600">
                        {card.handle}
                    </span>
                </div>
            </div>

            <p className="text-sm py-4 text-gray-800">
                Radiant made undercutting all of our competitors an absolute
                breeze.
            </p>
        </div>
    )

    return (
        <>
            <div
                id="testimonials"
                className="flex flex-col items-center mt-80 my-10 scroll-mt-12"
            >
                <Title
                    title="Não confie apenas em nossas palavras"
                    description="Veja o que nossos usuários dizem sobre nós. Estamos sempre buscando maneiras de melhorar. Se você teve uma experiência positiva, deixe seu depoimento."
                />
            </div>
            <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-gray-700 to-transparent"></div>

                <div className="marquee-inner flex bg-gray-500 transform-gpu min-w-[200%] pt-10 pb-5">
                    {[...cardsData, ...cardsData].map((card, index) => (
                        <CreateCard key={index} card={card} />
                    ))}
                </div>

                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-gray-700 to-transparent"></div>
            </div>

            <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-gray-700 to-transparent"></div>

                <div className="marquee-inner marquee-reverse bg-gray-500 flex transform-gpu min-w-[200%] pt-10 pb-5">
                    {[...cardsData, ...cardsData].map((card, index) => (
                        <CreateCard key={index} card={card} />
                    ))}
                </div>

                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-gray-700 to-transparent"></div>
            </div>
            <style>{`
            @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }
            .marquee-inner {
                animation: marqueeScroll 25s linear infinite;
            }
            .marquee-reverse {
                animation-direction: reverse;
            }

        `}</style>
        </>
    )
}

export default Testimonial
