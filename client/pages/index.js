import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";
import Image from "next/image";
import lavavajillas from "../public/lavavajillas.jpg";
import ProductsList from "@/components/Navbar/ProductsList";
import ilustracion from "../public/LavaSolution illustration.png";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import Footer from "@/components/Navbar/Footer";
import ImageCarousel from "@/components/ImageCarousel";

export const getStaticProps = async () => {
  const response = await fetch(`http://localhost:3001/productos`, {
    cache: "no-cache",
  });
  const productos = await response.json();
  return {
    props: {
      productos: productos,
    },
  };
};

export default function Home({ productos }) {
  const images = [
    "https://i.imgur.com/zYjmwjH.png",
    "https://i.imgur.com/pRnteDl.png",
    "https://i.imgur.com/0b8iywi.png",
    "https://i.imgur.com/PVldWth.png",
  ];

  return (
    <>
      <Head>
        <title>LavaSolution</title>
        <meta
          name="description"
          content="¡Tu mejor opción para lavavajillas!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <main>
        <article id="nosotros" className="nosotros">
          <div className="caja-header  overflow-hidden m-auto mt-6">
            <Image
              className="object-cover m-auto"
              src={lavavajillas}
              width={369}
              alt="Imagen lavavajillas"
            />
          </div>
          <h2 className="my-2 font-bold text-2xl text-center">
            ¿Que es LavaSolution?
          </h2>
          <p className=" text-xs text-center bg-gray-200 p-4 rounded-2xl">
            LavaSolution es un negocio en la zona norte de Argentina que se
            especializa en la venta de lavavajillas de calidad y soluciones de
            limpieza. Ofrecemos una amplia selección de lavavajillas de marcas
            reconocidas, asesoramiento personalizado y productos de limpieza
            especializados. Simplificamos y mejoramos la experiencia en el
            lavado de vajillas tanto para hogares como establecimientos
            comerciales. Visítanos y descubre cómo LavaSolution puede ayudarte.
          </p>
        </article>

        <article id="productos" className="productos">
          <h2 className="my-2 font-bold text-2xl text-center">Productos</h2>
          <ProductsList productos={productos} />
        </article>

        <article id="repuestos" className="repuestos">
          <h2 className="my-2 font-bold text-2xl text-center">Repuestos</h2>
          <p className=" text-xs text-center bg-gray-200 p-4 rounded-2xl">
            En LavaSolution, compramos lavavajillas completos para repuestos. Si
            tienes un lavavajillas antiguo o dañado, contáctanos al{" "}
            <strong>+54 9 11 4531-0463</strong> . ¡Ofrecemos una solución rápida
            y conveniente para deshacerte de tu electrodoméstico!
          </p>
          <ImageCarousel images={images} />
        </article>

        <article id="reparacion" className="reparacion">
          <h2 className="my-2 font-bold text-2xl text-center">Reparación</h2>
          <p className=" text-xs text-center bg-gray-200 p-4 rounded-2xl">
            En LavaSolution, ofrecemos servicios de reparación de lavavajillas.
            Nuestro equipo de técnicos especializados está listo para solucionar
            cualquier problema que tengas con tu lavavajillas. Utilizamos
            repuestos originales y garantizamos un servicio rápido y confiable.
            Contáctanos al <strong>+54 9 11 4531-0463</strong> para programar
            una visita técnica. Confía en nosotros para reparar tu lavavajillas
            de manera efectiva y asequible.
          </p>
          <Image
            className="m-auto"
            src={ilustracion}
            width={300}
            alt="Ilustracion reparaciones"
          />
        </article>

        <article id="contactos" className="contactos">
          <h2 className="my-2 font-bold text-2xl text-center">Contactos</h2>
          <div>
            <div className="flex items-center py-2">
              <LocationOnRoundedIcon className="text-2xl" />
              <p>
                Puedes encontrarnos en el Barrio Talar del Lago 1 en Gral.
                Pacheco.
              </p>
            </div>
            <div className="flex items-center py-2">
              <CallRoundedIcon className="text-2xl" />
              <p>
                Celular: Para consultas, puedes llamarnos al número +54 9 11
                4531-0463.
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1645.1323803863752!2d-58.648486499515904!3d-34.44542647294223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1687896761656!5m2!1ses!2sar"
              width="300"
              height="300"
              className="border-0 py-2 m-auto rounded-lg mb-4"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
