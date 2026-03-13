"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, ChevronRight, Moon, Sun, Code, Database, Cloud, Wrench, ArrowUp, Sparkles, Zap, Target, Rocket, ShoppingBag, Utensils, CloudSun, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [theme, setTheme] = useState('dark');
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stars, setStars] = useState<Array<{ left: string; top: string; delay: string; size: number }>>([]);
  const [shootingStars, setShootingStars] = useState<Array<{ left: string; top: string; delay: string }>>([]);

  useEffect(() => {
    setIsVisible(true);

    // Generate stars with varying sizes for depth
    const generatedStars = Array.from({ length: 150 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      size: Math.random() > 0.7 ? 3 : Math.random() > 0.4 ? 2 : 1
    }));
    setStars(generatedStars);

    // Generate shooting stars
    const generatedShootingStars = Array.from({ length: 3 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 50}%`,
      delay: `${Math.random() * 25 + 8}s`
    }));
    setShootingStars(generatedShootingStars);

    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const skills = {
    languages: [
      'Java',
      'Python',
      'C',
      'C++',
      'SQL',
      'Dart',
      'JavaScript',
      // 'TypeScript'
    ],

    frontend: [
      'Flutter',
      'React Native',
      'HTML',
      'CSS',
      'React.js',
      'Next.js',
      'Tailwind CSS',
    ],

    backend: [
      'Firebase Authentication',
      'REST APIs',
      'Socket.IO',
      'Node.js',
      'Express.js',
    ],

    databases: [
      'MongoDB',
      'MySQL',
      'Firestore',
      // 'PostgreSQL'
    ],

    tools: [
      'Git',
      'GitHub',
      'Docker',
      'Postman',
      'VS Code',
      'Android Studio',
      'Expo'
    ],

    cloud: [
      'Firebase',
      // 'AWS',
      'Vercel',
      'Netlify'
    ],

    concepts: [
      'Data Structures',
      'Performance Optimization',
      'Scalable Architecture',
      'API Integration',
      'Cross-Platform Development',
    ]
  };


  const projects = [
    {
      title: 'PrimeBid',
      category: 'fullstack',
      tagline: 'Real-time auction marketplace',
      description: 'Built a production-ready MERN stack platform with Socket.io for real-time bidding, JWT authentication, and a comprehensive admin dashboard.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io'],
      highlights: ['Real-time bidding', 'Role-based access', 'Auto lifecycle'],
      github: 'https://github.com/Umeshhhmali/Prime-Bid',
      live: '#',
      gradient: 'from-violet-600 to-purple-600',
      icon: Zap
    },
    {
      title: 'AI Mock Interviewer',
      category: 'ai',
      tagline: 'AI-powered interview preparation',
      description: 'Developed an AI-driven platform that simulates real interview scenarios with instant feedback and progress tracking.',
      tech: ['React.js', 'OpenAI API', 'Node.js', 'MongoDB'],
      highlights: ['Dynamic questions', 'Real-time analysis', 'Progress tracking'],
      github: 'https://github.com/Umeshhhmali/Ai-Interview-Mocker',
      live: '#',
      gradient: 'from-blue-600 to-cyan-600',
      icon: Sparkles
    },
    {
      title: 'Nike Store Flutter App',
      category: 'mobile',
      tagline: 'Nike-inspired sneaker eCommerce app',
      description: 'Built a sleek Flutter-based eCommerce application featuring cart management, checkout flow, and Provider-powered state management.',
      tech: ['Flutter', 'Dart', 'Provider', 'Material UI'],
      highlights: ['Modern UI', 'Cart & checkout', 'Provider state management'],
      github: 'https://github.com/Umeshhhmali/Nike-Store-flutter',
      live: '#',
      gradient: 'from-violet-600 to-cyan-600',
      icon: ShoppingBag
    },
    {
      title: 'Cooksy - Recipe Finder',
      category: 'mobile',
      tagline: 'Discover, save, and cook recipes effortlessly',
      description: 'Developed a React Native recipe discovery app powered by TheMealDB with search, favorites using AsyncStorage, and smooth animated UI.',
      tech: ['React Native', 'Expo', 'AsyncStorage', 'Reanimated', 'TheMealDB API'],
      highlights: ['Recipe search', 'Favorites storage', 'Animated UI', 'Masonry layout'],
      github: 'https://github.com/Umeshhhmali/Cooksy-App',
      live: '#',
      gradient: 'from-amber-500 to-orange-600',
      icon: Utensils
    },
    {
      title: 'Netflix Clone',
      category: 'frontend',
      tagline: 'Full-featured streaming platform',
      description: 'Built a pixel-perfect Netflix replica with Firebase authentication, TMDB API integration, and optimized video playback.',
      tech: ['React.js', 'Firebase', 'TMDB API', 'Context API'],
      highlights: ['Firebase auth', 'Dynamic content', 'Video player'],
      github: 'https://github.com/Umeshhhmali/Netflix-Clone',
      live: '#',
      gradient: 'from-red-600 to-orange-600',
      icon: Target
    },
    {
      title: 'Weather App',
      category: 'mobile',
      tagline: 'Real-time weather insights at your fingertips',
      description: 'Built a cross-platform weather application using React Native and Expo that fetches live data from OpenWeatherMap with a clean, modern interface.',
      tech: ['React Native', 'Expo', 'OpenWeatherMap API', 'NativeWind'],
      highlights: ['Live weather data', 'City search', 'Minimal UI', 'API integration'],
      github: 'https://github.com/Umeshhhmali/WeatherApp',
      live: '#',
      gradient: 'from-sky-500 to-indigo-600',
      icon: CloudSun
    }
  ];

  const experience = [
    {
      role: 'Software Developer Trainee',
      company: 'Tech Company',
      period: '2025 - Present',
      highlights: [
        'Building and shipping production-ready features',
        'Optimizing APIs and improving application performance',
        'Collaborating with cross-functional teams to deliver scalable solutions'
      ]
    },
    {
      role: 'Master of Computer Applications (MCA)',
      company: 'University',
      period: '2023 - 2025',
      highlights: [
        'Specialized in full-stack development and modern web technologies',
        'Built multiple real-world projects using MERN stack and mobile frameworks',
        'Strengthened problem-solving and system design skills'
      ]
    },
    {
      role: 'Bachelor of Computer Science (BSc CS)',
      company: 'University',
      period: '2020 - 2023',
      highlights: [
        'Developed strong foundations in programming, data structures, and databases',
        'Created academic and personal projects to apply theoretical knowledge',
        'Discovered a passion for software development'
      ]
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme === 'dark'
      ? 'bg-[#0B0F1E] text-white'
      : 'bg-zinc-50 text-zinc-950'
      }`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          scroll-behavior: smooth;
        }
        
        .font-display {
          font-family: 'Space Grotesk', sans-serif;
        }
        
        .font-body {
          font-family: 'Inter', sans-serif;
        }
        
        /* Enhanced Starfield Background */
        .stars {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          background: radial-gradient(ellipse at center, rgba(138, 43, 226, 0.05) 0%, transparent 50%);
        }
        
        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: twinkle 3s ease-in-out infinite;
          box-shadow: 0 0 4px rgba(255, 255, 255, 0.8);
        }
        
        .star-1 {
          width: 1px;
          height: 1px;
        }
        
        .star-2 {
          width: 2px;
          height: 2px;
          box-shadow: 0 0 6px rgba(255, 255, 255, 0.9);
        }
        
        .star-3 {
          width: 3px;
          height: 3px;
          box-shadow: 0 0 8px rgba(255, 255, 255, 1), 0 0 12px rgba(139, 92, 246, 0.5);
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        /* Shooting Stars */
        .shooting-star {
          position: absolute;
          height: 1px;
          width: 80px;
          background: linear-gradient(90deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.6) 30%, transparent);
          animation: shoot ease-out infinite;
          opacity: 0;
        }
        
        .shooting-star::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 3px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 6px rgba(255, 255, 255, 1), 0 0 12px rgba(139, 92, 246, 0.5);
        }
        
        @keyframes shoot {
          0% {
            opacity: 0;
            transform: translateX(0) translateY(0) rotate(-45deg);
          }
          8% {
            opacity: 1;
          }
          92% {
            opacity: 0.7;
          }
          100% {
            opacity: 0;
            transform: translateX(-350px) translateY(350px) rotate(-45deg);
          }
        }
        
        /* Nebula Effect */
        .nebula {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          background: 
            radial-gradient(ellipse at 20% 30%, rgba(139, 92, 246, 0.08) 0%, transparent 40%),
            radial-gradient(ellipse at 80% 70%, rgba(99, 102, 241, 0.06) 0%, transparent 40%),
            radial-gradient(ellipse at 50% 50%, rgba(168, 85, 247, 0.04) 0%, transparent 50%);
          animation: nebulaPulse 15s ease-in-out infinite;
        }
        
        @keyframes nebulaPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        /* Cosmic Dust Particles */
        .cosmic-dust {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          background-image: 
            radial-gradient(1px 1px at 20% 30%, rgba(255, 255, 255, 0.1), transparent),
            radial-gradient(1px 1px at 60% 70%, rgba(255, 255, 255, 0.1), transparent),
            radial-gradient(2px 2px at 50% 50%, rgba(255, 255, 255, 0.1), transparent),
            radial-gradient(1px 1px at 80% 10%, rgba(255, 255, 255, 0.1), transparent),
            radial-gradient(1px 1px at 90% 60%, rgba(255, 255, 255, 0.1), transparent),
            radial-gradient(2px 2px at 33% 50%, rgba(255, 255, 255, 0.1), transparent),
            radial-gradient(1px 1px at 10% 20%, rgba(255, 255, 255, 0.1), transparent);
          background-size: 200% 200%;
          animation: cosmicDrift 60s linear infinite;
        }
        
        @keyframes cosmicDrift {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
        
        /* Curved section divider */
        .curve-divider {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }
        
        .curve-divider svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 100px;
        }
        
        @media (min-width: 768px) {
          .curve-divider svg {
            height: 150px;
          }
        }
        
        /* Glassmorphism */
        .glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .glass-light {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        /* Horizontal Scrolling Container */
        .scroll-container {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
          gap: 1rem;
          padding: 1rem 0;
        }
        
        @media (min-width: 768px) {
          .scroll-container {
            gap: 2rem;
            padding: 2rem 0;
          }
        }
        
        .scroll-container.center-single {
          justify-content: center;
        }
        
        .scroll-container::-webkit-scrollbar {
          display: none;
        }
        
        /* Project card with 3D flip effect */
        .project-card {
          min-width: 300px;
          max-width: 300px;
          height: 500px;
          perspective: 1500px;
          scroll-snap-align: center;
          flex-shrink: 0;
        }
        
        @media (min-width: 640px) {
          .project-card {
            min-width: 340px;
            max-width: 340px;
            height: 520px;
          }
        }
        
        @media (min-width: 1024px) {
          .project-card {
            min-width: 360px;
            max-width: 360px;
            height: 500px;
          }
        }
        
        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        
        @media (hover: hover) and (pointer: fine) {
          .project-card:hover .card-inner {
            transform: rotateY(180deg);
          }
        }
        
        /* Mobile tap to flip */
        @media (hover: none) or (pointer: coarse) {
          .project-card.flipped .card-inner {
            transform: rotateY(180deg);
          }
        }
        
        .card-front, .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 1.5rem;
          overflow: hidden;
        }
        
        .card-front {
          z-index: 2;
        }
        
        .card-back {
          transform: rotateY(180deg);
        }
        
        .gradient-overlay {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 1;
        }
        
        @media (hover: hover) and (pointer: fine) {
          .project-card:hover .gradient-overlay {
            opacity: 0.1;
          }
        }
        
        .project-icon-wrapper {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @media (hover: hover) and (pointer: fine) {
          .card-front:hover .project-icon-wrapper {
            transform: scale(1.15) rotate(360deg);
          }
        }
        
        .tech-badge {
          transition: all 0.3s ease;
        }
        
        @media (hover: hover) and (pointer: fine) {
          .tech-badge:hover {
            transform: scale(1.1);
          }
        }
        
        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 75%;
          max-width: 300px;
          height: 100vh;
          z-index: 60;
          transition: right 0.3s ease-in-out;
          overflow-y: auto;
        }
        
        .mobile-menu.open {
          right: 0;
        }
        
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          z-index: 59;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease-in-out;
        }
        
        .mobile-menu-overlay.open {
          opacity: 1;
          pointer-events: all;
        }
        
        /* Entry animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fadeInDown {
          animation: fadeInDown 0.5s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        
        /* Gradient text */
        .gradient-text {
          background: linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Button glow effect */
        .btn-glow:hover {
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.6);
        }
        
        /* Scroll Indicators */
        .scroll-indicator {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background: rgba(139, 92, 246, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0.7;
        }
        
        .scroll-indicator:hover {
          opacity: 1;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.5);
        }
        
        .scroll-indicator-left {
          left: -25px;
        }
        
        .scroll-indicator-right {
          right: -25px;
        }
        
        @media (max-width: 767px) {
          .scroll-indicator {
            display: none;
          }
        }
        
        /* Smaller arrows on tablet */
        @media (min-width: 768px) and (max-width: 1023px) {
          .scroll-indicator {
            width: 40px;
            height: 40px;
            left: -20px;
          }
          
          .scroll-indicator-right {
            right: -20px;
            left: auto;
          }
        }
        
        /* Touch-friendly sizes */
        @media (max-width: 768px) {
          .touch-target {
            min-height: 44px;
            min-width: 44px;
          }
        }
        
        /* Hide scrollbar but keep functionality */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Enhanced Space Background */}
      <div className="nebula" />
      <div className="cosmic-dust" />
      <div className="stars">
        {stars.map((star, i) => (
          <div
            key={`star-${i}`}
            className={`star star-${star.size}`}
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
        {shootingStars.map((star, i) => (
          <div
            key={`shooting-${i}`}
            className="shooting-star"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''} ${theme === 'dark' ? 'bg-[#0B0F1E]' : 'bg-white'
        }`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="font-display text-2xl font-bold gradient-text">Menu</span>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-lg transition-colors touch-target"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="space-y-4">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMobileMenu}
                className={`block py-3 px-4 rounded-lg font-body font-medium transition-colors touch-target ${theme === 'dark'
                  ? 'hover:bg-white/10'
                  : 'hover:bg-zinc-100'
                  }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="mt-8 pt-8 border-t border-white/10">
            <button
              onClick={() => {
                toggleTheme();
                closeMobileMenu();
              }}
              className={`w-full flex items-center justify-between py-3 px-4 rounded-lg transition-colors touch-target ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-zinc-100'
                }`}
            >
              <span className="font-body font-medium">Theme</span>
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? (theme === 'dark' ? 'glass' : 'glass-light shadow-lg') : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <a href="#" className="font-display animate-fadeInDown group">
              <span className={`text-xl sm:text-2xl font-bold transition-all duration-300 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'
                } group-hover:text-violet-500`}>
                Umesh Mali
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8 font-body font-medium text-sm">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`transition-all duration-300 hover:text-violet-400 animate-fadeInDown`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* Desktop Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`hidden md:block p-2 sm:p-3 rounded-lg transition-all duration-300 hover:scale-110 animate-fadeInDown touch-target ${theme === 'dark' ? 'glass' : 'glass-light'
                  }`}
                style={{ animationDelay: '0.25s' }}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className={`md:hidden p-2 sm:p-3 rounded-lg transition-all duration-300 touch-target ${theme === 'dark' ? 'glass' : 'glass-light'
                  }`}
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 p-3 sm:p-4 rounded-full bg-linear-to-br from-violet-600 to-purple-600 text-white shadow-lg z-50 transition-all duration-500 touch-target ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
          }`}
      >
        <ArrowUp size={20} className="sm:w-6 sm:h-6" />
      </button>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto">
            <div className="animate-fadeInUp">
              <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-body font-medium mb-6 sm:mb-8 ${theme === 'dark' ? 'glass' : 'glass-light'
                }`}>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Open to Opportunities
              </div>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 px-4">
                Building the Future,
                <br />
                <span className="gradient-text">One Line at a Time</span>
              </h1>

              <p className={`font-body text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8 px-4 ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'
                }`}>
                Full-stack developer crafting exceptional digital experiences.
                From AI-powered platforms to real-time systems I turn complex challenges into elegant solutions.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
                <a
                  href="#projects"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-violet-600 to-purple-600 text-white rounded-full font-body font-semibold transition-all duration-300 hover:scale-105 btn-glow text-sm sm:text-base touch-target"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full font-body font-semibold border-2 transition-all duration-300 hover:scale-105 text-sm sm:text-base touch-target ${theme === 'dark'
                    ? 'border-white/20 hover:border-violet-400'
                    : 'border-zinc-300 hover:border-violet-600'
                    }`}
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-3 sm:gap-4 animate-fadeInUp delay-200">
              <a
                href="https://github.com/Umeshhhmali"
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-2.5 sm:p-3 rounded-lg transition-all duration-300 hover:scale-110 border-2 touch-target ${theme === 'dark'
                  ? 'border-white/10 hover:border-purple-500 hover:bg-purple-500/10'
                  : 'border-zinc-200 hover:border-purple-600 hover:bg-purple-50'
                  }`}
              >
                <Github size={20} className="sm:w-6 sm:h-6 transition-transform duration-300 group-hover:rotate-12" />
              </a>
              <a
                href="https://www.linkedin.com/in/umeshhhhmali2811/"
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-2.5 sm:p-3 rounded-lg transition-all duration-300 hover:scale-110 border-2 touch-target ${theme === 'dark'
                  ? 'border-white/10 hover:border-blue-500 hover:bg-blue-500/10'
                  : 'border-zinc-200 hover:border-blue-600 hover:bg-blue-50'
                  }`}
              >
                <Linkedin size={20} className="sm:w-6 sm:h-6 transition-transform duration-300 group-hover:rotate-12" />
              </a>
              <a
                href="mailto:umeshmali341@gmail.com"
                className={`group p-2.5 sm:p-3 rounded-lg transition-all duration-300 hover:scale-110 border-2 touch-target ${theme === 'dark'
                  ? 'border-white/10 hover:border-violet-500 hover:bg-violet-500/10'
                  : 'border-zinc-200 hover:border-violet-600 hover:bg-violet-50'
                  }`}
              >
                <Mail size={20} className="sm:w-6 sm:h-6 transition-transform duration-300 group-hover:rotate-12" />
              </a>
            </div>
          </div>
        </div>

        {/* Curved bottom */}
        <div className="curve-divider">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,80 600,80 900,40 C1050,20 1100,0 1200,0 L1200,120 L0,120 Z"
              fill={theme === 'dark' ? '#1a1f35' : '#fafafa'} />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 ${theme === 'dark' ? 'bg-[#1a1f35]' : 'bg-zinc-100'
        }`}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 sm:mb-16 text-center animate-fadeInUp">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              Code with <span className="gradient-text">Intention</span>
            </h2>
            <div className="h-1 w-20 sm:w-24 bg-linear-to-r from-violet-600 to-purple-600 rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-4 sm:space-y-6 font-body text-base sm:text-lg leading-relaxed animate-fadeInUp delay-100">
              <p className={theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}>
                I don’t just write code, I engineer solutions. Every project I take on is an opportunity to solve a real-world problem, whether it’s building real-time systems, developing scalable applications, or creating tools that improve user experiences.
              </p>
              <p className={theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}>
                My journey from an MCA student to a software developer was never about following a predefined path. It was shaped by continuous building, learning from challenges, and understanding that great software balances clean architecture with intuitive design.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6 font-body text-base sm:text-lg leading-relaxed animate-fadeInUp delay-200">
              <p className={theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}>
                What sets me apart is my ability to execute. I’ve delivered full-stack applications from concept to production, integrated secure payment systems, optimized performance, and built applications with scalability in mind.
              </p>
              <p className={theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}>
                Today, I focus on developing products that people genuinely find valuable. By combining strong engineering principles with user-centric thinking, I work across modern technologies including the MERN stack, mobile development, and emerging AI solutions to deliver reliable and impactful software.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section id="skills" className={`py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 ${theme === 'dark' ? 'bg-[#0B0F1E]' : 'bg-white'
        }`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-20 text-center animate-fadeInUp">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              Technical <span className="gradient-text">Arsenal</span>
            </h2>
            <p className={`font-body text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-4 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
              A versatile toolkit built through countless hours of building, breaking, and rebuilding
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: 'Languages', items: skills.languages, icon: Code },
              { title: 'Frontend', items: skills.frontend, icon: Code },
              { title: 'Backend', items: skills.backend, icon: Code },
              { title: 'Databases', items: skills.databases, icon: Database },
              { title: 'Tools', items: skills.tools, icon: Wrench },
              { title: 'Cloud & DevOps', items: skills.cloud, icon: Cloud },
              { title: 'Concepts', items: skills.concepts, icon: Cloud }
            ].map((category, index) => (
              <div
                key={category.title}
                className={`p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:scale-105 animate-scaleIn ${theme === 'dark' ? 'glass' : 'glass-light'
                  } ${category.title === 'Cloud & DevOps' ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="p-2.5 sm:p-3 bg-linear-to-br from-violet-600 to-purple-600 rounded-lg">
                    <category.icon size={20} className="sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-body font-medium transition-all duration-300 hover:scale-105 ${theme === 'dark'
                        ? 'bg-white/10 text-zinc-200'
                        : 'bg-zinc-100 text-zinc-800'
                        }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 ${theme === 'dark' ? 'bg-[#1a1f35]' : 'bg-zinc-100'
        }`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-12 text-center animate-fadeInUp">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              Featured <span className="gradient-text">Work</span>
            </h2>
            <p className={`font-body text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-2 sm:mb-6 px-4 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
              Real projects. Real impact. Real code in production.
            </p>
            <p className={`font-body text-xs sm:text-sm ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-500'
              }`}>
              <span className="hidden sm:inline">✨ Hover to flip cards • </span>Scroll horizontally to explore
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-2 mb-3 sm:mb-8 px-2">
            {['all', 'fullstack', 'mobile', 'ai', 'frontend'].map((filter, index) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-body font-medium transition-all duration-300 hover:scale-105 animate-fadeIn text-xs sm:text-sm touch-target ${activeFilter === filter
                  ? 'bg-linear-to-r from-violet-600 to-purple-600 text-white'
                  : theme === 'dark'
                    ? 'glass text-zinc-300'
                    : 'glass-light text-zinc-700'
                  }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          <div className="relative">
            <div className={`scroll-container px-4 sm:px-6 md:px-12 ${filteredProjects.length === 1 ? 'center-single' : ''}`}>
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="project-card animate-scaleIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={(e) => {
                    // Mobile tap to flip
                    if (window.innerWidth < 1024) {
                      const card = e.currentTarget;
                      card.classList.toggle('flipped');
                    }
                  }}
                >
                  <div className="card-inner">
                    {/* Front of Card */}
                    <div className={`card-front ${theme === 'dark' ? 'glass' : 'glass-light'
                      }`}>
                      <div className="gradient-overlay" style={{
                        background: `linear-gradient(135deg, ${project.gradient.split(' ')[1]}, ${project.gradient.split(' ')[3]})`
                      }} />

                      <div className="relative z-10 h-full flex flex-col p-5 sm:p-6">
                        {/* Icon and Title */}
                        <div className="text-center mb-5 sm:mb-6">
                          <div className={`project-icon-wrapper inline-flex p-3 sm:p-4 rounded-2xl bg-linear-to-br ${project.gradient} mb-3 sm:mb-4`}>
                            <project.icon size={40} className="sm:w-12 sm:h-12 text-white" />
                          </div>
                          <h3 className="font-display text-xl sm:text-2xl font-bold mb-2 px-2">{project.title}</h3>
                          <p className={`font-body text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                            }`}>
                            {project.tagline}
                          </p>
                        </div>

                        {/* Description */}
                        <div className="flex-1 overflow-y-auto scrollbar-hide">
                          <p className={`font-body text-sm leading-relaxed mb-4 ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
                            }`}>
                            {project.description}
                          </p>

                          {/* Highlights */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.highlights.map((highlight, i) => (
                              <span
                                key={i}
                                className={`px-2.5 py-1 rounded-lg text-xs font-body font-medium ${theme === 'dark'
                                  ? 'bg-violet-500/20 text-violet-300'
                                  : 'bg-violet-100 text-violet-700'
                                  }`}
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="pt-4 border-t border-white/10 mt-auto">
                          <div className="flex flex-wrap gap-2">
                            {project.tech.slice(0, 4).map((tech, i) => (
                              <span
                                key={i}
                                className={`tech-badge px-2.5 py-1 rounded-md text-xs font-body font-semibold ${theme === 'dark'
                                  ? 'bg-white/10 text-zinc-300'
                                  : 'bg-zinc-200 text-zinc-700'
                                  }`}
                              >
                                {tech}
                              </span>
                            ))}
                            {project.tech.length > 4 && (
                              <span className={`px-2.5 py-1 rounded-md text-xs font-body font-semibold ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'
                                }`}>
                                +{project.tech.length - 4}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Tap/Hover Hint */}
                        <div className={`text-center mt-3 text-xs font-body ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'
                          }`}>
                          <span className="lg:hidden">Tap to see details →</span>
                          <span className="hidden lg:inline">Hover to see details →</span>
                        </div>
                      </div>
                    </div>

                    {/* Back of Card */}
                    <div className={`card-back ${theme === 'dark' ? 'glass' : 'glass-light'
                      } bg-linear-to-br ${project.gradient}`}>
                      <div className="h-full flex flex-col p-5 sm:p-6 text-white overflow-y-auto scrollbar-hide">
                        <div className="flex-1">
                          <h3 className="font-display text-xl sm:text-2xl font-bold mb-4">{project.title}</h3>

                          <div className="space-y-4 mb-5">
                            <div>
                              <h4 className="font-body font-bold text-xs uppercase tracking-wider mb-2 opacity-90">
                                Challenge
                              </h4>
                              <p className="font-body text-sm leading-relaxed opacity-95">
                                Traditional auction platforms lack real-time capabilities and proper security measures.
                              </p>
                            </div>

                            <div>
                              <h4 className="font-body font-bold text-xs uppercase tracking-wider mb-2 opacity-90">
                                Solution
                              </h4>
                              <p className="font-body text-sm leading-relaxed opacity-95">
                                Built with Socket.io for real-time updates, JWT authentication, and scalable architecture.
                              </p>
                            </div>
                          </div>

                          {/* Full Tech Stack */}
                          <div className="mb-4">
                            <h4 className="font-body font-bold text-xs uppercase tracking-wider mb-2 opacity-90">
                              Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-2.5 py-1 rounded-md text-xs font-body font-semibold bg-white/20 backdrop-blur-sm"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Links */}
                        <div className="flex gap-3 pt-4 border-t border-white/20 mt-auto">
                          <a
                            href={project.github}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/20 backdrop-blur-sm rounded-lg font-body font-semibold text-sm transition-all duration-300 hover:bg-white/30 touch-target"
                          >
                            <Github size={18} />
                            Code
                          </a>
                          {/* <a
                            href={project.live}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/20 backdrop-blur-sm rounded-lg font-body font-semibold text-sm transition-all duration-300 hover:bg-white/30 touch-target"
                          >
                            <ExternalLink size={18} />
                            Demo
                          </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Indicators - Hidden on mobile/tablet, shown only on desktop when there are multiple cards */}
            {filteredProjects.length > 1 && (
              <>
                <button
                  className="scroll-indicator scroll-indicator-left"
                  onClick={() => {
                    const container = document.querySelector('.scroll-container');
                    if (container) {
                      container.scrollBy({ left: -400, behavior: 'smooth' });
                    }
                  }}
                  aria-label="Scroll left"
                >
                  <ChevronRight size={24} className="text-white rotate-180" />
                </button>
                <button
                  className="scroll-indicator scroll-indicator-right"
                  onClick={() => {
                    const container = document.querySelector('.scroll-container');
                    if (container) {
                      container.scrollBy({ left: 400, behavior: 'smooth' });
                    }
                  }}
                  aria-label="Scroll right"
                >
                  <ChevronRight size={24} className="text-white" />
                </button>
              </>
            )}
          </div>

          {/* Mobile Scroll Hint */}
          {filteredProjects.length > 1 && (
            <div className={`text-center mt-6 sm:mt-8 font-body text-xs sm:text-sm ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'
              }`}>
              ← Swipe to explore more projects →
            </div>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden ${theme === 'dark' ? 'bg-[#0B0F1E]' : 'bg-white'
        }`}>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-12 sm:mb-16 text-center animate-fadeInUp">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Journey of <span className="gradient-text">Growth</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-violet-500 via-purple-500 to-transparent" />

            {/* End indicator */}
            <div className="relative mb-6 sm:mb-8 pl-12 sm:pl-16 lg:pl-20">
              <div className={`absolute left-[0.9rem] sm:left-[1.15rem] lg:left-[1.60rem] top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-linear-to-br from-violet-600 to-purple-600 flex items-center justify-center ${theme === 'dark' ? 'border-2 border-[#0B0F1E]' : 'border-2 border-white'
                }`}>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full" />
              </div>
              <p className={`font-body text-xs sm:text-sm font-medium ${theme === 'dark' ? 'text-violet-400' : 'text-violet-600'
                }`}>
                Continuing the journey...
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-12 sm:pl-16 lg:pl-20 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-[0.9rem] sm:left-[1.15rem] lg:left-[1.60rem] top-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-linear-to-br from-violet-500 to-purple-600 border-2 ${theme === 'dark' ? 'border-[#0B0F1E]' : 'border-white'
                    } shadow-lg z-10`} />

                  {/* Content card */}
                  <div className={`group p-4 sm:p-6 rounded-xl transition-all duration-300 hover:scale-[1.01] ${theme === 'dark' ? 'glass hover:bg-white/5' : 'glass-light hover:shadow-md'
                    }`}>
                    <div className="flex flex-col gap-3 mb-3 sm:mb-4">
                      <div>
                        <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-bold group-hover:text-violet-500 transition-colors mb-1">
                          {exp.role}
                        </h3>
                        <p className={`font-body text-sm sm:text-base font-semibold ${theme === 'dark' ? 'text-violet-400' : 'text-violet-600'
                          }`}>
                          {exp.company}
                        </p>
                      </div>
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-body font-semibold whitespace-nowrap bg-linear-to-r from-violet-600 to-purple-600 text-white self-start`}>
                        {exp.period}
                      </span>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className={`flex items-start gap-2 font-body text-xs sm:text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                            }`}
                        >
                          <ChevronRight size={14} className="sm:w-4 sm:h-4 text-violet-500 mt-0.5 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className={`py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 ${theme === 'dark' ? 'bg-[#1a1f35]' : 'bg-zinc-100'
        }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { number: '15+', label: 'Production Apps' },
              { number: '5+', label: 'Tech Stacks Mastered' },
              { number: '100%', label: 'Commitment to Quality' },
              { number: '∞', label: 'Learning Mindset' }
            ].map((achievement, index) => (
              <div
                key={index}
                className={`p-6 sm:p-8 rounded-2xl text-center transition-all duration-300 hover:scale-105 animate-scaleIn ${theme === 'dark' ? 'glass' : 'glass-light'
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-2">
                  {achievement.number}
                </div>
                <p className={`font-body text-xs sm:text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                  {achievement.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={`relative py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden ${theme === 'dark' ? 'bg-[#0B0F1E]' : 'bg-linear-to-b from-white to-zinc-50'
        }`}>
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-1/4 -left-32 w-64 h-64 rounded-full blur-3xl opacity-20 ${theme === 'dark' ? 'bg-violet-600' : 'bg-violet-300'
            }`}></div>
          <div className={`absolute bottom-1/4 -right-32 w-64 h-64 rounded-full blur-3xl opacity-20 ${theme === 'dark' ? 'bg-purple-600' : 'bg-purple-300'
            }`}></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fadeInUp delay-100">
              Let's Create Something{' '}
              <span className="gradient-text inline-block">Amazing</span>
            </h2>

            <p className={`font-body text-lg sm:text-xl lg:text-2xl mb-4 max-w-3xl mx-auto animate-fadeInUp delay-200 leading-relaxed ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
              }`}>
              Got a project in mind? Let's discuss how we can work together.
            </p>

            <p className={`font-body text-base sm:text-lg max-w-2xl mx-auto animate-fadeInUp delay-300 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
              I'm always interested in hearing about new projects, creative ideas,
              and opportunities to bring visions to life.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 animate-fadeInUp delay-400">
            {/* Email Card */}

            <a href="mailto:umeshmali341@gmail.com"
              className={`group relative p-6 rounded-2xl transition-all duration-500 hover:scale-[1.02] ${theme === 'dark'
                ? 'bg-linear-to-br from-violet-600/10 to-purple-600/10 border border-white/10 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/20'
                : 'bg-white border border-zinc-200 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100'
                }`}
            >
              <div className={`inline-flex p-3 rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110 ${theme === 'dark' ? 'bg-violet-500/20' : 'bg-violet-100'
                }`}>
                <Mail className={`w-6 h-6 ${theme === 'dark' ? 'text-violet-400' : 'text-violet-600'}`} />
              </div>
              <h3 className={`font-display text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'
                }`}>
                Email
              </h3>
              <p className={`text-sm mb-3 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                }`}>
                Drop me a line anytime
              </p>
              <span className="text-sm font-medium gradient-text">
                umeshmali341@gmail.com →
              </span>
            </a>

            {/* LinkedIn Card */}

            <a href="https://www.linkedin.com/in/umeshhhhmali2811/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-6 rounded-2xl transition-all duration-500 hover:scale-[1.02] ${theme === 'dark'
                ? 'bg-linear-to-br from-blue-600/10 to-blue-500/10 border border-white/10 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20'
                : 'bg-white border border-zinc-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100'
                }`}
            >
              <div className={`inline-flex p-3 rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-100'
                }`}>
                <Linkedin className={`w-6 h-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <h3 className={`font-display text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'
                }`}>
                LinkedIn
              </h3>
              <p className={`text-sm mb-3 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                }`}>
                Let's connect professionally
              </p>
              <span className={`text-sm font-medium ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                }`}>
                View Profile →
              </span>
            </a>

            {/* GitHub Card */}

            <a href="https://github.com/Umeshhhmali"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-6 rounded-2xl transition-all duration-500 hover:scale-[1.02] sm:col-span-2 lg:col-span-1 ${theme === 'dark'
                ? 'bg-linear-to-br from-purple-600/10 to-pink-600/10 border border-white/10 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20'
                : 'bg-white border border-zinc-200 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100'
                }`}
            >
              <div className={`inline-flex p-3 rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-100'
                }`}>
                <Github className={`w-6 h-6 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
              </div>
              <h3 className={`font-display text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'
                }`}>
                GitHub
              </h3>
              <p className={`text-sm mb-3 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                }`}>
                Check out my work
              </p>
              <span className={`text-sm font-medium ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                }`}>
                View Repositories →
              </span>
            </a>
          </div>

          {/* CTA Button */}
          <div className="text-center animate-fadeInUp delay-500">

            <a href="mailto:umeshmali341@gmail.com"
              className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-linear-to-r from-violet-600 to-purple-600 text-white rounded-full font-body font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/50 btn-glow"
            >
              <span>Start a Conversation</span>
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <p className={`mt-6 text-sm ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-500'
              }`}>
              Usually responds within 24 hours
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`relative overflow-hidden ${theme === 'dark' ? 'bg-[#0B0F1E]' : 'bg-white'
        }`}>
        {/* Gradient separator line */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-violet-500 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16">
          {/* Main Footer Content */}
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-12 mb-8 sm:mb-12">
            {/* Brand Column - Full width on mobile */}
            <div className="space-y-4 lg:col-span-1">
              <a href="#" className="font-display group inline-block">
                <span className={`text-2xl font-bold transition-all duration-300 ${theme === 'dark'
                  ? 'text-white group-hover:text-violet-400'
                  : 'text-zinc-900 group-hover:text-violet-600'
                  }`}>
                  Umesh Mali
                </span>
              </a>
              <p className={`text-sm leading-relaxed max-w-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                }`}>
                Full-stack developer crafting exceptional digital experiences with modern technologies.
              </p>
              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                <a
                  href="https://github.com/Umeshhhmali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-3 rounded-lg transition-all duration-300 hover:scale-110 border touch-target ${theme === 'dark'
                    ? 'border-white/10 hover:border-purple-500 hover:bg-purple-500/10'
                    : 'border-zinc-200 hover:border-purple-600 hover:bg-purple-50'
                    }`}
                  aria-label="GitHub"
                >
                  <Github size={20} className="transition-transform duration-300 group-hover:rotate-12" />
                </a>
                <a
                  href="https://www.linkedin.com/in/umeshhhhmali2811/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-3 rounded-lg transition-all duration-300 hover:scale-110 border touch-target ${theme === 'dark'
                    ? 'border-white/10 hover:border-blue-500 hover:bg-blue-500/10'
                    : 'border-zinc-200 hover:border-blue-600 hover:bg-blue-50'
                    }`}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="transition-transform duration-300 group-hover:rotate-12" />
                </a>
                <a
                  href="mailto:umeshmali341@gmail.com"
                  className={`group p-3 rounded-lg transition-all duration-300 hover:scale-110 border touch-target ${theme === 'dark'
                    ? 'border-white/10 hover:border-violet-500 hover:bg-violet-500/10'
                    : 'border-zinc-200 hover:border-violet-600 hover:bg-violet-50'
                    }`}
                  aria-label="Email"
                >
                  <Mail size={20} className="transition-transform duration-300 group-hover:rotate-12" />
                </a>
              </div>
            </div>

            {/* Quick Links - Compact on mobile */}
            <div className="lg:col-span-1">
              <h3 className={`font-display text-sm font-bold uppercase tracking-wider mb-4 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'
                }`}>
                Quick Links
              </h3>
              <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className={`text-sm transition-colors duration-300 hover:text-violet-500 flex items-center gap-2 group py-1 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                        }`}
                    >
                      <ChevronRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack - Compact on mobile */}
            <div className="lg:col-span-1">
              <h3 className={`font-display text-sm font-bold uppercase tracking-wider mb-4 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'
                }`}>
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-2">
                {['Flutter', 'React Native', 'SQL', 'React.js', 'MongoDB'].map((tech) => (
                  <span
                    key={tech}
                    className={`text-sm px-3 py-1 rounded-lg lg:px-0 lg:py-1 ${theme === 'dark'
                      ? 'bg-white/5 lg:bg-transparent text-zinc-400'
                      : 'bg-zinc-100 lg:bg-transparent text-zinc-600'
                      }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h3 className={`font-display text-sm font-bold uppercase tracking-wider mb-4 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'
                }`}>
                Get In Touch
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:umeshmali341@gmail.com"
                  className={`text-sm transition-colors duration-300 hover:text-violet-500 flex items-start gap-2 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                    }`}
                >
                  <Mail size={16} className="shrink-0 mt-0.5" />
                  <span className="break-all">umeshmali341@gmail.com</span>
                </a>
                <p className={`text-sm flex items-start gap-2 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                  <span className="shrink-0">📍</span>
                  <span>Nashik, Maharashtra, India</span>
                </p>
                <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold ${theme === 'dark' ? 'bg-green-500/10 text-green-400' : 'bg-green-50 text-green-600'
                  }`}>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Available for work
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={`pt-6 border-t ${theme === 'dark' ? 'border-white/10' : 'border-zinc-200'
            }`}>
            <div className="flex flex-col gap-3 text-center lg:flex-row lg:justify-between lg:items-center lg:text-left">
              <p className={`text-sm ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-600'
                }`}>
                © {new Date().getFullYear()} Umesh Mali. Crafted with passion ✨
              </p>
              <div className="flex justify-center items-center gap-4">
                <a
                  href="#"
                  className={`text-sm transition-colors duration-300 hover:text-violet-500 ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-600'
                    }`}
                >
                  Privacy Policy
                </a>
                <span className={theme === 'dark' ? 'text-zinc-700' : 'text-zinc-300'}>•</span>
                <a
                  href="#"
                  className={`text-sm transition-colors duration-300 hover:text-violet-500 ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-600'
                    }`}
                >
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative gradient */}
        <div className={`absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-violet-500/20 to-transparent`} />
      </footer>
    </div>
  );
}