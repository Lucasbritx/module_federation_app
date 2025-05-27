# Module Federation App

A demonstration of Webpack 5 Module Federation with React and Vue micro-frontends.

## Project Structure

- **consumer**: React application that consumes components from both providers
- **provider**: React-based component provider
- **vue-provider**: Vue-based component provider

## Port Configuration

- Consumer app runs on: http://localhost:3000
- React provider runs on: http://localhost:3001
- Vue provider runs on: http://localhost:3002

## Getting Started

### Installation

Install all dependencies at once:

```bash
npm run install:all
```

### Running the Applications

To run all three applications together:

```bash
npm start
```

To run applications individually:

```bash
# Consumer app
npm run start:consumer

# React provider
npm run start:react-provider

# Vue provider
npm run start:vue-provider
```

## Module Federation

This project demonstrates how components can be shared between different frameworks:
- React components exposed from the React provider
- Vue components exposed from the Vue provider
- Both consumed by the consumer application
