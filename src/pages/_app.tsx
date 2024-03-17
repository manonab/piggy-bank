import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app'
import Layout from '../components/layout';
import { UserContextProvider } from '../context/user-context';
import "../styles/tailwind.css";

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContextProvider>
    </QueryClientProvider>
  );
};
export default App;