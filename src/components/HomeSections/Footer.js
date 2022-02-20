import React from 'react'

export default function Footer() {

  return (
    <section className='six footer'>

        <div className='footerContainer'>
        <div className='footerGroup'>
            <p className='footerHeader'>SAY HELLO</p>
            <a href='#'>email link</a>
        </div>

        <div className='footerGroup'>
            <p className='footerHeader'>MY WORK</p>
            <a href='#three'>Projects</a>
            <a href='#four'>Writing</a>
            <a href='#'>Resume</a>
        </div>

        <div className='footerGroup'>
            <p className='footerHeader'>CONNECT</p>
            <a href='https://github.com/kfam22' target='_blank'>GH</a>
            <a href='https://www.linkedin.com/in/kaylafamurewa/' target='_blank'>LN</a>
            <a href='#'>TW</a>
        </div>
        </div>

        <div className='footerBottom'>
        <p>Designed and Built by Kayla Famurewa 2022</p>
        </div>
    </section>
  )
}
