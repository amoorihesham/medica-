import { Footer, Header, CategoriesNavbar } from '@/components';
import './globals.css';

export const metadata = {
  title: 'Medica+',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  const user = null;
  return (
    <html lang='en'>
      <body>
        <Header />
        {user && <CategoriesNavbar />}
        {children}
        <Footer />
      </body>
    </html>
  );
}