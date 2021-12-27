import React from 'react'

export default function About() {
  return (
    <div id="about" className="aboutMe">
		<h1 className="title">Sobre mim</h1>
		<div className="tools">
			<img className="tool" src="https://icongr.am/devicon/javascript-plain.svg?size=50&color=d2d6dd" alt="JavaScript"/>
			<img className="tool" src="https://icongr.am/devicon/css3-plain-wordmark.svg?size=50&color=d2d6dd" alt="CSS3"/>
			<img className="tool" src="https://icongr.am/devicon/html5-plain-wordmark.svg?size=50&color=d2d6dd" alt="HTML5"/>
			<img className="tool" src="https://icongr.am/devicon/git-plain-wordmark.svg?size=50&color=d2d6dd" alt="GIT"/>
			<img className="tool" src="https://icongr.am/devicon/github-original-wordmark.svg?size=50&color=d2d6dd" alt="GITHUB"/>
			<img className="tool" src="https://icongr.am/devicon/react-original-wordmark.svg?size=50&color=d2d6dd" alt="REACT"/>
			<img className="tool cardIcon" src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" alt="REDUX"/>
			<img className="tool" src="https://icongr.am/devicon/bootstrap-plain-wordmark.svg?size=50&color=d2d6dd" alt="BOOTSTRAP"/>
			<img className="tool" src="https://icongr.am/devicon/docker-plain-wordmark.svg?size=50&color=d2d6dd" alt="DOCKER"/>
			<img className="tool" src="https://icongr.am/devicon/mysql-plain-wordmark.svg?size=50&color=d2d6dd" alt="MYSQL"/>
		</div>
		<br />
		<p className="about">
		Formado em Educação Física pela UFMG e atualmente cursando Desenvolvimento Web pela Trybe. Apaixonado por Tecnologia e Esportes, entusiasta de Astronomia e Música. Busco trabalhar com o que mais facilita as nossas vidas e nos faz evoluir em todas as áreas: a tecnologia.
		</p>
		<br />
		<div className="gif">
			<lottie-player src="https://assets8.lottiefiles.com/packages/lf20_89gkjupo.json" background="transparent" speed="0.5" loop style={{height: "300px", width: "300px"}}autoplay></lottie-player>
		</div>
    </div>
  )
}
