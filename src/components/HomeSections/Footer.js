import { Link } from 'react-router-dom';

export default function Footer() {

  return (
    <section className='six footer'>

        <div className='footerContainer'>
        <div className='footerGroup'>
            <p className='footerHeader'>SAY HELLO</p>
            <a href='mailto:kayla.famurea@gmail.com?subject=Hello'>email</a>
        </div>

        <div className='footerGroup'>
            <p className='footerHeader'>WORK</p>
            <Link to='/resume'>Resume</Link>
        </div>

        <div className='footerGroup'>
            <p className='footerHeader'>CONNECT</p>
            <a href='https://github.com/kfam22' target='_blank'>GH</a>
            <a href='https://www.linkedin.com/in/kaylafamurewa/' target='_blank'>LN</a>
        </div>
        </div>

        <div className='footerBottom'>
        <p>© designed and built by Kayla Famurewa ♥</p>
        </div>
    </section>
  )
}
