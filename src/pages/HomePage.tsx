import Section from "@/components/Section"
import CarouselHero from "@/components/CarouselHero"
import { Link } from "react-router-dom"

function HomePage() {
  return (
    <Section style="flex flex-wrap justify-center items-center gap-16 w-full h-dvh">
      <CarouselHero />
      <div className="flex flex-col items-center gap-6">
        <h1 className="flex flex-col items-center gap-3">
          <span className="text-7xl text-[#373c84]">Baileton</span>
          <span className="text-3xl text-[#ebcc16]">Parque Kennedy - Miraflores</span> 
        </h1>
        <Link className="py-2 px-4 text-center bg-slate-600" to="/whatis">¿Que es?</Link>
      </div>
    </Section>
  )
}

export default HomePage