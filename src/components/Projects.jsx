import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import trivia from '../images/trivia.png'

export default function Projects() {
  return (
		<div id="projects">
      <br />
			<h1>Projetos</h1>
			<br />
			<CardGroup>
			<Card>
				<Card.Img variant="top" src={ trivia } />
				<Card.Body>
					<Card.Title>Jogo de Trivia</Card.Title>
					<Card.Text>
						Jogo de Trivia utilizando Redux
					</Card.Text>
				</Card.Body>
			</Card>
			<Card>
				<Card.Img variant="top" src="holder.js/100px160" />
				<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This card has supporting text below as a natural lead-in to additional
						content.{' '}
					</Card.Text>
				</Card.Body>
			</Card>
			<Card>
				<Card.Img variant="top" src="holder.js/100px160" />
				<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a natural lead-in to
						additional content. This card has even longer content than the first to
						show that equal height action.
					</Card.Text>
				</Card.Body>
			</Card>
		</CardGroup>
		</div>
  )
}
