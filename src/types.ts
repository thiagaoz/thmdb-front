export type Atracao = {
  id: string; // id da atração no imdb
  rating_th?: number; // nota atribuída à atração
  title?: string;
  plot?: string;
  genre?: string;
  type?: string; // tipo da atração (Filme, Série, Jogo)
  directors?: string; 
  url?: string;
  poster?: string; // URL do poster
  year?: string;
  
  // Atualizado para aceitar null
  seasons?: number | null; 
  currentSeason?: number | null;
};