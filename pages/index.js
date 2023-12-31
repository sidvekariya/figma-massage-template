import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MassageCardList from "@/components/ItemComponent";
import Product from "@/components/Product";
import Head from "next/head";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Figma Massage Template</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <Hero />
                <MassageCardList />
                <Product />
                <Footer />
            </div>
        </div>
    );
}
