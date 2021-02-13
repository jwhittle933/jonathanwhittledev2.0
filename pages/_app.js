import "../styles/globals.css";
import "bulma";
import JWHeader from "../components/layout/Header";

export default function JonathanWhittleDev2({ Component, pageProps }) {
  return (
    <>
      <JWHeader />
      <Component {...pageProps} />
    </>
  );
}
