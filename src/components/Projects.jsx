import React from 'react';
import Cards from './Cards';
import projects from './Projects/projects';


export default function Projects() {

  return (
		<div id="projects">
      <br />
			<h1 className="title project-title">Projetos</h1>
			<br />
			<div className="Projects">
				{projects.map((project) => {
					return <Cards title={project.title} description={project.description} website={project.website} thumbnail={project.thumbnail} buttonText={project.buttonText} />
				})}
			</div>
		</div>
  )
}
