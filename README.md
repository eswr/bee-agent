
# Developers Digest Coffee

Welcome to the Developers Digest Coffee project! This is a web application for a coffee shop that caters specifically to developers, offering carefully curated coffee from America's top tech hubs.

## Project Structure

This project consists of two main parts:

1. Frontend (UI): Located in the `react-ui` directory
2. Backend (Agent): Located in the `agent` directory

## Frontend (UI)

The frontend is built using:

- Vite
- React
- TypeScript
- shadcn-ui
- Tailwind CSS

### Getting Started

To run the frontend:

1. Navigate to the `ui` directory
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

The server will start on `http://localhost:8080`.

## Backend (Agent)

The backend is built using:

- Bun
- TypeScript

### Getting Started

To run the backend:

1. Navigate to the `agent` directory
2. Install dependencies:
   ```
   bun install
   ```
3. Start the server:
   ```
   bun run index.ts
   ```

## Features

- Responsive design for various screen sizes
- Product catalog showcasing different coffee blends
- Information about the coffee sourcing and roasting process
- Coffee Club subscription option
- Chat widget for customer support

## Development

This project uses ESLint for linting and Prettier for code formatting. Make sure to run these tools before committing your changes.

## Deployment

For deployment options, consider using platforms like Netlify, Vercel, or AWS Amplify. These services offer easy integration with Git repositories and provide automatic builds and deployments.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License

Copyright (c) 2024 Developers Digest

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.