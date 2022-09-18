import React,{ useState} from 'react'
import './First.css'
import { DarkTheme } from '../DarkThem/DarkTheme'
// import { useEffect } from 'react'

export const First = () => {

const [toggle,setToggle] = useState(false);

if(toggle){
  document.body.classList.add('dark-theme')
}else{
  document.body.classList.remove('dark-theme');
}


  return (
  <header className = "profile container">
    <DarkTheme onClick={() => setToggle(!toggle)} toggle={toggle}/>
         <div className='row portfile-container'>
           {/* <div className='porfile-border'> */}
            <div className='portfile-picture'>
                <img src='./aditya.jpg' alt='Aditya' className='profilo-pic'/>
            {/* </div> */}
           </div>
           <div className='porfile-data'>
            <h2 className='porfile-name'>Aditya Laxman Dhakate</h2>
            <h3 className='profile-profession'>FRONTEND DEVELPOER</h3>

            <ul className='profile-social'>
                <a href=''
                 rel='Aditya Dhakate' 
                 className='profile-social-link'>
                <i className="ri-instagram-line"></i>
                </a>

                <a href=''
                 rel='Aditya Dhakate' 
                 className='profile-social-link'>
                <i className="ri-linkedin-box-line"></i>
                </a>

                <a href=''
                 rel='Aditya Dhakate' 
                 className='profile-social-link'>
                <i className="ri-github-line"></i>
                </a>

                <a href=''
                 rel='Aditya Dhakate' 
                 className='profile-social-link'>
                <i className="ri-mail-line"></i>
                </a>

                <a href=''
                 rel='Aditya Dhakate' 
                 className='profile-social-link'>
                <i className="ri-facebook-circle-line"></i>
                </a>
            </ul>
           </div>
           <div className='profile-info row'>
            <div className='profile-info-group'>
              <h3 className='profile-info-number'>+4</h3>
              <p className='profile-info-decription'>
                Month of <br/> work
              </p>
            {/* </div> */}
           </div>
           {/* <div className='profile-info row'> */}
            <div className='profile-info-group'>
              <h3 className='profile-info-number'>+15</h3>
              <p className='profile-info-decription'>
                Created of <br/> Project
              </p>
            {/* </div> */}
           </div>
           {/* <div className='profile-info row'> */}
            <div className='profile-info-group'>
              <h3 className='profile-info-number'>+9</h3>
              <p className='profile-info-decription'>
                Successfully <br/> Project
              </p>
            </div>
           </div>

           <div className='profile-button'>
            <a href='./Aditya Dhakate.pdf' className='button'>
                DownLoad CV <i className='ri-download-line'></i>
            </a>
           </div>
         </div>

  </header>
  )
}
