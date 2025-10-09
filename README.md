
# 🎮 App Galary

A responsive React + Vite web application to browse, search, and manage mobile apps.  
Users can see app details, install/uninstall apps, review ratings, and view charts.

---

## 🧰 Technologies

- React  
- Vite  
- React Router DOM  
- Tailwind CSS (plus any UI library if used)  
- Recharts (for charting reviews)  
- React Toastify (for notifications / toasts)  
- LocalStorage (for persisting installed apps)  
- FontAwesome (for icons)  

---

## ✨ Features

- Responsive layout for desktop, tablet, and mobile  
- Header with logo, navigation links (Home, Apps, Installation) and active route highlighting  
- Footer with custom design  
- Home page:
  - Hero banner with “App Store” & “Play Store” buttons  
  - Top apps section (shows number of apps, image, rating, downloads)  
  - “Show All” button to go to all apps page  

- All Apps page:
  - Live search (case-insensitive)  
  - Displays all apps from JSON data  
  - If no results, shows “No App Found” message  

- App Details page:
  - Show app image, title, downloads, ratings, description  
  - Install button: once clicked, becomes “Installed” and disables  
  - Toast notification on successful install  
  - Chart (using Recharts) visualizing ratings breakdown  

- My Installation page (Challenge part):
  - Shows all apps user installed (from localStorage)  
  - Uninstall functionality (removes from UI & localStorage)  
  - Toast on uninstall  

- Sorting:
  - Dropdown for sorting apps by downloads (High → Low, Low → High)

- Custom Error page for invalid routes  
- Loading animations (for page navigation, search, etc.)

---

## 🗂 Data Structure

The app data is an array of objects with the structure:

```json
{
  "id": 1,
  "image": "https://example.com/app-image.png",
  "title": "Photo Editor Pro",
  "companyName": "Snapify",
  "description": "A powerful photo editing tool with filters, layers, and more.",
  "size": 45,
  "reviews": 1200,
  "ratingAvg": 4.3,
  "downloads": 150000,
  "ratings": [
    { "name": "1 star", "count": 50 },
    { "name": "2 star", "count": 100 },
    { "name": "3 star", "count": 200 },
    { "name": "4 star", "count": 350 },
    { "name": "5 star", "count": 500 }
  ]
}
