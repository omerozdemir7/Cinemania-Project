// src/js/index.js
import { showLoader, hideLoader } from './loader.js';
import { fetchTrendingMovies } from './movies-data.js';
import {
  renderMovieCard,
  updateHeroWithMovie,
} from './ui-helpers.js';
import { initUpcomingSection } from './upcoming.js';

// DOM hazır olunca çalış
// (main.js zaten DOMContentLoaded içinde çağırıyor ama 
// dinamik import olduğu için burası kendi başına çalışır)
const initHome = async () => {
  const heroSection = document.getElementById('home-hero');
  const heroContent = heroSection?.querySelector('.hero-content');
  const trendsGrid = document.getElementById('weekly-trends-grid');

  if (!heroSection && !trendsGrid) return; // Anasayfada değilsek dur

  showLoader();

  try {
    const [dayTrends, weekTrends] = await Promise.all([
      fetchTrendingMovies('day'),
      fetchTrendingMovies('week'),
    ]);

    // --- Hero İşlemleri ---
    let heroMovie = null;
    if (dayTrends?.results?.length) {
      const rand = Math.floor(Math.random() * Math.min(5, dayTrends.results.length));
      heroMovie = dayTrends.results[rand];
    } else if (weekTrends?.results?.length) {
      heroMovie = weekTrends.results[0];
    }

    if (heroMovie) {
      await updateHeroWithMovie(heroMovie.id, heroSection, heroContent);
    }

    // --- Weekly Trends ---
    if (weekTrends?.results?.length && trendsGrid) {
      trendsGrid.innerHTML = weekTrends.results
        .slice(0, 3)
        .map(m => renderMovieCard(m))
        .join('');
        
      trendsGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.movie-card');
        if (card && card.dataset.id) {
          // Kart tıklandığında hero'yu güncelle
          updateHeroWithMovie(card.dataset.id, heroSection, heroContent);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }

    // --- Upcoming ---
    initUpcomingSection();

  } catch (error) {
    console.error("Anasayfa yükleme hatası:", error);
  } finally {
    hideLoader();
  }
};

initHome();