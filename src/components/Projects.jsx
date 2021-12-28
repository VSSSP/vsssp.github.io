import React from 'react';
import trivia from '../images/trivia/trivia.png';
import tunes from '../images/trybetunes/trybetunes.png';
import starwars from '../images/starwars/starwarsplanets.png';
import recipesFoods from '../images/recipes-app/foods.png';
import loginWallet from '../images/trybewallet/login.png'
import wallet from '../images/trybewallet/wallet.png'

export default function Projects() {

  return (
		<div id="projects">
      <br />
			<h1 className="title">Projetos</h1>
			<br />

			<div className="Projects">

				<div class="card">
					<img class="card-img-top" src={trivia} alt="Trivia game" />
					<div class="card-body">
						<h5 class="card-title">Jogo de Trivia</h5>
						<p class="card-text">Aplicação de Trivia Game, utilizando React, Redux e estilizado com Tailwind CSS.</p>
						<a href="https://vsssp.github.io/trivia-react-redux/" class="btn btn-primary">Jogar Trivia</a>
					</div>
				</div>

				<div class="card">
					<img class="card-img-top" src={tunes} alt="Trybetunes" />
					<div class="card-body">
						<h5 class="card-title">TrybeTunes</h5>
						<p class="card-text">Aplicação de stream de músicas utilizando React e estilizado com Bootstrap/CSS.</p>
						<a href="https://vsssp.github.io/TrybeTunes/" class="btn btn-primary">Play some music</a>
					</div>
				</div>

				<div class="card">
					<img class="card-img-top" src={starwars} alt="Star Wars Planets Search" />
					<div class="card-body">
						<h5 class="card-title">Star Wars Planets Search</h5>
						<p class="card-text">Aplicação de filtros dos planetas do Star Wars utilizando React e estilizado em CSS 3.</p>
						<a href="https://vsssp.github.io/starwars-planets-search/" class="btn btn-primary">Filtrar Planetas do Star Wars</a>
					</div>
				</div>

				<div class="card">
					<img class="card-img-top" src={wallet} alt="Trybewallet" />
					<div class="card-body">
						<h5 class="card-title">Trybewallet</h5>
						<p class="card-text">Aplicação de gerenciamento de finanças utilizando React, Redux e estilizado com Bootstrap/CSS.</p>
						<a href="https://vsssp.github.io/trybewallet/" class="btn btn-primary">Gerenciar minha carteira</a>
					</div>
				</div>

				<div class="card">
					<img class="card-img-top" src={recipesFoods} alt="Trivia" />
					<div class="card-body">
						<h5 class="card-title">Recipes-APP</h5>
						<p class="card-text">Aplicação de receitas de comidas e bebidas utilizando React e estilizado com Bootstrap/CSS.</p>
						<a href="https://vsssp.github.io/recipes-app/" class="btn btn-primary">Preparar uma receita</a>
					</div>
				</div>

			</div>
		
		</div>
  )
}
