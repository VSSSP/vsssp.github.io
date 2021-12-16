import React from 'react'
import about from '../images/about.jpg'

export default function Home() {
  return (
		<div className="home">
			<img src={ about } alt="" className="foto"></img>
			<div>
			<p className="name">
				Victor de Paula
			</p>
			<p className="description">
				Desenvolvedor Front-end
			</p>
			</div>
		</div>
  )
}
