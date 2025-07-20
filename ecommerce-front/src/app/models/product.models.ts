export interface Product {
  id: number;
  section: string;
  nome: string;
  categoria: string;
  marca: string; // <-- nova propriedade
  descricao: string;
  descricaoCompleta: string;
  preco: number;
  imagem: string;
  imagens: string[];
  numeracaoDisponiveis?: string[];
  numeracaoSelecionado?: string;
  tamanhosDisponiveis?: string[];
  tamanhoSelecionado?: string;
  quantidade?: number;
  informacoesTecnicas?: { titulo: string; valor: string }[];
  avaliacoes?: { nome: string; nota: number; comentario: string }[];
  novo?: boolean; // opcional para destaque
  promocao?: boolean; // opcional para destaque
}