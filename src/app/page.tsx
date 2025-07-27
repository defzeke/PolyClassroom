import TopBar from "../component/sections/Topbar1"
import Hero from "../component/sections/Hero"
import Footer from "../component/sections/Footer"
import Forms from "../component/tabs/FormTabs"
import Features from "../component/sections/Features"
import About from "../component/sections/About"
import Contacts from "../component/sections/Contacts"


export default function Home() {
  return (
    <>
      <div className="flex items-center min-h-screen ml-50 -mt-5">
        <Hero />    
      </div>

      <div className="flex items-center -mt-235 ml-50">
        <TopBar />
      </div>    

      <div className="flex items-center mt-20 ml-245">
        <Forms />
      </div>

      <div className="flex mt-70">
        <Features />
      </div>

      <div className="flex flex-col items-center mt-60">
        <About />
      </div>

      <div className="flex mt-60">
        <Contacts />
      </div>

      <Footer />

        
    </>
  );
}