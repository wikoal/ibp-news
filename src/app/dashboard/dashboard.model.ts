export class Article{
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: Source;
  title: string;
  url: string;
  urlToImage: string;
}

export class Source {
  id: string;
  name: string;
}
export const CATEGORY: string[] = [
  'general',
  'business',
  'entertainment',
  'health',
  'science',
  'sports',
  'technology'
];
export const COUNTRY: string[] = ['fr', 'gb', 'de', 'jp', 'au', 'it' , 'us'];
