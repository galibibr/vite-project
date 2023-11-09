// fonts
import {Sora} from "@next/font/google";

// font settings
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weigth: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

//components 
import Nav from '../components/Nav'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'

const Layout = ({children}) => {
  return <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
    <Nav />
    <Header />
    <TopLeftImg />
    {children}
  </div>;
};

export default Layout;
