import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";
import Footer from "@/components/Navbar/Footer";
import { useRouter } from "next/router";
import Image from "next/image";
import Product from "@/components/Product";

export async function getStaticPaths() {
  const response = await fetch("http://localhost:3001/productos");
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

  const response = await fetch(`http://localhost:3001/productos`);
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
