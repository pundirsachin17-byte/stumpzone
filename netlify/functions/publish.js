// POST /api/publish  — create or update an article
// DELETE /api/publish — delete an article
// Protected by ADMIN_PASSWORD env var (set in Netlify dashboard)

const { getStore } = require('@netlify/blobs');

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, x-admin-password',
  'Access-Control-Allow-Methods': 'POST, DELETE, OPTIONS',
  'Content-Type': 'application/json',
};

exports.handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: CORS, body: '' };
  }

  // Check password
  const password = event.headers['x-admin-password'] || '';
  if (!ADMIN_PASSWORD || password !== ADMIN_PASSWORD) {
    return { statusCode: 401, headers: CORS, body: JSON.stringify({ error: 'Unauthorized' }) };
  }

  const store = getStore('articles');

  // DELETE article
  if (event.httpMethod === 'DELETE') {
    try {
      const { id } = JSON.parse(event.body || '{}');
      if (!id) return { statusCode: 400, headers: CORS, body: JSON.stringify({ error: 'id required' }) };
      await store.delete(id);
      return { statusCode: 200, headers: CORS, body: JSON.stringify({ ok: true }) };
    } catch (err) {
      return { statusCode: 500, headers: CORS, body: JSON.stringify({ error: err.message }) };
    }
  }

  // POST — create or update
  if (event.httpMethod === 'POST') {
    try {
      const data = JSON.parse(event.body || '{}');
      const { title, category, body, excerpt, author } = data;

      if (!title || !body) {
        return { statusCode: 400, headers: CORS, body: JSON.stringify({ error: 'title and body required' }) };
      }

      // Generate slug from title
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-')
        .slice(0, 60);

      const id = data.id || `${Date.now()}-${slug}`;

      const article = {
        id,
        title: title.trim(),
        category: category || 'news',
        body: body.trim(),
        excerpt: excerpt || body.replace(/<[^>]+>/g, '').slice(0, 200).trim() + '...',
        author: author || 'StumpZone Staff',
        publishedAt: data.publishedAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        slug,
      };

      await store.set(id, JSON.stringify(article));

      return { statusCode: 200, headers: CORS, body: JSON.stringify({ ok: true, article }) };
    } catch (err) {
      return { statusCode: 500, headers: CORS, body: JSON.stringify({ error: err.message }) };
    }
  }

  return { statusCode: 405, headers: CORS, body: JSON.stringify({ error: 'Method not allowed' }) };
};
