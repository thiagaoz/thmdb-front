import type { Atracao } from "../types";

// busca atracoes por array de IDs no OMDB API pelo backend em python
export async function buscaAtracoesOmdbApi(imdbIds: string[]): Promise<Atracao[]> {
  const response = await fetch(`http://localhost:8000/busca-atracoes?imdb_ids=${imdbIds.join(',')}`);
    if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
    }
    const data = await response.json();
    return data as Atracao[];
}