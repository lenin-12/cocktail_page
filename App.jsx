import { ScrollTrigger, SplitText} from 'gsap/all'
import gsap from 'gsap';

import Navbar from './components/Navbar';


gsap.registerPlugin(ScrollTrigger, SplitText)
function App() {
 

  return (
    // <main className="pt-16">
    //   <Navbar/>
    // </main>
    <div className='flex-center h-[100vh]'>
      <h1 className='text-3xl black-300'>Hello , Lenin!</h1>
    </div>
   
  )
}

export default App
