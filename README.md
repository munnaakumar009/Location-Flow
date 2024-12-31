# Location Flow

A modern, user-friendly location and address management system built with React and Google Maps API. This application allows users to easily manage delivery locations with a smooth, intuitive interface.

## 🌟 Features

- **Location Permission Handling**
  - Smart geolocation permission requests
  - Fallback to manual address entry
  - Clear user feedback and error handling

- **Interactive Map Integration**
  - Google Maps integration
  - Draggable location pin
  - Current location detection
  - Address autocomplete

- **Address Management**
  - Save addresses with custom labels (Home, Office, Other)
  - Add detailed address information
  - Favorite frequently used locations
  - Edit and delete saved addresses

- **Responsive Design**
  - Mobile-first approach
  - Smooth animations
  - Intuitive user interface

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Google Maps API key

### Environment Setup

1. Clone the repository
2. Create a `.env` file in the root directory
3. Add your Google Maps API key:
   ```
   VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
   ```

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 🛠️ Built With

- **React** - UI Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Google Maps API** - Location Services
- **Zustand** - State Management
- **Vite** - Build Tool

## 📱 Core Components

- `LocationFlow` - Main component orchestrating the location flow
- `LocationPermissionModal` - Handles location permission requests
- `Map` - Interactive Google Maps component
- `AddressForm` - Form for detailed address entry
- `ErrorMessage` - User-friendly error display

## 🔧 Configuration

The application can be configured through:
- `src/config/maps.ts` - Google Maps settings
- `tailwind.config.js` - Styling customization
- Environment variables - API keys and endpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Maps Platform
- React Community
- Tailwind CSS Team
