# Mobile Heaven

##[Live Site](https://phone-heaven.web.app/)

A full-stack MERN marketplace application for buying and selling used mobile phones. This repository contains the client-side code.

## Features

- 🔐 User Authentication with Firebase
- 👥 Role-based Access Control (Admin, Seller, Buyer)
- 📱 Browse and Search Used Phones
- 💰 Secure Payment Integration with Stripe
- 🎨 Responsive Design with Tailwind CSS & DaisyUI
- 📝 Product Management for Sellers
- 🛡️ Protected Routes
- 📊 Dashboard for Different User Roles

## Tech Stack

- React 18
- React Router DOM v6
- Firebase Authentication
- Tailwind CSS
- DaisyUI Components
- TanStack Query (React Query)
- Stripe Payment Integration
- Axios
- React Hook Form
- React Hot Toast
- React Helmet

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account
- Stripe account
- ImgBB account for image hosting

### Installation

1. Clone the repository
```bash
git clone https://github.com/rakibul58/phone-heaven-client.git
cd mobile-heaven-client
```

2. Install dependencies
```bash
npm install
```

3. Environment Variables

Create a `.env` file in the root directory:
```env
REACT_APP_apiKey=
REACT_APP_authDomain=
REACT_APP_projectId=
REACT_APP_storageBucket=
REACT_APP_messagingSenderId=
REACT_APP_appId=
REACT_APP_imgbb_key=
REACT_APP_STRIPE_PK=
```

4. Start the development server
```bash
npm start
```

## Project Structure

```
src/
├── components/          # Reusable components
├── contexts/           # Context providers
├── hooks/              # Custom hooks
├── layouts/            # Page layouts
├── pages/             # Page components
├── routes/            # Route configurations
└── firebase/          # Firebase configuration
```

## Available Scripts

```bash
# Start the development server
npm start

# Build for production
npm start

# Run tests
npm test

# Eject from Create React App
npm run eject
```

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Deployment

The application can be deployed on Netlify or Vercel:

1. Connect your GitHub repository
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
3. Set up environment variables in the deployment platform
4. Deploy!

## Related Projects

- [Mobile Heaven Server](https://github.com/rakibul58/phone-heaven-server) - Backend API repository

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
