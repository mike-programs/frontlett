import Navbar from "./components/navbar/Navbar";
import LandingPage from "./components/landing-page/LandingPage";
import AboutUs from "./components/about-us/AboutUs";
import Blogs from "./components/blogs/Blogs";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div className='text-sm text-text lg:text-base'>
      <Navbar />
      <LandingPage />
      <AboutUs />
      <Blogs />
      <Footer />
    </div>
  )
}
