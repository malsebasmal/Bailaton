import Section from "@/components/Section"
import CardSeeForYour from "@/components/CardSeeForYour"

function SeeForYourself() {
  return (
    <Section style="flex flex-wrap justify-center items-center gap-16 w-full mtb:[height:calc(100dvh_-_5rem)] h-dvh mtb:p-0 p-4">
      <CardSeeForYour />
    </Section>
  )
}

export default SeeForYourself