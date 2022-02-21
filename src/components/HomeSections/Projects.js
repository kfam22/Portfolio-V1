import { Link } from 'react-router-dom';

export default function Projects() {
  return (<section className='four' id='four'>
      <div className="pageFourBox">
        <div className="pageFourLeft">
            <h1>I build & design things</h1>
            <p>Open source projects, web apps, and experimentals.</p>
            <a href='https://github.com/kfam22' target='_blank'><button className='projects hvr-sweep-to-right'>See My Work</button></a>
        </div>
        <div className="pageFourRight">
            <h1>I write,<br/> sometimes</h1>
            <p>I write about design, dev, learning, and life.</p>
            <Link to='/blog'><button className='projects hvr-sweep-to-right'>Read My Articles</button></Link>
        </div>
    </div>
  </section>)
}
