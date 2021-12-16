import React from 'react'
import { Carousel } from 'react-bootstrap'
import trivia from '../images/trivia.png'

export default function Projects() {
  return (
		<>
		<div id="projects">
      <br />
			<h1 className="title">Projetos</h1>
			<br />
			<Carousel className="carousel" variant="dark">
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={trivia}
						alt="First slide"
					/>
					<Carousel.Caption className="carouselCaption">
						Acesse o link desse projeto <a href="http://github.com">aqui </a>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="holder.js/800x400?text=Second slide&bg=282c34"
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="holder.js/800x400?text=Third slide&bg=20232a"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	</>
  )
}
