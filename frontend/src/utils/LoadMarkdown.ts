import { remark } from 'remark';
import html from 'remark-html';

export interface MarkdownData {
  title: string;
  contentHtml: string;
}

export async function loadMarkdownFile(url: string): Promise<MarkdownData> {
  const basePath = process.env.PUBLIC_URL || '';
  const res = await fetch(basePath + url);
  const markdown = await res.text();

  let title = 'Untitled';
  let body = markdown;

  const match = markdown.match(/^---\s*([\s\S]*?)---\s*/);

  if (match) {
    const frontmatter = match[1].trim();
    body = markdown.slice(match[0].length);

    const titleMatch = frontmatter.match(/^title:\s*(["']?)(.*?)\1$/m);
    if (titleMatch) {
      title = titleMatch[2].trim();
    }
  }

  const processed = await remark().use(html).process(body);

  return {
    title,
    contentHtml: processed.toString(),
  };
}
