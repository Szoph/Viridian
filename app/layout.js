import { Inter, Montserrat, Roboto, Archivo_Narrow, Cormorant  } from "next/font/google";
import "./globals.css";
import Header from '../components/HeaderFooter/Header'
import Footer from '../components/HeaderFooter/Footer'


const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });
const roboto = Roboto({ subsets: ["latin"], weight: "400"});

export const metadata = {
  title: "Viridian Carpentry",
  description: "Viridian Carpentry: Crafting Your Perfect Space. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={roboto.className}>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  );
}
