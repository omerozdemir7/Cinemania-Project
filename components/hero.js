function renderErrorHero(container, message) {
  container.innerHTML = `
    <div class="hero__bg" style="background-image:linear-gradient(90deg,#333,#111)"></div>
    <div class="hero__scrim"></div>
    <div class="hero__inner">
      <h2 class="hero__title" style="color: #ff4545;">Hata Oluştu</h2>
      <p class="hero__subtitle" style="max-width: 100%; color: #ffc4c4;">
        ${message}
      </p>
    </div>
  `;
}

function renderMovieHero(container, movie) {
  const ratingStars = createRatingStars(movie.vote_average);
  container.innerHTML = `
    <div class="hero__bg" style="background-image:url('${IMAGE_BASE_URL}${
    movie.backdrop_path || movie.poster_path || ''
  }')"></div>
    <div class="hero__scrim"></div>

    <div class="hero__inner">
    <div class="hero__badge">
      <h2 class="hero__title">${movie.title ?? movie.name ?? 'Untitled'}</h2>
      <span class="hero__rating">${ratingStars}</span>
      </div>
      <p class="hero__subtitle">
        ${movie.overview || 'No description available.'}
      </p>

      <div class="hero__ctas">
        <button class="hero__btn--play" id="play-trailer-btn">Watch Trailer</button>
        <button class="hero__btn--info" id="more-info-btn">More Info</button>
      </div>
    </div>
  `;

  // ID çakışması olmasın diye container scope'undan seç
  const trailerBtn = container.querySelector('#play-trailer-btn');
  const detailsBtn = container.querySelector('#more-info-btn');

  trailerBtn?.addEventListener('click', () => playTrailer(movie.id));
  detailsBtn?.addEventListener('click', () => showMovieDetails(movie.id));
}