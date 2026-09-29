# Shopping Cart

A React shopping cart application built with Vite. Browse products, add them to your cart, adjust quantities, and view the cart totals.

## Features

- Home, shop, and cart pages with client-side navigation.
- Product listings loaded from the [Fake Store API](https://fakestoreapi.com/).
- Add and remove products, increase quantities, and decrease quantities without going below one.
- Cart summary showing the item count and total price.
- Responsive styling with CSS modules.

Cart contents are held in React state and are cleared when the page is reloaded. The checkout button is currently a placeholder and does not complete a purchase.

## Getting Started

Install [Node.js](https://nodejs.org/) and npm, then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. The shop needs an internet connection to retrieve products from Fake Store API.

## Available Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates a production build in `dist/`.
- `npm run preview` serves the production build locally.
- `npm run lint` runs ESLint.

## Project Structure

```text
src/
	Components/  Shared UI components
	Features/    Cart context and reducer
	Images/      Local image assets
	Pages/       Home, shop, and cart pages
```
