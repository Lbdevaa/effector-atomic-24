import "./App.css";
import { RouterProvider } from "atomic-router-react";
import { router } from "@shared/config/router";
import { Pages } from "@pages/index";

function App() {
  return (
    <RouterProvider router={router}>
      <Pages />
    </RouterProvider>
  );
}

export default App;
