import { RouterProvider } from "react-router-dom";
import AppRouter from "./router";
import { AppContextWrapper } from "./context";

function App() {
  return (
    <AppContextWrapper>
      <RouterProvider router={AppRouter} />
    </AppContextWrapper>
  );
}

export default App;
