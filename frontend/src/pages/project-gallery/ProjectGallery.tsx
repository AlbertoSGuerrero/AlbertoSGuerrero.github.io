import React, { useEffect, useState } from 'react';
import { loadMarkdownFile } from '../../utils/LoadMarkdown';
import Layout from '../../components/Layout.js'
import './ProjectGallery.css';

interface Page {
  slug: string;
  title: string;
  contentHtml: string;
}

export default function ProjectGallery() {
  const [pages, setPages] = useState<Page[]>([]);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMarkdownPages() {
      // Fetch the index.json with filenames
      const basePath = process.env.PUBLIC_URL || '';
      const res = await fetch(`${basePath}/markdown-pages/index.json`);
      const files: string[] = await res.json();

      // Load all markdown files in parallel
      const loadedPages = await Promise.all(
        files.map(async (filename) => {
          const slug = filename.replace(/\.md$/, '');
          const { title, contentHtml } = await loadMarkdownFile(`/markdown-pages/${filename}`);
          return { slug, title, contentHtml };
        })
      );

      setPages(loadedPages);
      setActiveTab(loadedPages[0]?.slug || null);
      setLoading(false);
    }

    fetchMarkdownPages();
  }, []);

  if (loading) return <Layout><div className="project-gallery-container">Loading...</div></Layout>;

  const activePage = pages.find((page) => page.slug === activeTab);

  return (
    <Layout>
      <div className="project-gallery-container">
        <div className="tabs">
          {pages.map(({ slug, title }) => (
            <button
              key={slug}
              className={`tab-button ${slug === activeTab ? 'active' : ''}`}
              onClick={() => setActiveTab(slug)}
            >
              {title}
            </button>
          ))}
        </div>

        <div
          className="markdown-content"
          dangerouslySetInnerHTML={{ __html: activePage?.contentHtml || '' }}
        />
      </div>
    </Layout>
  );
}
