import { Card } from "flowbite-react";
import { Link } from "react-router-dom"

function CardWhatIs() {
  return (
    <Card className="max-w-lg border-2 border-solid border-org shadow-lg">
      <h2 className="text-lg font-black text-center">
        ¿Que es el Bailaton?
      </h2>
      <p className="text-gray-700 dark:text-gray-400 text-pretty text-lg">
        <span className="font-black">El Bailaton</span> es una experiencia única que combina <span className="font-black">música, baile y diversión al aire libre</span>.
        <br />
        <span className="font-black">Gratis y abierto a tod@s</span>, este evento reúne a personas de todas las edades para disfrutar de <span className="font-black">ritmos como salsa, merengue, cumbia, música afroperuana, rock and roll, vallenatos y más</span>.
        <br />
        <span className="font-black">El ambiente es seguro, inclusivo y familiar, libre de alcohol y cigarrillos, gracias a la dedicación de su organizadora</span>.
        Aquí, tanto locales como turistas encuentran un espacio perfecto para bailar o simplemente disfrutar del espectáculo.
        <br />
        <br />
        Si buscas buena música, comunidad y diversión, el Bailetón es el lugar ideal.
        <br />
        <span className="font-black">¡Anímate a vivirlo y siente el ritmo de Miraflores!</span>
      </p>
      <Link to="/whereandwhen" className="shadow-md shadow-orange-300 text-white font-bold rounded-r-lg py-2 px-4 text-center bg-org">
        ¿Donde y cuando?
      </Link>
    </Card>
  )
}

export default CardWhatIs