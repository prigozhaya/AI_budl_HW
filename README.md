# User Management Application

A modern, responsive React application for managing user data with a professional interface, built with TypeScript and CSS Modules.

## 🚀 Features

### Core Functionality
- **User List Display**: Clean table layout with sortable columns
- **User Detail Modal**: Comprehensive user information with smooth animations
- **User Management**: Delete users with visual feedback
- **Responsive Design**: Optimized for all screen sizes
- **Professional UI**: Modern design with hover effects and transitions

### Technical Features
- **TypeScript**: Full type safety with custom interfaces
- **CSS Modules**: Scoped styling for component isolation
- **Animations**: Smooth modal transitions and user interactions
- **API Integration**: Fetches data from JSONPlaceholder API
- **Testing**: Comprehensive unit and integration tests

## 🛠️ Technology Stack

- **Framework**: React
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Testing**: Vitest + React Testing Library
- **API**: JSONPlaceholder (https://jsonplaceholder.typicode.com)

## 📦 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd user-management-app
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm start
   \`\`\`


## 🧪 Testing

### Run Tests
\`\`\`bash
# Run all tests
npm run test

# Run tests with coverage
npm run test:coverage
\`\`\`

### Test Coverage
The application includes comprehensive tests for:
- Component rendering and functionality
- User interactions (clicks, modal operations)
- API integration and error handling
- Responsive behavior

## 🎨 UI/UX Features

### Visual Feedback
- **Hover Effects**: Subtle animations on interactive elements
- **Loading States**: Spinner animation during data fetching
- **Button Feedback**: Scale animations on click
- **Row Highlighting**: Visual feedback when hovering over table rows

### Animations
- **Modal Entrance**: Smooth scale and fade-in animation
- **Modal Exit**: Graceful fade-out with backdrop blur
- **Button Interactions**: Scale feedback on press
- **Table Interactions**: Subtle lift effect on row hover

## 🔧 API Integration

The application integrates with JSONPlaceholder API:
- **Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **Method**: GET
- **Response**: Array of user objects with complete user information

## 🎯 Key Features Explained

### User Table
- **Columns**: Name/Email, Address, Phone, Website, Company, Action
- **Interactions**: Click row to view details, click X to delete
- **Responsive**: Horizontal scroll on mobile devices
- **Visual Feedback**: Hover effects and smooth transitions

### User Modal
- **Sections**: Header with name/email, Address, Contact, Company
- **Features**: Map integration, email/website links, smooth animations
- **Responsive**: Fullscreen on mobile, centered on desktop
- **Accessibility**: Proper focus management and keyboard navigation

### Delete Functionality
- **Client-side**: Removes users from local state
- **Visual Feedback**: Confirmation through button animation
- **UX**: Prevents accidental deletion with hover confirmation

## 📝 Development Guidelines

### Code Style
- Use TypeScript for all components
- Follow React hooks best practices
- Implement proper error boundaries
- Use CSS Modules for styling


## 🙏 Acknowledgments

- [JSONPlaceholder](https://jsonplaceholder.typicode.com) for providing the API
- [Vitest](https://vitest.dev) for the testing framework
- [React Testing Library](https://testing-library.com) for testing utilities

---

**Built with ❤️ using React and TypeScript**
