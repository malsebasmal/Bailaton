import Section from "@/components/Section"
import CarouselHero from "@/components/CarouselHero"

function HomePage() {
  return (
    <Section style="flex flex-wrap justify-center items-center gap-16 w-full h-dvh">
      <CarouselHero />
      <h1>
        Parque kennedy 
        <br />Miraflores Bailable
      </h1>
    </Section>
  )
}

export default HomePage