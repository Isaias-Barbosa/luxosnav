export interface Product {
  id: number;
  section: string;
  nome: string;
  categoria: string;
  descricao: string;
  descricaoCompleta: string;
  preco: number;
  imagem: string;
  imagens: string[];
  tamanhosDisponiveis?: string[];
  tamanhoSelecionado?: string;
  quantidade?: number;
  informacoesTecnicas?: { titulo: string; valor: string }[];
  avaliacoes?: { nome: string; nota: number; comentario: string }[];
}
