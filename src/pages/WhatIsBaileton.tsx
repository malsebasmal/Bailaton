import Section from "@/components/Section"
import CardWhatIs from "@/components/WhatIsBaileton/CardWhatIs" 

function WhatIsBaileton() {
  return (
    <Section style="animate-fade-down flex flex-wrap justify-center items-center gap-16 w-full mtb:[height:calc(100dvh_-_5rem)] h-vh mtb:p-0 p-4">
      <CardWhatIs />
    </Section>
  )
}

export default WhatIsBaileton