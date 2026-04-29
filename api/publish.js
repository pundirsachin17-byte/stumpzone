// POST /api/publish  — create or update an article
// DELETE /api/publish — delete an article
// Protected by ADMIN_PASSWORD env var
// Uses Firebase Firestore instead of Netlify Blobs

const admin = require('firebase-admin');

// Initialize Firebase Admin only once
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
  });
}

const db = admin.firestore();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '';

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-password');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Check password
  const password = req.headers['x-admin-password'] || '';
  if (!ADMIN_PASSWORD || password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // DELETE article
  if (req.method === 'DELETE') {
    try {
      const { id } = req.body;
      if (!id) {
        return res.status(400).json({ error: 'id required' });
      }

      await db.collection('articles').doc(id).delete();
      return res.status(200).json({ ok: true });
    } catch (error) {
      console.error('Delete error:', error);
      return res.status(500).json({ error: error.message });
    }
  }

  // POST — create or update
  if (req.method === 'POST') {
    try {
      const { title, category, body, excerpt, author, id } = req.body;

      if (!title || !body) {
        return res.status(400).json({ error: 'title and body required' });
      }

      // Generate slug from title
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-')
        .slice(0, 60);

      const articleId = id || `${Date.now()}-${slug}`;

      const article = {
        id: articleId,
        title: title.trim(),
        category: category || 'news',
        body: body.trim(),
        excerpt: excerpt || body.replace(/<[^>]+>/g, '').slice(0, 200).trim() + '...',
        author: author || 'StumpZone Staff',
        publishedAt: req.body.publishedAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        slug,
      };

      await db.collection('articles').doc(articleId).set(article);

      return res.status(200).json({ ok: true, article });
    } catch (error) {
      console.error('Publish error:', error);
      return res.status(500).json({ error: error.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
