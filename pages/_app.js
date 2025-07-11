import NavBar from '@/components/NavBar';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
