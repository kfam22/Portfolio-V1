import React from 'react';
import plantIcon from '../../assets/plant.png';
import recipeIcon from '../../assets/recipe-book.png';
import loveLetterIcon from '../../assets/love-letter.png';
import sewingIcon from '../../assets/sewing.png';
import codeIcon from '../../assets/binary-code.png';
import kfIcon from '../../assets/kf-01.svg';

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
            <p>plant tracker app</p>
         </div>
       </div>

       <div className='box hvr-float'>
         <div className='projectIcon'>
          <img src={kfIcon} alt='kayla famurewa icon'/>
         </div>
         <div className='projectName'>
            <p>personal portfolio</p>
         </div>
       </div>

       <div className='box hvr-float'>
          <div className='projectIcon'>
            <img src={loveLetterIcon} alt='love letter icon'/>
          </div>
          <div className='projectName'>
            <p>love poem generator</p>
          </div>
       </div>

       <div className='box hvr-float'>
          <div className='projectIcon'>
            <img src={codeIcon} alt='binary code icon'/>
          </div>
          <div className='projectName'>
            <p>breaking into tech guide</p>
          </div>
       </div>

       <div className='box hvr-float'>
          <div className='projectIcon'>
            <img src={sewingIcon} alt='sewing icon'/>
          </div>
          <div className='projectName'>
            <p>upcycle studio</p>
          </div>
       </div>

       <div className='box hvr-float'>
          <div className='projectIcon'>
            <img src={recipeIcon} alt='recipe icon'/>
          </div>
          <div className='projectName'>
            <p>secure family recipes</p>
          </div>
       </div>

     </div>
  </section>)
}
