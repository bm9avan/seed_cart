import "./App.css";
import Header from "./components/headerFooter/Header";
import Seeds from "./components/seeds-body/Seeds";
import UserTable from "./components/table/UserTable";
import Checkout from "./pages/Checkout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  let guider = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        { index: true, element: <Seeds /> },
        { path: "/checkout", element: <Checkout /> },
        {
          path: "/users",
          element: (
            <>
              <br />
              <UserTable />
            </>
          ),
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={guider} />
    </div>
  );
}

export default App;
