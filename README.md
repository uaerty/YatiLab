
# Yati R&D Lab Website

A responsive, modern single-page application (SPA) for Yati R&D Lab, built with React and Bootstrap.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Single Page Application**: Smooth navigation with no page reloads
- **Bootstrap 5**: Professional UI components and responsive grid system
- **Interactive Components**: 
  - Dynamic navigation header with smooth scrolling
  - Hero section with call-to-action
  - About us section with features
  - Research areas showcase with 6 research domains
  - Team member profiles
  - Contact form with validation
  - Professional footer

## 📋 Project Structure

```
yati-rnd-lab/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── Hero.js
│   │   ├── Hero.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Research.js
│   │   ├── Research.css
│   │   ├── Team.js
│   │   ├── Team.css
│   │   ├── Contact.js
│   │   ├── Contact.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── .gitignore
└── README.md
```

## 🛠️ Installation

1. **Prerequisites**: Ensure you have Node.js (v14+) and npm installed

2. **Navigate to project directory**:
   ```bash
   cd yati-rnd-lab
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

## 🎯 Running the Application

### Development Server
Start the development server with hot-reload:
```bash
npm start
```
The application will open at `http://localhost:3000`

### Build for Production
Create an optimized production build:
```bash
npm run build
```

### Run Tests
Execute the test suite:
```bash
npm test
```

## 🐳 Docker Support 
You can also build and run the application using Docker. 
### Build Docker Image From the project root directory: 
```bash
docker build -t yatis-react-app .
```
### Run Docker container 
```bash
docker run -d -p 3000:80 --name react-app yatis-react-app
```
### Stop and Remove container 
```bash
docker stop react-app
docker rm react-app

```
## ⚙️ Backend Setup
This React frontend communicates with the YatiLab backend service.
To run the backend, please follow the instructions provided here:
### 👉 YatiLab Backend Repository https://github.com/uaerty/YatiLab-Backend

## 📱 Responsive Breakpoints

The website is optimized for:
- **Mobile**: 320px - 576px
- **Tablet**: 577px - 992px
- **Desktop**: 993px and above

## 🎨 Color Scheme

- Primary Color: #1e3a8a (Dark Blue)
- Secondary Color: #3b82f6 (Sky Blue)
- Accent Color: #f97316 (Orange)
- Text Dark: #1f2937 (Dark Gray)
- Background Light: #f9fafb (Off White)

## 📝 Key Sections

### Header/Navigation
- Sticky navigation with smooth scrolling
- Responsive hamburger menu for mobile

### Hero Section
- Large banner with call-to-action buttons
- Animated background and icons

### About Section
- Company information
- Key features and highlights

### Research Areas
- 6 research domain cards with icons
- AI & Machine Learning
- Biotechnology
- Quantum Computing
- Renewable Energy
- Nanotechnology
- Cybersecurity

### Team Section
- Team member profiles (6 members)
- Social media links
- Role and expertise information

### Contact Section
- Contact form with validation
- Location and phone information
- Responsive form layout

### Footer
- Quick links navigation
- Social media links
- Company information
- Copyright information

## 🔧 Technologies Used

- **React** - UI library
- **Bootstrap 5** - CSS framework
- **Font Awesome** - Icon library
- **CSS3** - Styling and animations
- **HTML5** - Markup

## 📦 Dependencies

- `react` (^19.2.4) - React library
- `react-dom` (^19.2.4) - React DOM library
- `react-scripts` (5.0.1) - Build and development scripts
- `bootstrap` (^5.3.0) - Bootstrap CSS framework

## 🔄 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is private and belongs to Yati R&D Lab.

## 👥 Contact

For inquiries or collaboration:
- Email: info@yatirndlab.com
- Phone: +1 (555) 123-4567
- Location: Research Park, Innovation Hub, Tech City


