import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'

import { PacmanLoader } from 'react-spinners';
import './Loader.css'


const Home = () => {

  const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 2000)
    },[]) 

  return (

    
    <div>
      {
        loading?(
          <div className="container d-flex justify-content-center align-items-center vh-100">
          <PacmanLoader
            color={'#dfdf1d'}
            loading={loading}
            size={100}
            className=''
          />
        </div>)
      :(<>
        <Navbar/>
        <HeroImage/>
        <Footer/>
        </>
      )
        
   
      }
      </div>
  )
}

export default Home