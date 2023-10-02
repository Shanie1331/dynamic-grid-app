# Technical Documentation for dynamic-grid-app

Build a React app optimized for mobile view with the following features:

1. **Schema-Driven UI:**
   - The UI is driven by a configuration schema.
   - The configuration is fetched from the backend (`BE`), `AppConfig`, or `RemoteConfig`.

2. **Configuration Source:**
   - The configuration is initially fetched from one of the following sources: backend (`BE`), `AppConfig`, or `RemoteConfig`.
   - A static JSON file is used for configuration during development.

3. **Dynamic Grid Component Implementation:**
   - The app includes a dynamic grid component.
   - The grid has configurable rows (`x`) and columns (`y`).
   - The UI is designed to accommodate `x * y` items.

4. **Grid Item Component:**
   - The grid items are represented by a `GridItem` component.

5. **Item Component Variants:**
   - The `GridItem` component has multiple variants to display different types of content.

6. **Redirection Configuration:**
   - Each item variant has redirection configurations.
   - On click, it can navigate to a new tab or a new route/screen within the app.

7. **Dynamic Variant Change:**
   - The variant of the `GridItem` component can be changed dynamically.

## Table of Contents

- [Technical Documentation for dynamic-grid-app](#technical-documentation-for-dynamic-grid-app)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
      - [React Version : 18](#react-version--18)
      - [Node Version : 18](#node-version--18)
          - [--\> Added .nvmrc file you can use Node Version Manager](#---added-nvmrc-file-you-can-use-node-version-manager)
      - [Test Driven Development Knowledge](#test-driven-development-knowledge)
  - [Installation](#installation)
  - [Folder Structure](#folder-structure)
  - [Configuration](#configuration)
  - [Deployment](#deployment)
  - [Components](#components)
  - [Styling](#styling)
  - [API Integration](#api-integration)

## Prerequisites

#### React Version : 18

#### Node Version : 18

###### --> Added .nvmrc file you can use Node Version Manager

#### Test Driven Development Knowledge

## Installation

Provide step-by-step instructions on how to set up the development environment and install dependencies.

```bash
# Clone the repository
git clone <repository-url>

# Change into the project directory
cd <project-directory>

# Install dependencies
npm install

# Runs the app in the development mode.\
# Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
npm start

# Builds the app for production to the `build` folder.\
npm run build
```

## Folder Structure

```
project-root/
  ├── public/
  │   ├── index.html
  │   ├── data
  │   │   ├── schema.json 
  ├── src/
  │   ├── components/
  │   ├── routes/
  │   ├── App.js
  │   ├── ElementMapper.js (A HOC Mapper that imports and returns the dynamic components)
  │   └── index.js
  ├── .gitignore
  ├── .nvmrc
  ├── package.json
  └── README.md
```

## Configuration

The `schema.json` is placed at the `public/data`. The JSON is responsible for dynamic components behavior and render behavior.

```bash
"screens": { # Schema for all the screens
    "/": {
      "id": 1,
      "title": "home", # Name of the screen
      "components": [ # List of Component
        {
          "id": "101", # key of Grid Component
          "type": "grid", # Name of Grid Component
          "props": {
            "title": "Grid One", # Title of Grid Component
            "rows": 3, # Number of rows for Component
            "columns": 3, # Number of cols for Component
            "items": [
                {
                    "id": 1001, # key of Item Component
                    "type": "ItemVariant1", # Name of Item Component ItemVariant1/ItemVariant2
                    "props": {
                        "redirectType": "tab", # type of redirection route/tab
                        "redirectConfig": "https://example.com", # path for redirection
                        "image": "https://picsum.photos/200", # path for image
                        "title": "ItemVariant1 1", # title for grid Item
                        "description": "Description" # description for grid Item
                    }
                }
            ]
          }
        }
      ]
    }
  }
```

## Deployment

```bash
# Pre-deployment script
npm run predeploy

# deployment script to deploy it to github pages
npm run deploy
```

## Components

Grid Component
Grid Item Component
Item Variant 1 (for Grid Item Component)
Item Variant 2 (for Grid Item Component)

## Styling

For now we are just using global styles.css

## API Integration

We are using static JSON for now.
