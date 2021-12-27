import React from 'react'
import trivia from '../images/trivia/trivia.png'
import loginTrivia from '../images/trivia/trivia-login.png'
import tunes from '../images/trybetunes/trybetunessongs.png'
import starwars from '../images/starwars/starwarsplanets.png'

export default function Projects() {
  return (
		<div id="projects">
      <br />
			<h1 className="title">Projetos</h1>
			<br />
			<div>
				
				<img src={ loginTrivia } alt="" />
				<img src={ trivia } alt="" />

			</div>
		</div>
  )
}
