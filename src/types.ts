export type Atracao = {
  id: string; // id da atração no imdb
  tmdb_id?: number; // id da atração no tmdb
  rating_th?: number; // nota atribuída à atração
  title?: string;
  title_br?: string; // título em português
  plot?: string;
  plot_br?: string; // sinopse em português
  genre?: string;
  genre_br?: string; // gênero em português
  type?: string; // tipo da atração (Filme, Série, Jogo)
  directors?: string; 
  url?: string;
  poster?: string | null; // URL do poster
  year?: string | null;
  runtime?: number | null;
  statusBusca?: 'visto' | 'nao-visto' | 'watchlist';
  
  // Atualizado para aceitar null
  seasons?: number | null; 
  currentSeason?: number | null;
};