import React from 'react';

export default function Philosophy() {

  return (<section className='two' id='two'>
      <div className='pageTwoLeft'>
        <h1>Design</h1>
        <p>
          Just as an architect understands how structures are created, 
          digital projects thrive when designers understand how they 
          will be built. With a background in design and communications, 
          accessability and user experience are at the forefront of my 
          process. I'm committed to creating eye catching projects that 
          don't sacrifice usability.
        </p>

        <div className='skillsContainer'>
          <div className='skills'>
          <p>figma</p>
          </div>
          <div className='skills'>
          <p>html</p>
          </div>
          <div className='skills'>
          <p>css</p>
          </div>
          <div className='skills'>
          <p>illustrator</p>
          </div>
        </div>
      </div>

      <div className='pageTwoRight'>
      <div className='skillsContainer'>
          <div className='skills'>
          <p>js</p>
          </div>
          <div className='skills'>
          <p>React</p>
          </div>
          <div className='skills'>
          <p>node.js</p>
          </div>
          <div className='skills'>
          <p>sql</p>
          </div>
        </div>
        <h1>Engineering</h1>
        <p> 
          Developing a conceptual idea into something engaging and functional 
          can be equally satisfying. I carefully consider each key stroke and strive to 
          write code that's simple and resilient. I've worked with many modern 
          JS frameworks, however I try to stay focused on the fundamental 
          building blocks of the web.
          </p>
      </div>

  </section>)
}
