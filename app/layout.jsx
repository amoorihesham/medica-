import { Lato } from 'next/font/google';
import { CssBaseline } from '@mui/material';
import { Footer, Header, CategoriesNavbar } from '@/components';
import StateProvider from '@/components/Provider';
import { getCategory } from '@/utils/categoryFunc';
import { getSubCategory } from '@/utils/sub-categoryFunc';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700'],
});
export const metadata = {
  title: 'Medica+',
  description: 'A place where you can find all your desired medications',
};

export default async function RootLayout({ children }) {
  const categories = await getCategory();

  return (
    <html
      lang='en'
      className={lato.className}>
      <body>
        <CssBaseline />
        <ToastContainer
          position='top-right'
          autoClose={2000}
          hideProgressBar={false}
          pauseOnHover
          theme='light'
        />
        <StateProvider>
          <Header />
          <CategoriesNavbar categories={categories} />
        </StateProvider>

        {children}
        <Footer />
      </body>
    </html>
  );
}
