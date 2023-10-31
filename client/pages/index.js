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
          <h2 className="my-2 font-bold text-2xl text-center lg:text-6xl">
            ¿Que es LavaSolution?
          </h2>
          <p className=" text-xs bg-gray-200 p-4 rounded-2xl lg:text-xl">
            LavaSolution es un emprendimiento ubicado en la zona Norte de Buenos
            Aires, Partido de Tigre, que se especializa en la venta de
            lavavajillas usados Premium. <br></br>Todos los lavavajillas que
            ofrecemos, poseen un mes de garantía y se entregan probados a
            conformidad del comprador.
          </p>
        </article>

        <article id="productos" className="productos">
          <h2 className="my-2 font-bold text-2xl text-center lg:text-6xl lg:my-6">
            Productos
          </h2>
          <ProductsList productos={productos} />
        </article>

        <article id="repuestos" className="repuestos">
          <h2 className="my-2 font-bold text-2xl text-center lg:text-6xl">
            Venta de repuestos
          </h2>
          <p className=" text-xs bg-gray-200 p-4 rounded-2xl lg:text-xl">
            En LavaSolution disponemos de una gran grantidad de repuestos de
            lavavajillas (usados chequeados), de distintos modelos y marcas. ¡No deje de
            consultar nuestro catálogo!
          </p>
          <ImageCarousel images={images} />
        </article>

        <article id="reparacion" className="reparacion">
          <h2 className="my-2 font-bold text-2xl text-center lg:text-6xl">
            Plan canje
          </h2>
          <p className=" text-xs bg-gray-200 p-4 rounded-2xl lg:text-xl">
            En LavaSolution, ofrecemos <strong>Plan Canje</strong>. <br></br> Se
            recibirán en modalidad Plan Canje, lavavajillas usados que se
            encuentren en buen estado estético y que puedan ser reparados.
          </p>
          <Image
            className="m-auto"
            src={ilustracion}
            width={300}
            alt="Ilustracion reparaciones"
          />
        </article>

        <article id="envios" className="reparacion">
          <h2 className="my-2 font-bold text-2xl text-center lg:text-6xl">
            Envíos
          </h2>
          <p className=" text-xs bg-gray-200 p-4 rounded-2xl lg:text-xl">
            Los lavavajillas y los repuestos ofrecidos en venta, podrán ser retirados de forma personal.<br></br>La
            compra de lavavajillas que requieran envío, tendrán un costo
            adicional de $12.000 pesos, en concepto de materiales embalaje y
            traslado a la transportista (ej: VIA CARGO). <br></br>Las compras de
            repuestos que requieran envío, serán despachadas por VIA CARGO u OCA.
            En todos los casos, con pago del envío en destino, al recibir el
            producto.
          </p>
          <Image
            className="m-auto"
            src={ilustracion}
            width={300}
            alt="Ilustracion reparaciones"
          />
        </article>
       
      </main>
      <Footer />
    </>
  );
}
