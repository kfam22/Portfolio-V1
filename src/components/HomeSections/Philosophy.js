import React from 'react';

export default function Philosophy() {

  return (<section className='two' id='two'>
      <div className='pageTwoLeft'>
        <h1>Design</h1>
        <p>
          With a background in design and communications, 
          accessability and user experience are at the forefront of my 
          process. I'm committed to creating eye catching projects that 
          don't sacrifice usability.
        </p>

        <div className='skillsContainer'>
          <div className='skills'>
          <p>figma</p>
          </div>
          <div className='skills'>
          <p>illustrator</p>
          </div>
          <div className='skills'>
          <p>sketch</p>
          </div>
          <div className='skills'>
          <p>css</p>
          </div>
        </div>
      </div>

      <div className='pageTwoRight'>
      <div className='skillsContainer'>
          <div className='skills'>
          <p>js</p>
          </div>
          <div className='skills'>
          <p>react</p>
          </div>
          <div className='skills'>
          <p>node</p>
          </div>
          <div className='skills'>
          <p>sql</p>
          </div>
        </div>
        <h1>Engineering</h1>
        <p> 
          I carefully consider each key stroke and strive to 
          write code that's simple and resilient. I've worked with many modern 
          JS frameworks, however I try to stay focused on the fundamental 
          building blocks of the web.
          </p>
      </div>

  </section>)
}
