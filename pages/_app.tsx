import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { ThemeProvider } from '@mui/material/styles';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { avalancheFuji } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import theme from '../src/theme';

const { chains, provider, webSocketProvider } = configureChains(
  [
    avalancheFuji
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'GDA Demo',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <ThemeProvider theme={theme}>
        <RainbowKitProvider chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </ThemeProvider>
    </WagmiConfig>
  );
}

export default MyApp;
