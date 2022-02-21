import { Link } from 'react-router-dom'
import kayla from '../assets/kayla.jpg';

export default function About() {
  return (
    <div className='sectionContainer about'>
       

       <div className="aboutContainer">

       <img src={kayla} alt='head-shot of Kayla Famurewa'/>

       <div className='aboutText'>
           <h1> Hello, I'm Kayla</h1>
           <p>
            I'm a developer and designer with a passion for creating innovative
             products. With a background in communications and design, I'm 
             interested in creating fluent and natural user experiences.  
             My education, work, and life experiences have exposed me to the the 
             need for constant learning and evolving. I look at every project as 
             an opportunity for learning and discovery.</p>
            
             <p>When I'm not immersed in style sheets, contemplating layouts and code
              structure, I enjoy art and fashion.  I design <a href='https://fashionista.com/2020/07/almost-on-time-nike-corset-kayla-sade-famurewa' target='_blank'> clothing </a> and run a small sustainable 
                <a href='https://almostontimesf.com/' target='_blank'> brand </a> in my spare time.
           </p>

            <a className='aboutLink' href='/resume'><button className='hvr-sweep-to-right'>my resume</button></a>
            
           
       </div>

      

      
       </div>


    </div>
  )
}
