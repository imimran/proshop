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
      </Head>

      <header>
        <Header></Header>
      </header>

      <main className="py-3">
        <Container>{children}</Container>
      </main>
      <footer style={{ position: "absolute", marginTop: "10vh", width: "100%" }}>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
