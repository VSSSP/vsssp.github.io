import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import about from '../images/about.jpg'

export default function About() {
  return (
    <div>
			<h1>Sobre mim</h1>
			<Container>
				<Row>
					<Col xs={6} md={4}>
						<Image src={ about } thumbnail />
					</Col>
				</Row>
			</Container>
    </div>
  )
}
