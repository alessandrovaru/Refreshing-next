import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home(props) {
  return (
    <Layout home>
      <>
        <Head>
          <title>{siteTitle}-Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="transitionEffect">
          <section className="main-section d-flex justify-content-center flex-column align-items-center">
            <div className="container d-flex justify-content-center flex-column align-items-center">
              <h1>IN TEMPORAL</h1>
              <p>Escrito por Alessandro Varuzza</p>
            </div>
          </section>
          <section className="upperScroll">
            <section className="second-section d-flex justify-content-center flex-column align-items-center">
              <div className="container d-flex justify-content-center flex-column align-items-center">
                <p>
                  Trabajo Final de Concetranción de la materia Producción
                  Cinematográfica en la Universidad Católica Andrés Bello.
                </p>
              </div>
            </section>
            <section className="third-section d-flex justify-content-center flex-column align-items-center">
              <div className="container d-flex justify-content-center flex-column align-items-center">
                <h3>¿QUIÉNES SOMOS?</h3>
                <p>
                  Lucky Dice es una casa productora creada para el Trabajo Final
                  de Concetranción de la materia Producción Cinematográfica en
                  la Universidad Católica Andrés Bello. El equipo es formado
                  por: Dayana Arocha, Yolanda Bastos, Cristina Betancourt, Omar
                  Fernández, Luis Gentile, Fabiana Hernández, Freddy Perdomo y
                  Alessandro Varuzza.
                </p>
              </div>
            </section>
          </section>
        </div>
      </>
    </Layout>
  );
}
