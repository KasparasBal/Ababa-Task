import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import MainRouter from "./router/MainRouter";
import Layout from "./components/Layout/Layout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout Navigation={Navigation}>
          <MainRouter />
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
