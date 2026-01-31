# KaziBuddy 🤝

> Connecting employers with workers in Kenya's informal settlements - Because everyone deserves dignified work opportunities.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 📖 About KaziBuddy

**KaziBuddy** (Swahili: *kazi* = work, *buddy* = friend) is a social impact platform designed to bridge the employment gap for workers in Kenya's informal settlements like Kibera, Mathare, and Mukuru. We connect hardworking individuals—cleaners, watchmen, house helps, gardeners, and more—with employers seeking reliable services.

### 🎯 Mission
To provide dignified employment opportunities to undereducated but skilled workers in Kenya's slums through an accessible, mobile-friendly platform that requires minimal digital literacy.

### 💡 The Problem We're Solving
- **60%+** of Nairobi's population lives in informal settlements
- Limited access to formal job markets for uneducated workers
- Lack of trust and verification systems for casual employment
- Employers struggle to find reliable workers
- Workers lose opportunities due to lack of digital presence

### ✨ Our Solution
A simple, intuitive platform that:
- 📱 Works seamlessly on basic smartphones
- 🗣️ Supports multiple languages (English, Swahili, Sheng)
- ✅ Verifies workers through community references
- 💰 Ensures fair wages and transparent hiring
- 🔒 Builds trust through reviews and ratings

---

## 🚀 Features

### For Workers
- ✅ **Easy Registration** - Simple profile creation with minimal requirements
- 📸 **Photo Verification** - Build trust with profile photos and ID verification
- 💼 **Skills Showcase** - List your skills (cleaning, security, cooking, etc.)
- 📞 **Direct Contact** - Employers can reach you directly
- ⭐ **Reputation System** - Build your profile through good work
- 📍 **Location-Based Jobs** - Find opportunities near you
- 🔔 **SMS Notifications** - Get job alerts even without internet
- 🎓 **Skill Training Resources** - Access to free training materials

### For Employers
- 🔍 **Easy Search** - Find workers by skill, location, and availability
- ✅ **Verified Profiles** - All workers verified through community references
- 💬 **Direct Messaging** - Communicate securely with candidates
- ⭐ **Reviews & Ratings** - Read experiences from other employers
- 📅 **Booking System** - Schedule services in advance
- 💰 **Transparent Pricing** - Fair market rates displayed
- 🔒 **Safety Features** - Report and block functionality

### Platform Features
- 🌐 **Multi-language Support** - English, Swahili, Sheng
- 📱 **Mobile-First Design** - Optimized for low-end devices
- 🎨 **Accessible UI** - Large buttons, clear icons, minimal text
- 🔐 **Secure Authentication** - JWT-based login system
- 📊 **Analytics Dashboard** - Track job applications and success rates
- 🔄 **Offline Support** - Progressive Web App (PWA) capabilities

---

## 🏗️ Tech Stack

### Frontend (This Repository)
```
Next.js 14+        - React framework with App Router
TypeScript         - Type-safe development
Tailwind CSS       - Utility-first styling
shadcn/ui          - Beautiful, accessible components
React Hook Form    - Form management
Zod                - Schema validation
Axios              - API communication
React Query        - Server state management
Zustand            - Client state management
NextAuth.js        - Authentication
Framer Motion      - Smooth animations
```

### Backend
```
Django 4.2+        - Python web framework
Django REST        - API framework
PostgreSQL         - Primary database
Redis              - Caching & sessions
Celery             - Background tasks
AWS S3             - File storage
Twilio             - SMS notifications
Render             - Hosting platform
```

### Infrastructure
- **Frontend**: Vercel (Production & Preview)
- **Backend**: Render (Web Service)
- **Database**: Render PostgreSQL
- **CDN**: Cloudflare
- **Monitoring**: Sentry

---

## 🎯 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git
- A code editor (VS Code recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Tafakari-Ltd/kazibuddy.git
   cd kazibuddy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # API Configuration
   NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com/api
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   
   # Authentication
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here
   
   # Feature Flags
   NEXT_PUBLIC_ENABLE_SMS=true
   NEXT_PUBLIC_ENABLE_PAYMENTS=false
   
   # Analytics (Optional)
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   
   # Sentry (Optional)
   NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)


## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check

# Code Quality
npm run format       # Format code with Prettier
npm run test         # Run tests (when implemented)
npm run test:watch   # Run tests in watch mode
```

---

## 🌍 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

2. **Configure environment variables**
   - Add all variables from `.env.local`
   - Ensure `NEXT_PUBLIC_API_URL` points to your production backend

3. **Deploy**
   - Push to `main` branch for automatic deployment
   - Use `git push` to trigger builds

### Manual Deployment

```bash
# Build the application
npm run build

# The output will be in the .next folder
# Upload to your hosting provider
```

---

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_API_URL` | Backend API endpoint | ✅ Yes |
| `NEXT_PUBLIC_SITE_URL` | Frontend URL | ✅ Yes |
| `NEXTAUTH_URL` | NextAuth callback URL | ✅ Yes |
| `NEXTAUTH_SECRET` | NextAuth encryption key | ✅ Yes |
| `NEXT_PUBLIC_ENABLE_SMS` | Enable SMS notifications | ❌ No |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID | ❌ No |
| `NEXT_PUBLIC_SENTRY_DSN` | Sentry error tracking | ❌ No |

---

## 🤝 Contributing

We welcome contributions from developers, designers, and anyone passionate about social impact! 

### How to Contribute

1. **Fork the repository**
   ```bash
   https://github.com/Tafakari-Ltd/kazibuddy.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Write clean, documented code
   - Follow our coding standards
   - Add tests if applicable

4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```

5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Describe your changes
   - Link any related issues
   - Wait for review

### Coding Standards
- Use TypeScript for all new code
- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly

### Priority Areas
- 🌐 Swahili and Sheng translations
- ♿ Accessibility improvements
- 📱 Mobile optimization
- 🧪 Unit and integration tests
- 📚 Documentation

---

## 🗺️ Roadmap

### Phase 1: MVP (Current)
- [x] Worker registration and profiles
- [x] Employer registration and search
- [x] Basic messaging system
- [x] Review and rating system
- [ ] SMS notifications
- [ ] Payment integration (M-Pesa)

### Phase 2: Growth
- [ ] Advanced search filters
- [ ] Video profiles for workers
- [ ] In-app chat with translation
- [ ] Background checks integration
- [ ] Insurance partnerships
- [ ] Training program platform

### Phase 3: Scale
- [ ] Mobile apps (iOS & Android)
- [ ] Expand to other cities
- [ ] AI-powered job matching
- [ ] Worker cooperatives support
- [ ] Microfinance integration
- [ ] API for third-party integrations

---

## 🐛 Known Issues

- SMS notifications pending Twilio integration
- Payment gateway (M-Pesa) in development
- Some translations incomplete
- Offline mode needs improvement

See our [Issues](https://github.com/Tafakari-Ltd/kazibuddy/issues) page for a complete list.

---

## 📱 Screenshots

> *Coming soon - Add screenshots of key pages*

---

## 📊 Impact Metrics (Target)

| Metric | Target (Year 1) |
|--------|----------------|
| Workers Registered | 10,000+ |
| Jobs Created | 5,000+ |
| Employers Active | 2,000+ |
| Average Wage Increase | 30%+ |
| Communities Served | 5+ |

---

## 🙏 Acknowledgments

- **Tafakari Ltd** - Project initiators and maintainers
- **Kibera Community** - Feedback and testing partners
- **Open Source Community** - Amazing tools and libraries
- **Contributors** - Everyone who has helped build this

---

## 📞 Contact & Support

- **Website**: [www.kazibuddy.co.ke](https://www.kazibuddy.co.ke) *(Coming soon)*
- **Email**: support@tafakari.co.ke
- **Twitter**: [@KaziBuddyKE](https://twitter.com/kazibuddyke) *(Example)*
- **Report Issues**: [GitHub Issues](https://github.com/Tafakari-Ltd/kazibuddy/issues)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 💖 Support the Project

KaziBuddy is a social impact project. If you'd like to support our mission:

- ⭐ Star this repository
- 🐛 Report bugs and issues
- 💡 Suggest new features
- 🤝 Contribute code or documentation
- 📢 Share with your network
- 💰 Sponsor development (contact us)

---

<div align="center">

**Made with ❤️ in Nairobi, Kenya**

*Because everyone deserves a fair chance at dignified work*

[Report Bug](https://github.com/Tafakari-Ltd/kazibuddy/issues) · [Request Feature](https://github.com/Tafakari-Ltd/kazibuddy/issues) · [Contribute](https://github.com/Tafakari-Ltd/kazibuddy/blob/main/CONTRIBUTING.md)

</div>