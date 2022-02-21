import React from 'react';
import plantIcon from '../../assets/plant.png';
import recipeIcon from '../../assets/recipe-book.png';
import loveLetterIcon from '../../assets/love-letter.png';
import sewingIcon from '../../assets/sewing.png';
import codeIcon from '../../assets/binary-code.png';
import kfIcon from '../../assets/kfblue-01.svg';

export default function Experience() {
  return (<section className='three' id='three'>
    <div className="pageThreeLeft">
     <h1>What I've<br/> Worked On</h1>
     <p>From web applications & interfaces to API's 
       & Databases I've built, contributed to, and 
       experimented with a number of front and back-end
       projects. 
      </p>
     </div>

     <div className="pageThreeRight">

       <div className='box hvr-float'>
         <div className='projectIcon'>
            <img src={plantIcon} alt='plant icon'/>
         </div>
         <div className='projectName'>
            <a href='https://github.com/Build-Week-Water-My-Plants-8' target='_blank'>plant tracker app</a>
         </div>
       </div>

       <div className='box hvr-float'>
         <div className='projectIcon'>
          <img src={kfIcon} alt='kayla famurewa icon'/>
         </div>
         <div className='projectName'>
            <a href='#home-text'>personal portfolio</a>
         </div>
       </div>

       <div className='box hvr-float'>
          <div className='projectIcon'>
            <img src={loveLetterIcon} alt='love letter icon'/>
          </div>
          <div className='projectName'>
            <a href='https://github.com/kfam22/poem-generator' target='_blank'> love poem generator</a>
          </div>
       </div>

       <div className='box hvr-float'>
          <div className='projectIcon'>
            <img src={codeIcon} alt='binary code icon'/>
          </div>
          <div className='projectName'>
            <a href='https://github.com/kfam22' target='_blank'>breaking into tech</a>
          </div>
       </div>

       <div className='box hvr-float'>
          <div className='projectIcon'>
            <img src={sewingIcon} alt='sewing icon'/>
          </div>
          <div className='projectName'>
            <a href='https://github.com/kfam22' target='_blank'>upcycle studio</a>
          </div>
       </div>

       <div className='box hvr-float'>
          <div className='projectIcon'>
            <img src={recipeIcon} alt='recipe icon'/>
          </div>
          <div className='projectName'>
            <a href='https://github.com/secret-family-recipes-04' target='_blank'>secure family recipes</a>
          </div>
       </div>

     </div>
  </section>)
}
