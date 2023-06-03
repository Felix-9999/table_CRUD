import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/globals.css';
import { SessionProvider, QueryClient as NextAuthQueryClient } from 'next-auth/react';
import { store } from '../redux/store';
import { Provider } from 'react-redux';


const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={pageProps.session}>
        
        <Provider store={store}>
        <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default MyApp;