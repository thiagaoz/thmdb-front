import type { Atracao } from "../types";


// busca atracoes por array de IDs no OMDB API pelo backend em python
export async function buscaAtracoesOmdbApi(atracoes: Atracao[]): Promise<Atracao[]> {
 
  const response = await fetch(`http://localhost:8000/busca-atracoes?ids=${atracoes.map(a => a.id).join(',')}`);
    if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
    }
    const data = await response.json();
    return data as Atracao[];
}