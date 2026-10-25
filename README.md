# rockeykotwal.in

Personal portfolio site for [Rockey Kotwal](https://rockeykotwal.in) — Senior Backend Engineer.

## Stack

- React + Vite
- Tailwind CSS
- React Router

## Structure

```
src/
├── context/        # Theme context (dark/light)
├── data/           # Products config
├── pages/          # Home, ProductPage, NotFound
└── styles/         # Theme tokens
```

## Adding a new product

Open `src/data/products.js` and add an entry:

```js
{
  slug: 'your-product',
  name: 'Your Product',
  tagline: 'One line description',
  description: 'A couple of sentences about what it does.',
  url: 'https://your-product.rockeykotwal.in',
  features: [
    { title: 'Feature one', description: 'What it does.' },
  ],
}
```

The route `/product/your-product` is created automatically.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Hosted on Vercel. Push to `main` to deploy.
