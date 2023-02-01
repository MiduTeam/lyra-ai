export type Product = {
	body: string;
	originalBody: string;
	title: string;
	rating: number;
};

export function generatePrompt(category: string, product: Product) {
	return `${product.body} [${category} ${product.rating} stars]`;
}
