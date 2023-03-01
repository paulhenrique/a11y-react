import React from "react";
import DirectionalButtons from "../components/DirectionalButtons";
import { Helmet } from "react-helmet";

export const PageB = () => {
  return (
    <>
      <Helmet>
        <title>Page B | {import.meta.env.VITE_APPLICATION_TITLE}</title>
      </Helmet>

      <DirectionalButtons />

      <header>
        <div>Page B</div>
      </header>
      <main>
        <p>
          Sit in sint labore pariatur dolore irure voluptate incididunt dolor ea
          est proident. Dolor ex eu ut culpa reprehenderit nisi labore est
          mollit exercitation dolor. Culpa consectetur occaecat et labore
          eiusmod officia sint velit. Duis nisi in amet ullamco et. In et
          laboris minim quis sint. Sunt non cillum aliquip laboris qui id id
          veniam ut aliqua labore ex qui. Quis eu fugiat incididunt ut.
        </p>
      </main>
    </>
  );
};
