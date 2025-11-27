import { fetchUpcomingMovies } from '../api/movies-data.js';
import { renderUpcomingSection } from '../common/ui-helpers.js';

export async function initUpcomingSection() {
  const upcomingContainer = document.getElementById('upcoming-container');
  if (!upcomingContainer) return;

  try {
    const upcomingData = await fetchUpcomingMovies();
    if (upcomingData?.results?.length) {
      const rand = Math.floor(Math.random() * Math.min(10, upcomingData.results.length));
      const movie = upcomingData.results[rand];
      renderUpcomingSection(movie, upcomingContainer);
    }
  } catch (error) {
    console.error('Upcoming section yükleme hatası:', error);
  }
}
