import React, { useEffect, useState } from 'react';
import { loadMarkdownFile } from '../utils/LoadMarkdown.ts';
import Layout from '../components/Layout.js';

const markdownFiles = [
  { slug: 'project1', title: 'Project One', file: '/markdown-pages/project1.md' },
  { slug: 'project2', title: 'Project Two', file: '/markdown-pages/project2.md' }
];

export default function ProjectGallery() {
  const [activeTab, setActiveTab] = useState(markdownFiles[0].slug);
  const [content, setContent] = useState('<p>Loading...</p>');

  useEffect(() => {
    const file = markdownFiles.find(f => f.slug === activeTab)?.file;
    if (file) {
      loadMarkdownFile(file).then(setContent);
    }
  }, [activeTab]);

  return (
    <Layout>
    <div className="p-4">
      <div className="flex space-x-4 border-b mb-4">
        {markdownFiles.map(({ slug, title }) => (
          <button
            key={slug}
            className={`py-2 px-4 ${
              slug === activeTab ? 'border-b-2 border-blue-500 font-bold' : ''
            }`}
            onClick={() => setActiveTab(slug)}
          >
            {title}
          </button>
        ))}
      </div>

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
    </Layout>
  );
}
