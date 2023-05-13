import {Navbar,Hero,Features,Works,Feedback,Subscribe,Footer} from './component'
import './index.css'
import styles from './Styles'

function App() {
  

  return (
    <div className=' bg-main w-full overflow-hidden '>
      <div className={`bg-intro ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}> 
        <Navbar/>
        <Hero/>
        </div>
      </div>
     
      <div className={`  ${styles.boxWidth}`}> 
           
           <Features/>
           <Works/>
           <Feedback/>
           <Subscribe/>
      </div>

      <div>
        <Footer/>
      </div>

    </div>
  )
}

export default App
