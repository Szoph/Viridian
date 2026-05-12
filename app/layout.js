import { Montserrat, Playfair_Display  } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/HeaderFooter/Header'
import Footer from '../components/HeaderFooter/Footer'


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-montserrat',
}); 

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
})


export const metadata = {
  title: "Viridian Carpentry",
  description: "Viridian Carpentry: Crafting Your Perfect Space. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <link rel="icon" href="/favicon.png" />
      <body className={`${montserrat.variable} ${playfair.variable}`}>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  );
}
