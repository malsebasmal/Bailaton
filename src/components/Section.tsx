import React from "react"

interface SectionProps {
  children: React.ReactNode,
  style: string
}

function Section({ children, style }: SectionProps) {
  return (
    <section className={ style }>
      { children }
    </section>
  )
}

export default Section