# Cell Tower Dashboard

## Project Overview

The **Cell Tower Dashboard** is a single-page web application designed to monitor and visualize cell tower data for a telecom company. It provides an intuitive interface to view tower details, filter data, and analyze key metrics through interactive charts.

## Features

- **Header with Summary Cards**:
  - Displays total towers, active towers, and average signal strength.
- **Filter Section**:
  - Search input to filter towers by name.
  - Dropdown to filter towers by city.
  - Dropdown to filter towers by network type.
- **Data Table**:
  - Displays tower information with columns: Name, City, Network Type, Status, and Signal
- **D3.js Charts**:
  - **Bar Chart**: Visualizes the number of towers per city.
  - **Pie Chart**: Shows the distribution of active vs. offline towers.
- **Responsive Design**:
  - Optimized for both desktop and mobile devices.
- **Mock Data**:
  - Includes 12 towers across 4 cities (Cairo, Alexandria, Hurghada, Luxor) with a mix of active/offline statuses and 4G/5G networks.
- **Bonus Features**:
  - Loading states for table and charts.
  - Filter with network type.
  - Error handling for data fetching.
  - Unit tests for key components.

## Technical Stack

- **Frontend**: React (functional components with hooks).
- **TypeScript**: For type safety and better developer experience.
- **Styling**: SCSS with variables and responsive design techniques.
- **Charts**: D3.js for charts.
- **Testing**: Vitest and React Testing Library for unit tests.

## Setup Instructions

Follow these steps to run the application locally:

1. **Clone the Repository**:
   ```
   git clone https://github.com/M-Massoud/cell-tower-dashboard.git
   cd cell-tower-dashboard
   ```
2. **Install Dependencies**:
   ```
   npm install
   ```
3. **Run the Application**:

   ```
   npm run dev
   ```

4. **Run Tests**:

   ```
   npm test
   ```

5. **Build for Production**:
   ```
   npm run build
   ```

## Folder Structure

- **public/**: Contains the `index.html` and favicon.
- **src/**: Main source folder for the application.
  - **assets/**: Images and other static assets.
  - **components/**: Reusable React components.
  - **pages/**: Page components for routing.
  - **styles/**: Global styles and variables.
  - **types/**: TypeScript shared types and interfaces.
  - **App.tsx**: Main application component.
  - **index.tsx**: Entry point of the application.

---

## Usage

- On the dashboard, you will see the summary cards at the top, displaying the total number of towers, active towers, and the average signal strength.
- Below the summary, there is a filter section. Use the search input to filter towers by their name. The dropdown menu allows you to filter towers based on the city.
- The data table displays the tower information. It includes columns for Name, City, Network Type, Status, and Signal Strength. The table supports dynamic filtering, so it will update based on your search and filter criteria.
- Two interactive charts are available: a bar chart visualizing the number of towers per city, and a pie chart showing the distribution of active versus offline towers.
- The application is responsive and can be used on both desktop and mobile devices.
