import React from 'react';

export default function Cards({ title, description, website, thumbnail, buttonText }) {
    return (
        <div>
          <div class="card">
					<img class="card-img-top" src={thumbnail} alt={title} />
						<div class="card-body">
							<h5 class="card-title">{title}</h5>
							<p class="card-text">{description}</p>
							<a href={website} class="btn btn-primary">{buttonText}</a>
						</div>
					</div>
        </div>
    )
}
