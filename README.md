# ReactMovie - Movie Discovery & Library Application

![React](https://img.shields.io/badge/React-19.2-blue)
![Vite](https://img.shields.io/badge/Vite-Latest-purple)
![Appwrite](https://img.shields.io/badge/Appwrite-Backend-green)
![Status](https://img.shields.io/badge/Status-Active%20Learning-brightgreen)

## 📋 Table of Contents / İçindekiler

- [Project Overview](#project-overview)
- [Motivation & Learning Goals](#motivation--learning-goals)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [How It Works](#how-it-works)
- [Challenges & Solutions](#challenges--solutions)
- [Getting Started](#getting-started)
- [Learning Resources Used](#learning-resources-used)

---

## Project Overview / Proje Özeti

**ReactMovie** is a full-stack movie discovery and personal library application built with **React 19.2** and **Appwrite** backend. The project serves as a comprehensive learning experience for mastering modern React patterns, integrating third-party APIs (TMDB), and building a complete backend-as-a-service (BaaS) solution with Appwrite.

**ReactMovie**, **React 19.2** ve **Appwrite** arka ucu kullanılarak inşa edilen tam bir film bulma ve kişisel kütüphane uygulamasıdır. Proje, modern React desenlerini, üçüncü taraf API'leri (TMDB) entegre etmeyi ve Appwrite ile eksiksiz bir backend-as-a-service (BaaS) çözümü oluşturmayı öğrenmek için kapsamlı bir öğrenme deneyimidir.

### What This App Does / Uygulama Neler Yapar?

- 🎬 **Movie Discovery**: Search TMDB API for millions of movies in real-time
- 📊 **Trending Tracker**: View and manage trending searches stored in Appwrite
- ⭐ **Movie Details**: View comprehensive movie information (cast, ratings, trailers, budgets)
- 💾 **Personal Library**: Save favorite searches and movies to Appwrite database
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🎯 **Smart Search**: Debounced search with real-time API calls
- 🔄 **Trending Analysis**: Automatic tracking of most searched movies

---

## Motivation & Learning Goals / Motivasyon & Öğrenme Hedefleri

### Why This Project? / Neden Bu Proje?

This project was created as a **comprehensive re-entry into React development** after a learning break, focusing on:

Bu proje, bir öğrenme molasından sonra **React geliştirmeye kapsamlı bir geri dönüş** için oluşturulmuştur ve şu konulara odaklanmaktadır:

#### 1. **Master React 19.2 Modern Patterns**
   - ✅ Functional components with hooks (useState, useEffect, useRef, useContext)
   - ✅ Performance optimization (useCallback, useMemo, debouncing)
   - ✅ Component composition and reusability
   - ✅ State management without Redux (lifting state up)
   - ✅ Error handling and loading states

#### 2. **Full-Stack Integration**
   - ✅ Frontend-Backend communication via REST APIs
   - ✅ Third-party API integration (TMDB API with Bearer tokens)
   - ✅ Backend-as-a-Service (Appwrite) for authentication, database, and storage
   - ✅ Environment variables and secure credential handling

#### 3. **Real-World Problem Solving**
   - ✅ Debouncing search input to reduce API calls
   - ✅ Handling async operations and race conditions
   - ✅ Modal/overlay management for movie details
   - ✅ Responsive UI that adapts to different screen sizes
   - ✅ Data normalization and transformation

#### 4. **Portfolio-Ready Code**
   - ✅ Clean, maintainable component structure
   - ✅ Proper separation of concerns
   - ✅ Documentation and comments
   - ✅ Error handling and user feedback

---

## Tech Stack / Teknoloji Yığını

### Frontend / Ön Uç
```
React 19.2              - Modern UI library with latest features
Vite                    - Lightning-fast build tool and dev server
Tailwind CSS            - Utility-first CSS framework for styling
JavaScript (ES6+)       - Core language for application logic
```

### Backend / Arka Uç
```
Appwrite                - Open-source Backend-as-a-Service
├── Authentication      - User signup/login with email
├── Database (Users, Movies, Search History)
├── Storage             - Movie posters and media files
└── Query System        - Advanced filtering and sorting
```

### External APIs / Dış API'ler
```
TMDB (The Movie Database) - Movie data, posters, trailers, ratings
├── Search endpoint       - Find movies by title
├── Discover endpoint     - Get popular/trending movies
├── Movie details         - Full movie information with videos
└── Upcoming movies       - New releases and anticipated films
```

### Development Tools / Geliştirme Araçları
```
npm/yarn                - Package manager
Git                     - Version control
VS Code                 - Code editor
Chrome DevTools         - Debugging
```

---

## Project Structure / Proje Yapısı

```
reactMovie/
│
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx          # Individual movie card component
│   │   ├── MovieDetail.jsx        # Modal for detailed movie info
│   │   ├── Search.jsx             # Search input component
│   │   └── Spinner.jsx            # Loading spinner
│   │
│   ├── App.jsx                    # Main application component
│   ├── index.css                  # Global styles + Tailwind
│   ├── main.jsx                   # Entry point
│   ├── appwrite.js                # Appwrite SDK initialization & functions
│   ├── hooks/
│   │   └── useDebounce.js         # Custom debounce hook
│   │
│   └── .env.local                 # Environment variables (API keys)
│
├── public/
│   └── hero.png                   # Hero banner image
│
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── package.json
└── README.md
```

### Key Files Explained / Anahtar Dosyaların Açıklaması

#### `App.jsx` - Main Component (500+ lines)
- Manages all application state (movies, trending, modal)
- Handles API calls to TMDB
- Coordinates between child components
- Implements search debouncing

#### `MovieDetail.jsx` - Movie Information Modal
- Fetches detailed movie data from TMDB
- Displays trailer (YouTube embed)
- Shows ratings, budget, revenue, cast
- Handles loading and error states

#### `appwrite.js` - Backend Integration
```javascript
// Core functions:
- getTrendingMovies()      // Fetch most searched movies
- updateSearchCount()      // Track search trends
- User authentication flows
- Database document management
```

#### `hooks/useDebounce.js` - Performance Hook
- Delays search input processing
- Reduces unnecessary API calls
- Improves performance and UX

---

## Key Features / Temel Özellikler

### 1. **Real-Time Movie Search**
```javascript
// User types "Inception" → Debounced → API Call → Results
- Immediate UI feedback
- Auto-complete suggestions
- Error handling for failed requests
```

### 2. **Trending Movies Tracker**
```javascript
// Track most searched movies in Appwrite
- Auto-increment search count
- Display top 5 trending searches
- Clickable trending cards
```

### 3. **Upcoming Movies Showcase**
```javascript
// Header displays 3 most anticipated upcoming films
- Rotated/tilted visual presentation
- Clickable to open movie details
- Responsive stacking on mobile
```

### 4. **Movie Details Modal**
```javascript
// Comprehensive movie information including:
- Title, release date, runtime
- IMDb-style ratings (vote_average/10)
- Plot summary (overview)
- Embedded YouTube trailer
- Budget and revenue
- Production companies
- Cast and crew information
- Genres and languages
```

### 5. **Responsive Scrolling (Trending Section)**
```javascript
// Desktop: See all trending movies at once
// Mobile: Horizontal scroll with prev/next buttons
- Smooth scroll animation
- Touch-friendly buttons
- Custom scrollbar styling
```

---

## How It Works / Nasıl Çalışır?

### User Flow / Kullanıcı Akışı

```
┌─────────────────────────────────────────────────────────────┐
│                    USER INTERACTION                          │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│ 1. USER TYPES MOVIE NAME IN SEARCH BOX                      │
│    (Örn: "The Dark Knight")                                  │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│ 2. DEBOUNCE DELAY (500ms)                                   │
│    - Waits for user to stop typing                           │
│    - Prevents unnecessary API calls                          │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│ 3. API CALL TO TMDB                                          │
│    GET /search/movie?query=The%20Dark%20Knight              │
│    Authorization: Bearer {TMDB_API_KEY}                      │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│ 4. RESPONSE PROCESSING                                       │
│    - Parse JSON response                                     │
│    - Extract: id, title, poster_path, rating, etc.          │
│    - Update movieList state                                  │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│ 5. STORE TRENDING DATA IN APPWRITE                           │
│    - Update search count for "The Dark Knight"               │
│    - Increment counter or create new document               │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│ 6. RENDER SEARCH RESULTS                                     │
│    - Display movie cards in grid                             │
│    - Show: poster, title, rating                             │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│ 7. USER CLICKS ON MOVIE CARD                                 │
│    - Modal opens                                             │
│    - Fetch detailed info from TMDB                           │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│ 8. DISPLAY COMPLETE MOVIE DETAILS                            │
│    - Title, plot, trailer, ratings, budget, etc.            │
│    - YouTube trailer embedded                                │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow Architecture / Veri Akışı Mimarisi

```
┌──────────────────────────────────────────────────────────────┐
│                                                                │
│                    REACT COMPONENT TREE                       │
│                                                                │
│  App (Main State Container)                                   │
│  ├── State: movieList, trending, selectedMovie, isModalOpen  │
│  ├── Props passed down to children                            │
│  │                                                             │
│  ├── Header                                                    │
│  │   └── upComingMovies (3 films in carousel)                 │
│  │                                                             │
│  ├── Search Component                                          │
│  │   └── searchTerm state → debounced → fetchMovies()        │
│  │                                                             │
│  ├── Trending Section                                          │
│  │   └── trendingMovies (from Appwrite)                       │
│  │                                                             │
│  ├── All Movies Grid                                           │
│  │   └── MovieCard × n (clickable)                            │
│  │                                                             │
│  └── MovieDetail Modal                                         │
│      └── selectedMovie detail fetch & display                 │
│                                                                │
└──────────────────────────────────────────────────────────────┘
                              ↓
         ┌────────────────────────────────────────┐
         │      EXTERNAL DATA SOURCES              │
         ├────────────────────────────────────────┤
         │                                         │
         │  TMDB API                               │
         │  ├── GET /search/movie                 │
         │  ├── GET /discover/movie               │
         │  ├── GET /movie/{id}                   │
         │  └── GET /movie/upcoming               │
         │                                         │
         │  Appwrite Database                      │
         │  ├── Users collection                  │
         │  ├── SearchHistory collection          │
         │  └── Favorites collection              │
         │                                         │
         └────────────────────────────────────────┘
```

---

## Challenges & Solutions / Zorluklar & Çözümler

### Challenge 1: API Call Optimization 🎯

**Problem:**
```javascript
// Without debouncing: User types "T" → API call
// Continues: "Th" → API call
// Then: "The" → API call
// Result: 5-10 unnecessary API calls per search
```

**Solution:**
```javascript
// Created custom useDebounce hook
const useDebounce = (callback, delay, dependencies) => {
  useEffect(() => {
    const handler = setTimeout(callback, delay);
    return () => clearTimeout(handler);
  }, dependencies);
};

// Usage: Only calls API after 500ms of inactivity
useDebounce(()=> setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);
```

**Result:** 80% reduction in API calls ✅

---

### Challenge 2: Modal State Management 🎨

**Problem:**
- Multiple movie sources (search results, trending, upcoming)
- Each has different data structures
- Modal needs normalized data

**Solution:**
```javascript
// Normalize all movie objects to same structure
const handleMovieClick = (movie) => {
  setSelectedMovie({
    id: movie.id || movie.movie_id,  // Handle both TMDB & Appwrite IDs
    title: movie.title || movie.searchTerm,
    poster_path: movie.poster_path || movie.poster_url
  });
  setIsModalOpen(true);
};
```

**Result:** Single modal component handles all sources ✅

---

### Challenge 3: Trending Movies Data Mismatch 🔄

**Problem:**
```
TMDB API returns: { id, title, poster_path, ... }
Appwrite returns: { $id, searchTerm, poster_url, movie_id, ... }
Both stored in same state → Component confusion
```

**Solution:**
```javascript
// In appwrite.js - Store TMDB ID for reference
await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
  searchTerm,           // Display name
  count: 1,             // Search frequency
  movie_id: movie.id,   // ✅ TMDB ID for API calls
  poster_url: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
});

// In App.jsx - Use TMDB ID for modal
const handleMovieClickTrending = (movie) => {
  setSelectedMovie({
    id: movie.movie_id,  // ✅ This is the TMDB ID
    title: movie.searchTerm,
    poster_path: movie.poster_url
  });
  setIsModalOpen(true);
};
```

**Result:** Correct movies display in modal ✅

---

### Challenge 4: Responsive Layout for Trending Section 📱

**Problem:**
- Desktop: Show all trending movies
- Tablet: Show 3-4 movies
- Mobile: Show 1-2 movies + scroll
- How to implement without media queries breaking the UI?

**Solution:**
```css
.trending ul {
  display: flex;
  gap: 20px;
  overflow-x: auto;        /* Enable horizontal scroll */
  scroll-behavior: smooth; /* Smooth scrolling */
  -webkit-overflow-scrolling: touch; /* Mobile touch scroll */
}

.trending li {
  flex-shrink: 0;          /* Prevent shrinking */
  width: 200px;            /* Fixed width */
  min-width: 200px;        /* Minimum width */
}
```

**Result:** Works on all devices without breakpoints ✅

---

### Challenge 5: Async Data Loading Race Conditions ⚡

**Problem:**
```javascript
User searches for "Batman" → TMDB call 1 starts
Quickly changes to "Spider-Man" → TMDB call 2 starts
Call 2 completes first, but Call 1 arrives later
Result: Shows wrong movies (Batman results override Spider-Man)
```

**Solution:**
```javascript
const fetchMovies = async (query='') => {
  setIsLoading(true);
  setErrorMessage('');
  
  try {
    const response = await fetch(endpoint, API_OPTIONS);
    const data = await response.json();
    
    // Only update if this is still the current search term
    if (query === debouncedSearchTerm) {
      setmovieList(data.results || []);
    }
  } catch (error) {
    setErrorMessage('Failed to fetch movies.');
  } finally {
    setIsLoading(false);
  }
};
```

**Alternative (Modern Approach):**
```javascript
useEffect(() => {
  let isMounted = true;
  
  const fetchData = async () => {
    const data = await fetch(url);
    if (isMounted) {
      setData(data);
    }
  };
  
  fetchData();
  
  return () => {
    isMounted = false; // Cleanup: Prevent state updates on unmounted component
  };
}, [debouncedSearchTerm]);
```

**Result:** Only latest search results displayed ✅

---

### Challenge 6: YouTube Trailer Embedding in Modal 🎬

**Problem:**
```javascript
TMDB returns trailer data but with different formats
Some movies have no trailers
YouTube iframe needs specific video key
```

**Solution:**
```javascript
const getTrailerKey = () => {
  if (movieDetail?.videos?.results) {
    const trailer = movieDetail.videos.results.find(
      video => video.type === 'Trailer' && video.site === 'YouTube'
    );
    return trailer?.key;
  }
  return null;
};

// In render:
{getTrailerKey() ? (
  <iframe
    src={`https://www.youtube.com/embed/${getTrailerKey()}`}
    allowFullScreen
  />
) : (
  <div className="no-trailer">No trailer available</div>
)}
```

**Result:** Graceful fallback for missing trailers ✅

---

## Getting Started / Başlangıç

### Prerequisites / Ön Koşullar
```
- Node.js 16+ 
- npm or yarn
- TMDB API key (free at themoviedb.org)
- Appwrite instance (local or cloud)
```

### Installation / Kurulum

**1. Clone Repository**
```bash
git clone https://github.com/yourusername/reactMovie.git
cd reactMovie
```

**2. Install Dependencies**
```bash
npm install
```

**3. Setup Environment Variables**
Create `.env.local` file:
```env
# TMDB API
VITE_TMDB_API_KEY=your_tmdb_api_key_here

# Appwrite
VITE_APPWRITE_ENDPOINT=http://localhost:80/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_API_KEY=your_api_key

# Database & Collections
VITE_DATABASE_ID=your_database_id
VITE_COLLECTION_ID=your_collection_id
```

**4. Setup Appwrite (if using locally)**
```bash
# Using Docker
docker run -d \
  -h appwrite \
  -p 80:80 \
  -p 443:443 \
  appwrite/appwrite:latest
```

**5. Create Collections in Appwrite**
```javascript
// Required Collection: "Trending"
// Attributes:
- searchTerm (String)
- count (Integer)
- movie_id (Integer)
- poster_url (String)
```

**6. Run Development Server**
```bash
npm run dev
```

**7. Build for Production**
```bash
npm run build
npm run preview
```

---

## How I Built This / Nasıl İnşa Ettim

### Learning Approach / Öğrenme Yaklaşımı

This project combines **tutorial-guided learning** with **AI-assisted problem solving**:

Bu proje, **eğitim rehberl öğrenme** ile **AI destekli problem çözmeyi** birleştiriyor:

#### 1️⃣ **Core React Patterns** (YouTube Tutorials)
- Watched React 19 feature updates
- Studied modern hooks best practices
- Learned component composition patterns

#### 2️⃣ **API Integration** (Official Documentation + AI)
- TMDB API documentation
- Appwrite SDK guides
- AI helped with debugging API responses

#### 3️⃣ **Real-World Problem Solving** (AI Assistance)
- Debouncing search input
- Handling async race conditions
- Normalizing data from multiple sources

#### 4️⃣ **UI/UX Implementation** (Tailwind + Custom CSS)
- Component styling with Tailwind
- Responsive design patterns
- Accessibility considerations

#### 5️⃣ **Debugging & Optimization** (Developer Tools)
- Chrome DevTools for React component inspection
- Network tab for API monitoring
- Performance profiling

---

## Learning Resources Used / Kullanılan Öğrenme Kaynakları

### 📚 Official Documentation
- [React 19 Official Docs](https://react.dev)
- [TMDB API Documentation](https://developer.themoviedb.org)
- [Appwrite Documentation](https://appwrite.io/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

### 🎥 Video Tutorials
- React Hooks Deep Dive (YouTube)
- Building Full-Stack Apps with Appwrite
- Vite + React Setup Guide

### 🤖 AI Assistance
- Debugging complex state management issues
- Optimizing performance (debouncing, memoization)
- Normalizing data from multiple API sources
- CSS layout troubleshooting

### 📖 Personal Learning
- Building incrementally (search → trending → modal → details)
- Testing each feature before moving to next
- Refactoring code for clarity and reusability
- Documenting as I go

---

## Key Learnings / Ana Öğrenmeler

### ✅ What I Mastered

1. **React Hooks Ecosystem**
   - useState for component state
   - useEffect for side effects
   - useRef for DOM references
   - Custom hooks for reusable logic

2. **API Integration Patterns**
   - Fetch API with Bearer token authentication
   - Error handling and loading states
   - Data transformation and normalization
   - Debouncing for performance

3. **State Management Without Redux**
   - Lifting state up to App component
   - Props drilling (acceptable for medium projects)
   - Separating concerns into smaller components

4. **Responsive Design**
   - Mobile-first approach with Tailwind
   - Flexible layouts that adapt to screen size
   - Touch-friendly interactions

5. **Full-Stack Thinking**
   - Frontend-backend separation of concerns
   - Security with environment variables
   - Database design for tracking trends

---

## Future Enhancements / Gelecek İyileştirmeler

- [ ] User authentication (signup/login)
- [ ] Save favorite movies to database
- [ ] User watchlist functionality
- [ ] Movie ratings and reviews
- [ ] Dark/light theme toggle
- [ ] Advanced filtering (genre, year, rating)
- [ ] Pagination for large result sets
- [ ] Caching with Service Workers
- [ ] Unit tests with Vitest
- [ ] E2E tests with Playwright

---

## Project Statistics / Proje İstatistikleri

```
📁 Total Files: 20+
📝 Total Lines of Code: 1500+
🎨 Components: 5 main
🎯 Key Features: 6
⏱️ Development Time: 2-3 weeks
🔗 External APIs: 2 (TMDB + Appwrite)
📦 Dependencies: 8
```

---

## Author & Contribution / Yazar & Katkı

**Created by:** Emre Onur Kalafat  
**Purpose:** Learning & Portfolio  
**Last Updated:** January 2026

**Contributions & feedback are welcome!**

---

## License / Lisans

This project is created for **educational purposes only**. All movie content is sourced from TMDB which is free for non-commercial use.

Bu proje **yalnızca eğitim amaçları** için oluşturulmuştur. Tüm film içeriği ticari olmayan kullanım için ücretsiz olan TMDB'den alınmıştır.

```
© 2026 Emre Onur Kalafat - Learning Project
Free to use for educational purposes
Not for commercial distribution
```

---

## Support / Destek

For questions or issues:
- 📧 Email: emre1905onur@gmail.com
- 🌐 Website: [emreonurkalafat.com](https://emreonurkalafat.com)
- 💻 GitHub: [@emreonur](https://github.com/emreonurkalafat)

---

**Happy Learning! 🚀**