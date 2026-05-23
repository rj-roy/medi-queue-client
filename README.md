# Medi Queue - Tutor Booking & Management Platform

A modern, full-stack tutor booking and management platform built with Next.js, React, and MongoDB. Connect with qualified tutors, manage bookings, and streamline the tutoring experience.

**Live Demo:** [https://medi-queue-by-rj.vercel.app/](https://medi-queue-by-rj.vercel.app/)

---

## 🎯 Features

### Core Functionality
- 🔐 **Secure Authentication**
  - Email/password authentication
  - Google OAuth integration
  - Session management with better-auth

- 👨‍🏫 **Tutor Management**
  - Create and manage tutor profiles
  - Edit tutor details and availability
  - Delete tutor listings
  - Showcase expertise, experience, and hourly rates

- 📅 **Booking System**
  - Browse available tutors
  - Book tutor sessions
  - Manage booked sessions
  - Real-time availability tracking

- 🎓 **User Features**
  - View all available tutors
  - Filter by subject and preferences
  - Track booked sessions
  - Manage personal tutor listings

- 🌐 **Responsive Design**
  - Mobile-first approach
  - Accessible UI components
  - Dark/light theme toggle
  - Fast and optimized performance

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 16.2.6
- **UI Library:** React 19.2.4
- **Styling:** Tailwind CSS 4, PostCSS
- **Form Management:** React Hook Form 7.76.0
- **Icons:** Lucide React 1.16.0
- **Component Library:** HeroUI 3.0.5
- **Notifications:** React Toastify 11.1.0

### Backend
- **Runtime:** Node.js
- **Database:** MongoDB
- **Authentication:** Better Auth 1.6.11
- **MongoDB Adapter:** @better-auth/mongo-adapter 1.6.11

### Development Tools
- **Linting:** ESLint 9
- **Build Tool:** Next.js Turbopack
- **Code Compilation:** Babel React Compiler

---

## 📋 Prerequisites

- Node.js 18+ and npm/yarn
- MongoDB database (local or Atlas)
- Google OAuth credentials (optional, for Google sign-in)

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/rj-roy/medi-queue-client.git
cd medi-queue
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# Database
AUTH_DB_URI=mongodb://localhost:27017/medi-queue
DB_NAME=medi-queue

# Backend API
NEXT_PUBLIC_SERVER_URL=http://localhost:5000

# Google OAuth (Optional)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Authentication
BETTER_AUTH_URL=http://localhost:3000
```

### 4. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### 5. Build for Production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
medi-queue/
├── src/
│   ├── app/
│   │   ├── (auth)/              # Authentication pages (signin, signup)
│   │   ├── (main)/              # Main application pages
│   │   │   ├── add-tutor/       # Add new tutor page
│   │   │   ├── my-tutors/       # Manage user's tutors
│   │   │   ├── my-booked-tutors/# User's booked sessions
│   │   │   ├── tutors/          # Browse all tutors
│   │   │   └── page.jsx         # Home page
│   │   ├── api/                 # API routes
│   │   ├── components/          # React components
│   │   │   ├── home/            # Home page components
│   │   │   ├── tutors/          # Tutor-related components
│   │   │   ├── shared/          # Shared components (NavBar, Footer)
│   │   │   ├── ui/              # Reusable UI components
│   │   │   └── hooks/           # Custom React hooks
│   │   ├── hooks/               # Utility hooks
│   │   └── globals.css          # Global styles
│   ├── lib/
│   │   ├── auth.js              # Better Auth configuration
│   │   ├── auth-client.js       # Client-side auth utilities
│   │   ├── actions.js           # Server actions
│   │   ├── getData.js           # API data fetching
│   │   └── imgLoader.js         # Image loading utilities
│   ├── assets/                  # Static assets
│   └── proxy.js                 # Authentication proxy middleware
├── public/                      # Static files
├── package.json                 # Dependencies & scripts
├── next.config.mjs              # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
└── postcss.config.mjs           # PostCSS configuration
```

---

## 🚀 Usage

### For Students/Learners
1. **Browse Tutors:** Visit the "Tutors" page to explore available tutors
2. **View Details:** Click on a tutor card to see full profile and availability
3. **Book Session:** Select a time slot and book a session
4. **Manage Bookings:** Track your booked sessions in "My Booked Sessions"

### For Tutors
1. **Sign Up:** Create an account or sign in with Google
2. **Add Profile:** Go to "Add Tutor" and fill in your details
3. **Manage Tutors:** Edit or delete your profiles from "My Tutors"
4. **Track Bookings:** View who has booked your sessions

---

## 🔧 Key Features Implementation

### Authentication Flow
- Secure authentication using Better Auth with MongoDB adapter
- Email/password and Google OAuth support
- Session management across the application

### Data Fetching
- Server-side data fetching with `getAllTuros()` and `getBookings()`
- Server actions for mutations (add, update, delete operations)
- Automatic cache revalidation on data changes

### Form Handling
- React Hook Form for efficient form state management
- Real-time validation and error handling
- Support for complex tutor detail forms with time slots

### Responsive Design
- Mobile-first Tailwind CSS styling
- HeroUI components for consistent design
- Dark/light theme toggle for better user experience

---

## 📝 Environment Setup for Deployment

### Vercel Deployment
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel settings:
   - `AUTH_DB_URI`
   - `DB_NAME`
   - `NEXT_PUBLIC_SERVER_URL`
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
   - `BETTER_AUTH_URL` (set to your deployed domain)

4. Deploy automatically on push to main branch

---

## 🐛 Troubleshooting

### Build Issues
- Ensure all environment variables are set correctly
- Verify MongoDB connection string
- Clear `.next` folder and rebuild if needed

### Authentication Not Working
- Check `BETTER_AUTH_URL` matches your domain
- Verify Google OAuth credentials are valid
- Ensure MongoDB is running and accessible

### API Connection Errors
- Verify `NEXT_PUBLIC_SERVER_URL` points to correct backend
- Check backend server is running
- Review CORS configuration if applicable

---

## 📦 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🤝 Contributing

Contributions are welcome! Here's how to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

**RJ Roy**
- GitHub: [@rj-roy](https://github.com/rj-roy)
- Live Demo: [https://medi-queue-by-rj.vercel.app/](https://medi-queue-by-rj.vercel.app/)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) - React framework
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Better Auth](https://www.better-auth.com) - Authentication library
- [HeroUI](https://heroui.com) - Component library
- [MongoDB](https://www.mongodb.com) - Database

---

**Made with ❤️ by RJ Roy**
