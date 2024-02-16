import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";
import Image from "next/image";
import lavavajillas from "../public/lavavajillas.jpg";
import ProductsList from "@/components/Navbar/ProductsList";
import ilustracion from "../public/LavaSolution illustration.png";
import ilustracion2 from "../public/delivery.png";
import Footer from "@/components/Navbar/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import { useQuery } from "react-query";

const fetchData = async () => {
  const response = await fetch(`${process.env.host}/productos`, {
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
};

export default function Home() {
  const { data: productos } = useQuery("productos", fetchData, {
    staleTime: 10000,
  });

  const images = [
    {
      image: "https://i.imgur.com/itB68Ty.jpeg",
      name: "Whirpool WLD20 (blanco)",
    },
    { image: "https://i.imgur.com/9j0QIA5.jpeg", name: "Philco DW-PH30" },
    {
      image: "https://i.imgur.com/fVhx3oc.jpeg",
      name: "Whirpool WLR12 (blanco)",
    },
    { image: "https://i.imgur.com/4sq6lue.jpeg", name: "Electrolux ESF 610" },
    { image: "https://i.imgur.com/PuAggSg.jpeg", name: "Ariston LFF8M019" },
    {
      image: "https://i.imgur.com/C0w08Rr.jpeg",
      name: "Whirpool WLR12 (acero inoxidable)",
    },
    {
      image: "https://i.imgur.com/EOzWUQX.jpeg",
      name: "Whirpool WLD20 (gris)",
    },
    { image: "https://i.imgur.com/Roj1x11.jpeg", name: "Ariston L73 Dúo" },
    { image: "https://i.imgur.com/xBpLtDv.jpeg", name: "Ariston LFF 8214" },
    { image: "https://i.imgur.com/bHYvR7d.jpeg", name: "Ariston LD 87" },
    {
      image: "https://i.imgur.com/O9AZR2p.jpeg",
      name: "Ariston LFO 3T121 Inverter",
    },
    { image: "https://i.imgur.com/rReIm1s.jpeg", name: "Ariston L61" },
    {
      image: "https://i.imgur.com/EH1ML1c.png",
      name: "Ariston Alexia LFT 2284 Panelable",
    },
  ];

  return (
    <>
      <Head>
        <title>LavaDelta</title>
        <meta
          name="description"
          content="¡Tu mejor opción para lavavajillas!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="lavavajillas, lavavajilla, lavadelta, lava, delta, lava delta, lavarropas, vajillas, tigre, zona norte, ariston, whirlpool, general, electric, wld20, ll64"
        />
        <meta property="og:title" content="LavaDelta" />
        <meta property="og:url" content="https://lavadelta.vercel.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="LavaDelta se especializa en la venta de lavavajillas usados Premium.
          Todos los lavavajillas que ofrecemos, poseen un mes de garantía y se entregan probados a conformidad del comprador."
        />
        <meta property="og:image" content="https://i.imgur.com/pcg1iZq.png" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <main>
        <article
          id="nosotros"
          className="flex pt-10 items-center justify-center flex-row max-md:flex-col"
        >
          <div className="w-[50%] max-md:w-[100%]">
            <h2>¿Que es LavaDelta?</h2>
            <p className="bg-aqblue text-white p-4 rounded-lg">
              LavaDelta es un emprendimiento ubicado en la zona Norte de Buenos
              Aires, Partido de Tigre, que se especializa en la venta de
              lavavajillas usados Premium. <br></br>Todos los lavavajillas que
              ofrecemos, poseen un mes de garantía y se entregan probados a
              conformidad del comprador.
            </p>
          </div>
          <div>
            <Image
              className="object-cover m-auto"
              src={lavavajillas}
              width={369}
              alt="Imagen lavavajillas"
            />
          </div>
        </article>

        <article id="productos">
          <h2>Productos</h2>
          <ProductsList productos={productos} />
        </article>

        <article id="repuestos">
          <div>
            <h2>Venta de repuestos</h2>
            <p className="bg-aqblue text-white p-4 rounded-lg w-[50%] m-auto max-md:w-[100%]">
              En LavaDelta disponemos de una gran cantidad de repuestos de
              lavavajillas usados, de los modelos y marcas que figuran en la
              pestaña repuestos. Consulte por su repuesto identificando el
              modelo de lavavajilla.
            </p>
          </div>
          <ImageCarousel images={images} />
        </article>

        <article
          id="reparacion"
          className="flex pt-10 items-center justify-center flex-row canje"
        >
          <div className="w-[50%] max-md:w-[100%]">
            <h2>Plan canje</h2>
            <p className="bg-aqblue text-white p-4 rounded-lg">
              En LavaDelta, ofrecemos <strong>Plan Canje</strong>. <br></br>{" "}
              Aproveche la oportunidad de entregar su lavavajilla usado sin
              funcionar y llevese uno funcionando en óptimas condiciones.{" "}
              <br></br>
              <strong>ATENCIÓN</strong>: Se recibirán en modalidad Plan Canje,
              exclusivamente lavavajillas usados que se encuentren en buen
              estado estético y que puedan ser reparados.
            </p>
          </div>
          <Image
            className=" lg:ml-4"
            src={ilustracion}
            width={300}
            alt="Ilustracion reparaciones"
          />
        </article>

        <article
          id="envios"
          className="flex pt-10 items-center justify-center flex-row envios"
        >
          <div className="w-[50%] max-md:w-[100%]">
            <h2>Envíos</h2>
            <p className="bg-aqblue text-white p-4 rounded-lg">
              Los lavavajillas y los repuestos ofrecidos en venta, podrán ser
              retirados de forma personal.<br></br>La compra de lavavajillas que
              requiera envío, tendrán un costo adicional de $12.000, en concepto
              de materiales de embalaje y traslado del lavavajilla a la
              transportista (Ej: VIA CARGO). <br></br>Las compras de repuestos
              que requieran envío, serán despachadas por VIA CARGO u OCA. En
              todos los casos, con pago del envío en destino, al retirar el
              producto.
            </p>
          </div>

          <Image
            className=" lg:ml-4"
            src={ilustracion2}
            width={300}
            alt="Ilustracion reparaciones"
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
