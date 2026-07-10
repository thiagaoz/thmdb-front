export type Atracao = {
  id: string; // id da atração no imdb
  rating_th: number; // nota que eu dei para atração
  title?: string;
  plot?: string;
  poster?: string; // URL do poster da atração
  genre?: string[];
  type?: 'Filme' | 'Série' | 'Outro'; // tipo da atração
  year?: string; 
  // apenas para seriados
  seasons?: number; // quantidade de temporadas lançadas
}

