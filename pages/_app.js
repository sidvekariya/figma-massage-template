import HomePage from "@/components/HomePage";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <div>
            <HomePage />
            <Component {...pageProps} />
        </div>
    );
}
