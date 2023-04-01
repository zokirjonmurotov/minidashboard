import Login from "./pages/auth/login";
import { useNavigate } from "react-router-dom";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ACCESS_TOKEN } from "./service/api";
import { useEffect } from "react";
function App() {
  const client = new QueryClient();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [ACCESS_TOKEN]);

  return (
    <>
      {ACCESS_TOKEN ? (
        <QueryClientProvider client={client}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<h1>error</h1>} />
          </Routes>
          <ReactQueryDevtools />
        </QueryClientProvider>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
