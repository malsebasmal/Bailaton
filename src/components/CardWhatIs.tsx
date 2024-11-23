import { Card } from "flowbite-react";
import { Link } from "react-router-dom"

function CardWhatIs() {
  return (
    <Card className="max-w-sm">
      <h2>
        ¿Que es el Baileton?
      </h2>
      <p className="text-gray-700 dark:text-gray-400">
        El Bailetón es una experiencia única que combina música, baile y diversión al aire libre.
        <br />
        Gratis y abierto a todos, este evento reúne a personas de todas las edades para disfrutar de ritmos como salsa, merengue, cumbia, música afroperuana, rock and roll y vallenatos.
        <br />
        El ambiente es seguro, inclusivo y familiar, libre de alcohol y cigarrillos, gracias a la dedicación de su organizadora.
        Aquí, tanto locales como turistas encuentran un espacio perfecto para bailar o simplemente disfrutar del espectáculo.
        <br />
        Si buscas buena música, comunidad y diversión, el Bailetón es el lugar ideal. ¡Anímate a vivirlo y siente el ritmo de Miraflores!
      </p>
      <Link to="/whereandwhen" className="shadow-md shadow-orange-300 text-white font-bold rounded-r-lg py-2 px-4 text-center bg-org">
        ¿Donde y cuando?
      </Link>
    </Card>
  )
}

export default CardWhatIs