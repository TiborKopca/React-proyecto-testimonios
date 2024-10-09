// import React from 'react'
import '../css/Testimonio.css';

let emma = '../src/img/Emma-1384890b0c332b769f67e8c14b628e13.png';

function Testimonio() {
  return (
    <div className='container__testimonio'>
			<img className='img__testimonio' src={emma} alt='testimonio de Emma'/>
			<div className='container__testimonio-text'>
				<p className="testimonio__name">Emma Bostian in Sweden</p>
				<p className="testimonio__job">Software Engineer at Spotify</p>
				<p className="testimonio__text">I&apos;ve always struggled with learning JavaScript. I&apos;ve taken many courses but freeCodeCamp&apos;s course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.</p>
			</div>
		</div>
  )	
}

export default Testimonio