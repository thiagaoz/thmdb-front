export type Atracao = {
  id: string; // id da atração no imdb
  rating_th?: number; // nota que eu dei para atração
  title?: string;
  plot?: string;
  genre?: string;
  type?: string; // tipo da atração    
  directos?: string[];
  imdb_url?: string;
  poster?: string; // URL do poster da atração
  year?: string; 
  
  // apenas para seriados
  seasons?: number; // quantidade de temporadas lançadas
}

