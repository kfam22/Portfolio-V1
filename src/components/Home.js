import React from 'react';
import homeImg from './../assets/undraw_programmer_re_owql.svg';

export default function Home() {
  return (<section className='one'>
    <div>
        <h1>Fullstack Developer.</h1>
        <p>I like to craft solid and scalable frontend products with excellent UX.</p>
    </div>

    <div className="pageOneRight">
        <div className="rightImg">
        <img src={homeImg} alt='programmer illustration'/>
        </div>
    </div>
      
  </section>)
}
