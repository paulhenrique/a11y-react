import React from "react";
import { Helmet } from "react-helmet";
import DirectionalButtons from "../components/DirectionalButtons";

// Array de frutas
const frutas = ["Maçã", "Banana", "Abacaxi", "Laranja", "Melancia"];

// Array de personagens da Turma da Mônica
const personagens = ["Mônica", "Cascão", "Magali", "Cebolinha", "Chico Bento"];

const PageC = () => {
  return (
    <>
      <Helmet>
        <title>
          Página com lista | {import.meta.env.VITE_APPLICATION_TITLE}
        </title>
      </Helmet>

      <header>
        <h1>Comparação de listas</h1>
        <body></body>
      </header>
      <DirectionalButtons />
      <main>
        <p>
          Voluptate ut officia nulla deserunt ullamco consectetur proident minim
          ex cillum sunt. Laborum ut do culpa do. Lorem in dolore labore
          reprehenderit ex. Elit veniam sit non nisi dolore aliquip. Duis enim
          tempor veniam laboris. Nisi consectetur et commodo adipisicing cillum
          irure fugiat enim ea excepteur tempor.
        </p>
        {/* // Maneira correta de implementar */}
        <h2>Área com as listas</h2>
        <section className="contemListas">
          <div>
            <h3>Lista de frutas</h3>
            <ul>
              {frutas.map((fruta, index) => (
                <li key={fruta}>{fruta}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Lista de personagens da Turma da Mônica</h3>
            <ul>
              {personagens.map((personagem, index) => (
                <li key={personagem}>{personagem}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Maneira errada */}
        <section className="contemListasGrid">
          <h3>Lista de frutas</h3>
          <h3>Lista de personagens da Turma da Mônica</h3>
          <div>
            <ul>
              {frutas.map((fruta, index) => (
                <li key={fruta}>{fruta}</li>
              ))}
            </ul>
          </div>

          <div>
            <ul>
              {personagens.map((personagem, index) => (
                <li key={personagem}>{personagem}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default PageC;
