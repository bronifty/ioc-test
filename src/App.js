import React from "react";
import { presenter } from "./Shared/Presenter";
import { container } from "./Shared/Container";

container.mode = "fake";

function App() {
  const viewModel = presenter.load();
  return (
    <>
      <h1>Hello World</h1>
      <div>{viewModel.message}</div>
    </>
  );
}

export default App;
