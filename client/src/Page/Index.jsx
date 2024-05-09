import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import Start from "../Components/Start"

function Index() {
  return (
    <div className="dark:bg-slate-900">
        <Navbar />
        <Hero />
        <Start />
        <Footer />
    </div>
  )
}

export default Index