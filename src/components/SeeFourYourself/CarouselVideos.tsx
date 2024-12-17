import { Carousel } from "flowbite-react"

function CarouselVideos() {
  const VIDEOSBAILETON = [
    {
      src: "/baileton/videos/bailaton1.mp4",
      type: "video/mp4"
    },
    {
      src: "/baileton/videos/bailaton2.mp4",
      type: "video/mp4"
    }
  ]

  return(
    <div className="animate-fade w-full h-80 overflow-hidden ">
      <Carousel
        indicators={false}
        slide={false}
      >
        {VIDEOSBAILETON.map((video, index) => (
          <video controls autoPlay loop muted>
            <source key={index} src={video.src} type={video.type} />
          </video>
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselVideos