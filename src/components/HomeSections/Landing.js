
// state to keep track of the current section
// object with each section as a key and the next section as a value
// when you go to a new section you want to change current section



export default function Landing() {

  return (<section className='one'>

    <div className='homeInfo'>

    <div className="pageOneLeft">
        <div className="rightImg">
        {/* <img src={homeImg} alt='programmer illustration'/> */}
        </div> 
    </div>

    <div className="pageOneRight">
        <h1 id='home-text'>Hello,<br/>I'm Kayla. I code, design, and build scalable projects with beautiful UI </h1>
        
        {/* optional buttons */}
        {/* <div className='homeBtns'>
            <a href='#three'><button className='hvr-sweep-to-right'>projects</button></a>
            <a href='#five'><button className='hvr-sweep-to-right'>contact me</button></a>
        // </div>  */} 

        <span id="arrow">&#8595; scroll</span>
    </div>

    </div>
    

    {/* <img id='waves' src={wavy} alt='waves'/> */}

  </section>)
}
