import { useState } from "react"

function Map() {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div className="relative w-[500px] h-[500px]">
      {!isLoaded && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <img
            src="./dance.svg"
            alt="Loading map"
            className="w-40 object-cover"
          />
        </div>
      )}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.8601028006688!2d-77.03213027909979!3d-12.12172299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c819b88a9d33%3A0x991b84da5cbd0585!2s7th%20of%20June%20Park!5e0!3m2!1sen!2spe!4v1732135333026!5m2!1sen!2spe"
        width="800"
        height="600"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={handleLoad}
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    </div>
  )
}

export default Map
