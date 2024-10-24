import { Lato } from 'next/font/google';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Footer, Header, CategoriesNavbar } from '@/components';
import StateProvider from '@/components/Provider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '@/utils/api';
import themeConfig from '@/utils/themeConfig';
import '@fontsource/lato';
import './globals.css';

export const metadata = {
  title: 'Medica - Health & Wellness',
  description:
    'Medica is a premium online health and wellness platform, offering a wide range of products and services.',
};
const getCategories = async () => {
  try {
    const { data } = await api.get('/category');
    return data?.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export default async function RootLayout({ children }) {
  const categories = await getCategories();

  return (
    <html lang='en'>
      <body>
        <ToastContainer
          position='top-right'
          autoClose={2000}
          hideProgressBar={false}
          pauseOnHover
          theme='light'
        />

        <CssBaseline />
        <StateProvider>
          <ThemeProvider theme={themeConfig}>
            <Header />
            <CategoriesNavbar categories={categories} />

            {children}
          </ThemeProvider>
        </StateProvider>
        <Footer />
      </body>
    </html>
  );
}
