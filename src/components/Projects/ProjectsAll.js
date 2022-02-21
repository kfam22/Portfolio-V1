import {Link} from 'react-router-dom';
import recipes from '../../assets/recipepage.png';
import poemGenerator from '../../assets/getloveletters.png'
import plantTracker from '../../assets/plantlist.png';
import landingPage from '../../assets/floatingdesk-01.svg';

export default function ProjectsAll() {
  return (
    <div className='projects sectionContainer'>
        
        <h1 className='sectionTitle'>Projects</h1>
       

       <div className="projectContainer">

       <div className='projectItem'>
          
          <img className='folio' src={landingPage} alt='portfolio website illustration'/>
        
         <div className='projectDetails'>
             <h1 className='article-name'>Personal Portfolio</h1>
          
             <p className='article-details'> Ever evolving personal portfolio.</p>

             <div className='projectLinks'>
             <Link to='/'>live</Link>
           </div>
             
         </div>
     </div>

       <div className='projectItem'>
          
            <img src={recipes} alt='recipe website snapshot'/>
          
           <div className='projectDetails'>
               <h1 className='article-name'>Recipe Digitizer</h1>
            
               <p className='article-details'> A React App that uses token authentication to allow users to login and safely create, update, and access family recipes with ease.</p>

               <div className='projectLinks'>
               <a href='https://github.com/secret-family-recipes-04' target='_blank'>repo</a>
               <a href='https://secret-family-recipes-04.herokuapp.com/' target='_blank'>live</a>
             </div>
               
           </div>
       </div>

       <div className='projectItem'>
          
          <img src={poemGenerator} alt='poem fetching website snapshot'/>
        
         <div className='projectDetails'>
             <h1 className='article-name'>Love Poem Generator</h1>
          
             <p className='article-details'> App that fetches random classic poems that reference the words love and hate from famous poets.  Utilizes Poetry API from <a href='https://poetrydb.org/' target='_blank'>poetrydb.org</a> .</p>

             <div className='projectLinks'>
               <a href='https://github.com/kfam22/poem-generator' target='_blank'>repo</a>
             </div>

         </div>
     </div>

     <div className='projectItem'>
          
          <img src={plantTracker} alt='poem fetching website snapshot'/>
        
         <div className='projectDetails'>
             
              <h1 className='article-name'>Plant Health Tracker</h1>
          
             <p className='article-details'> App that keeps record of house plants water frequency to help plant owners keep their plants thriving.</p>

             <div className='projectLinks'>
               <a href='https://github.com/Build-Week-Water-My-Plants-8' target='_blank'>repo</a>
               <a href='https://water-my-plants-9-build-week.vercel.app/' target='_blank'>live</a>
             </div>
         </div>
     </div>

      
       </div>

    </div>
  )
}
