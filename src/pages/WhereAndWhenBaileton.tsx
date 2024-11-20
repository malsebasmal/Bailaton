import Map from "@/components/Map";
import Section from "@/components/Section";

function WhereAndWhenBaileton() {
  return (
    <Section style="flex flex-wrap justify-center items-center gap-16 w-full h-dvh">
      <div className="flex justify-center items-center gap-3">
        <h2>
          ¿Dónde y cuando asistir al Baileton?
        </h2>
        <Map />
      </div>
    </Section>
  )
}

export default WhereAndWhenBaileton