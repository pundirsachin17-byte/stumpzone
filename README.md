# 🏏 StumpZone

**Professional cricket news and analysis platform delivering real-time IPL coverage, match reports, previews, and in-depth player features.**

[![Live Site](https://img.shields.io/badge/Live-stumpzone.in-orange)](https://stumpzone.in)
[![Status](https://img.shields.io/badge/Status-Active-success)]()
[![License](https://img.shields.io/badge/License-MIT-blue)]()

---

## 🌟 Features

- **📰 Real-time Match Coverage** - Live reports and analysis for IPL 2026
- **📊 Match Previews** - Detailed pre-match analysis with probable XIs and pitch reports
- **⭐ Player Features** - In-depth profiles and performance analysis
- **📈 Clean Design** - Fast, responsive, mobile-first interface
- **🔍 SEO Optimized** - Built for Google search visibility
- **⚡ Fast Loading** - Client-side caching for instant repeat visits
- **📱 Mobile Responsive** - Perfect experience on all devices

---

## 🚀 Live Site

**Visit:** [stumpzone.in](https://stumpzone.in)

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS variables
- **Vanilla JavaScript** - No frameworks, pure performance

### Backend & Hosting
- **Vercel** - Serverless deployment and hosting
- **Firebase Firestore** - NoSQL database for articles
- **Vercel Functions** - API endpoints for content management

### Analytics & Monetization
- **Google Analytics** - Traffic tracking and insights
- **Google AdSense** - Revenue generation

### Development Tools
- **Git & GitHub** - Version control
- **VS Code** - Code editor

---

## 📂 Project Structure

```
stumpzone/
├── index.html          # Main site (homepage, articles, pages)
├── admin.html          # Admin panel for content management
├── sitemap.xml         # SEO sitemap for search engines
├── robots.txt          # Search engine crawling rules
├── ads.txt             # AdSense verification
├── api/
│   ├── articles.js     # GET articles from Firestore
│   ├── publish.js      # POST/PUT/DELETE articles (admin only)
│   └── ...
├── package.json        # Node.js dependencies
└── vercel.json         # Vercel deployment config
```

---

## 🎨 Design Philosophy

**Clean, fast, content-first design:**
- Light theme for readability
- Typography: Bebas Neue (headings) + Rajdhani (body)
- Orange (#ff5f1f) and Gold (#f5c518) brand colors
- Minimalist card-based layouts
- No image bloat - text-first approach

---

## ⚡ Performance

**Optimizations:**
- Client-side caching (5-minute localStorage cache)
- Lazy content loading
- Minimal dependencies
- Edge-optimized hosting on Vercel
- Progressive web app principles

**Results:**
- First load: 6-7 seconds (API fetch)
- Repeat visits: 0.1 seconds (cache hit)
- Mobile-optimized layout

---

## 📊 SEO Strategy

- Semantic HTML structure
- Clean URL routing with hash navigation
- Sitemap.xml for search engines
- robots.txt for crawl optimization
- Google Search Console integration
- Original content (no scraping)
- Daily publishing schedule

---

## 🔐 Security

**Admin Access:**
- Password-protected admin panel
- Server-side authentication via Vercel functions
- No credentials stored in frontend code
- All secrets in environment variables

**Data Protection:**
- Firebase security rules enforce admin-only writes
- Read-only public API for article display
- HTTPS encryption via Vercel

---

## 📝 Content Management

**Admin Panel Features:**
- WYSIWYG-style toolbar for formatting
- Live preview as you type
- Article templates for different content types
- Publishing checklist (SEO best practices)
- Edit and delete published articles
- Draft saving to browser localStorage

**Article Types:**
- Match Reports
- Match Previews
- Player Features
- Analysis Pieces
- Injury News
- Transfer News

---

## 🚀 Deployment

**Automatic deployment via Vercel:**

1. Push to GitHub main branch
2. Vercel auto-builds and deploys
3. Live in ~30 seconds
4. Zero-downtime updates

**Environment Variables (Vercel):**
- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`
- `ADMIN_PASSWORD`

---

## 🌐 Custom Domain

- **Domain:** stumpzone.in (GoDaddy)
- **DNS:** Managed by Vercel
- **SSL:** Automatic HTTPS via Vercel

---

## 📈 Analytics

**Google Analytics Setup:**
- Tracking ID: G-BHY5HH1DE7
- Real-time visitor monitoring
- Traffic source analysis
- User behavior tracking

**Google Search Console:**
- Sitemap submitted
- URL indexing monitoring
- Search performance tracking

---

## 💰 Monetization

**Google AdSense:**
- Publisher ID: ca-pub-6006045967234069
- Auto ads enabled
- GDPR-compliant consent management for EU users

---

## 🔧 Local Development

**Prerequisites:**
- Node.js 18+ installed
- Firebase account
- Vercel account

**Setup:**

```bash
# Clone the repository
git clone https://github.com/pundirsachin17-byte/stumpzone.git
cd stumpzone

# Install dependencies
npm install

# Set up environment variables
# Create .env.local file with:
# FIREBASE_PROJECT_ID=your-project-id
# FIREBASE_CLIENT_EMAIL=your-client-email
# FIREBASE_PRIVATE_KEY=your-private-key
# ADMIN_PASSWORD=your-admin-password

# Run locally with Vercel CLI
npx vercel dev

# Open browser
# Site: http://localhost:3000
# Admin: http://localhost:3000/admin.html
```

---

## 📄 License

MIT License - Free to use and modify with attribution.

---

## 👤 Author

**Sachin Pundir**
- Website: [stumpzone.in](https://stumpzone.in)
- Email: help.stumpzone@gmail.com
- GitHub: [@pundirsachin17-byte](https://github.com/pundirsachin17-byte)

---

## 🤝 Contributing

This is a personal project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📮 Contact

For questions or feedback:
- Email: help.stumpzone@gmail.com
- Website: [stumpzone.in/#contact](https://stumpzone.in/#contact)

---

## 🏆 Acknowledgments

- **Claude AI** - Content generation assistance
- **Vercel** - Hosting and deployment platform
- **Firebase** - Database and backend services
- **Google Fonts** - Typography (Bebas Neue, Rajdhani)

---

**Built with ❤️ for cricket fans worldwide** 🏏
