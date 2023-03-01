import React from "react";
import DirectionalButtons from "../components/DirectionalButtons";
import { Helmet } from "react-helmet";

export const PageA = () => {
  return (
    <>
      <Helmet>
        <title>Page A | {import.meta.env.VITE_APPLICATION_TITLE}</title>
      </Helmet>
      <header>
        <h1>Page A</h1>
      </header>
      <nav>
        <DirectionalButtons />
      </nav>
      <main>
        <p>
          Adipisicing dolore anim consequat tempor consequat proident dolore
          cupidatat proident Lorem sunt et labore consectetur. Qui in ut amet
          laborum do mollit nisi ea in mollit aute aliquip laborum do. Labore
          nostrud voluptate nulla proident officia. Ad incididunt do veniam
          cillum tempor laboris aute qui irure veniam sint in sit irure. Dolore
          aliqua occaecat laboris nulla adipisicing eu Lorem Lorem reprehenderit
          nulla esse sit velit. Incididunt amet labore anim anim sit ullamco id
          eu aliquip. Sit id irure ut est aliqua ad pariatur ullamco esse
          laborum id id excepteur.
        </p>
      </main>
    </>
  );
};
