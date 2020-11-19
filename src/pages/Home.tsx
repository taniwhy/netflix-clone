import React from "react";
import Header from "../components/organisms/header";
import Feature from "../components/organisms/feature";
import OptFormContainer from "../components/organisms/opt-form";
import JumbotronContainer from "./../components/organisms/jumbotron";
import Footer from "../components/organisms/footer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main role="main">
        <Feature />
        <OptFormContainer />
        <JumbotronContainer />
      </main>
      <Footer />
    </>
  );
};

export default Home;
