import { NavBar } from '@/components/navBar';

import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-screen w-screen">
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}
