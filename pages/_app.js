import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/globals.css';
import { SessionProvider, QueryClient as NextAuthQueryClient } from 'next-auth/react';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default MyApp;