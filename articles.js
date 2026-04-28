// GET /api/articles — returns all published articles, newest first
const { getStore } = require('@netlify/blobs');

exports.handler = async () => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'public, max-age=60', // 1 min CDN cache
  };

  try {
    const store = getStore('articles');
    const { blobs } = await store.list();

    if (!blobs.length) {
      return { statusCode: 200, headers, body: JSON.stringify([]) };
    }

    // Fetch all articles in parallel
    const articles = await Promise.all(
      blobs.map(async ({ key }) => {
        const raw = await store.get(key);
        try { return JSON.parse(raw); }
        catch { return null; }
      })
    );

    // Filter nulls, sort newest first
    const sorted = articles
      .filter(Boolean)
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

    return { statusCode: 200, headers, body: JSON.stringify(sorted) };
  } catch (err) {
    console.error('get-articles error:', err);
    return { statusCode: 200, headers, body: JSON.stringify([]) };
  }
};
