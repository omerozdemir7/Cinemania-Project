// src/js/catalog.js
import {
  searchMovies,
  fetchPopularMovies,
} from '/js/api/movies-data.js';
import { setupPagination } from '/js/common/pagination.js';
import { showLoader, hideLoader } from '/js/common/loader.js';
import { renderMovieCard, updateHeroWithMovie } from '/js/common/ui-helpers.js';

