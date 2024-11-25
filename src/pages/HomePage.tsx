import Section from "@/components/Section"
import CarouselHero from "@/components/CarouselHero"
import { Link } from "react-router-dom"

function HomePage() {
  return (
    <Section style="flex justify-center items-center gap-16 w-full msm:flex-col-reverse lg:flex-row [height:calc(100dvh_-_5rem)]">
      <CarouselHero />
      <div className="flex flex-col items-center gap-6">
        <h1 className="flex flex-col items-center gap-3">
          <span className="text-7xl font-bold text-shadow-title text-org">Bailaton</span>
          <span className="text-3xl font-semibold text-shadow-subtitle text-ylw ">Parque Kennedy - Miraflores</span> 
        </h1>
        <Link className="w-9/12 shadow-md shadow-orange-300 text-white font-bold rounded-r-lg py-2 px-4 text-center bg-org" to="/whatis">¿Que es?</Link>
      </div>
    </Section>
  )
}

export default HomePage