import Layout, { siteTitle } from "../../components/layout";
import Head from "next/head";

const storyline = () => {
  return (
    <Layout home>
      <>
        <Head>
          <title>{siteTitle}-Storyline</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="transitionEffect">
          <section className="main-section d-flex justify-content-center flex-column align-items-center">
            <div className="container d-flex justify-content-center flex-column align-items-center">
              <h1>STORYLINE</h1>
              <p>IN TEMPORAL</p>
            </div>
          </section>
          <section className="upperScroll">
            <section className="third-section d-flex justify-content-center flex-column align-items-center">
              <div className="container d-flex justify-content-center flex-column align-items-center">
                <h3>STORYLINE</h3>
                <p>
                  Un par de adolescentes enamorados escapan de una tormenta y se
                  refugian en una mansión abandonada. Ambos deciden subir a una
                  habitación para secarse de la lluvia y darse calor mutuamente.
                  En el cuarto, ven que la casa se distorsiona y uno de los
                  chicos queda atrapado en un cuarto mientras que en la casa,
                  habitan representaciones de sus complejos a través de sus
                  vidas. Finalmente, la chica libera al chico y ambos salen de
                  la casa.
                </p>
              </div>
            </section>
          </section>
        </div>
      </>
    </Layout>
  );
};

export default storyline;
