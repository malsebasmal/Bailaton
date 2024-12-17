import { Carousel } from "flowbite-react"

function CarouselHero() {
  const LeftControl = () => (
    <button className="hidden"></button>
  )

  const RightControl = () => (
    <button className="hidden"></button>
  )

  const IMAGESBAILETON = [
    {
      src: "/baileton/baileton1.webp",
      alt: "image miraflores bailaton"
    },
    {
      src: "/baileton/baileton2.webp",
      alt: "image miraflores bailaton"
    },
    {
      src: "/baileton/baileton3.webp",
      alt: "image miraflores bailaton"
    },
    {
      src: "/baileton/baileton4.webp",
      alt: "image miraflores bailaton"
    },
    {
      src: "/baileton/baileton5.webp",
      alt: "image miraflores bailaton"
    }
  ]

  return (
      <div className="animate-fade mtb:w-[30rem] w-[80vw] h-[25rem] overflow-hidden rounded-full">
        <Carousel
          leftControl={<LeftControl />}
          rightControl={<RightControl />}
          indicators={false}
          slideInterval={2000}
          pauseOnHover
        >
          {IMAGESBAILETON.map((image, index) => (
            <img 
              key={index}
              className="w-full h-full"
              src={image.src}
              alt={image.alt}
            />
          ))}
        </Carousel>
      </div>
  )
}

export default CarouselHero
