export type Atracao = {
  id: string; // id da atração no imdb
  title?: string;
  plot?: string;
  poster?: string; // URL do poster da atração
  genre?: string[];
  rating_th?: number; // nota que eu dei para atração
  type?: 'Filme' | 'Série' | 'Stand-up' | 'Outro'; // tipo da atração
  year?: string; 

  // apenas para seriados
  seasons?: number; // quantidade de temporadas lançadas
}

