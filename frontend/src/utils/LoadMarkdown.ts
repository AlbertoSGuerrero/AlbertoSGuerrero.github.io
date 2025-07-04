import { remark } from 'remark';
import html from 'remark-html';

export async function loadMarkdownFile(url: string): Promise<string> {
  const response = await fetch(url);
  const markdown = await response.text();
  const result = await remark().use(html).process(markdown);
  return result.toString(); // returns HTML string
}
