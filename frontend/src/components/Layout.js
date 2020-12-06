import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>PROSHOP </title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
          integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
          crossorigin="anonymous"
        />
      </Head>

      <header>
        <Header></Header>
      </header>

      <main className="py-3">
        <Container>{children}</Container>
      </main>
      <footer
        style={{ position: "absolute", marginTop: "10vh", width: "100%" }}
      >
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
