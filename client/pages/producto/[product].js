import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";
import Footer from "@/components/Navbar/Footer";
import { useRouter } from "next/router";
import Image from "next/image";
import Product from "@/components/Product";

export async function getStaticPaths() {
  const response = await fetch(`${process.env.host}/productos`);
  const products = await response.json();

  const paths = products.map((product) => ({
    params: { product: product.name },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = params.product;
  console.log(product);

  const response = await fetch(`${process.env.host}/productos`);
  const productData = await response.json();

  return {
    props: {
      product: productData,
      selectedProduct: product,
    },
  };
}

export default function Details({ product, selectedProduct }) {
  const item = product.filter((product) => product.name === selectedProduct);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{router.query.product} | LavaSolution</title>
        <meta
          name="description"
          content="¡Tu mejor opción para lavavajillas!"
        />
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <main>
        <Product product={item[0]} />
      </main>
      <Footer />
    </>
  );
}
