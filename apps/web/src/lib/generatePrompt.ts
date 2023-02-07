export interface Product {
  body: string;
  originalBody: string;
  title: string;
  rating: number;
  classification: Classification;
  screenshot: string;
}

export interface Classification {
  label: string;
  confidence: number;
  labels: Labels;
}

export interface Labels {
  CG: Cg;
  OR: Or;
}

export interface Cg {
  confidence: number;
}

export interface Or {
  confidence: number;
}

export function generatePrompt(category: string, product: Partial<Product>) {
  return `${product.body} [${category} ${product.rating} stars]`;
}
