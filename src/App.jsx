import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

function MetaTagGenerator() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');

  const generateMetaTags = () => {
    const metaTags = [];
    if (title) metaTags.push(`<title>${title}</title>`);
    if (description)
      metaTags.push(`<meta name="description" content="${description}">`);
    if (keywords) metaTags.push(`<meta name="keywords" content="${keywords}">`);
    return metaTags.join('\n');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Meta Tag Generator</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Title:
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Description:
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Keywords:
        </label>
        <input
          type="text"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Generated Meta Tags:
        </label>
        <textarea
          readOnly
          value={generateMetaTags()}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>

      <CopyToClipboard text={generateMetaTags()}>
        <button className="bg-blue-500 text-white p-2 rounded">
          Copy to Clipboard
        </button>
      </CopyToClipboard>
    </div>
  );
}

export default MetaTagGenerator;
