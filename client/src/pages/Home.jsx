import Hero from "../components/home/Hero.jsx"
import Features from "../components/home/Features.jsx"
import CallToAction from "../components/home/CallToAction.jsx"
import Footer from "../components/home/Footer.jsx"

const Home = () => {
    return (
        <div className="bg-gray-600 overflow-x-hidden">
            <Hero />
            <Features />
            <CallToAction />
            <Footer />
        </div>
    )
}

export default Home
