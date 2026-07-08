
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Secondary from './components/secondary'
import GreenCard from './components/greencard'
import Testimonials from './components/Testimonials'


function App() {
  return (
    <>
     <div className='font-space'>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <GreenCard/>
      <Section4 />
      <Section5 />
      <Testimonials />
      <Secondary />
      <Footer />
     </div>
    </>
  )
}

export default App