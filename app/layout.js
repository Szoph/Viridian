import { Montserrat  } from "next/font/google";
import "./globals.css";
import Header from '../components/HeaderFooter/Header'
import Footer from '../components/HeaderFooter/Footer'



const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });


export const metadata = {
  title: "Viridian Carpentry",
  description: "Viridian Carpentry: Crafting Your Perfect Space. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       
      <body className={montserrat.className}>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  );
}
