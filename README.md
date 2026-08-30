# Krishna Selection House — Website

A simple **MERN stack** (MongoDB, Express, React, Node.js) website for **Krishna Selection House**, a clothing shop in Khari Kuan, Dhampur, Bijnor, Uttar Pradesh, run by Neeraj Agarwal.

This is **not** an e-commerce store. There is no cart, checkout, or payment. It's a digital catalogue: customers browse Ladies, Men's and Kids clothing, then contact the shop directly via WhatsApp, phone call, or Google Maps directions.

---

## 1. What the project does

- Shows the shop's product categories (Ladies, Men, Kids, Fancy) as image cards, fetched from a MongoDB database through a small Express API.
- Lets customers WhatsApp the shop with a pre-filled message relevant to what they were browsing.
- Lets customers call the shop or get driving directions with one tap.
- Explains the school uniform ordering process.
- Works well on mobile phones, since that's how most customers will visit.

## 2. Technologies used

| Layer      | Technology                          |
|------------|--------------------------------------|
| Frontend   | React (with Vite) + Tailwind CSS     |
| Backend    | Node.js + Express                    |
| Database   | MongoDB + Mongoose                   |

No Redux, no GraphQL, no complicated auth — just plain React state, normal Express routes/controllers, and simple Mongoose models, so the code stays easy to read and modify.

## 3. Folder structure

```text
krishna-selection-house/
│
├── frontend/                  React + Vite website
│   ├── src/
│   │   ├── components/        Reusable UI pieces (Navbar, Hero, ProductCard, etc.)
│   │   ├── pages/
│   │   │   └── Home.jsx       Assembles all sections into the homepage
│   │   ├── data/
│   │   │   └── products.js    Fallback product data (used if the API is unreachable)
│   │   ├── utils/
│   │   │   ├── api.js         Talks to the backend
│   │   │   └── whatsapp.js    Builds WhatsApp/call/directions links
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/                   Express + MongoDB API
│   ├── config/db.js           Connects to MongoDB
│   ├── models/Product.js      Mongoose schema for a product
│   ├── controllers/           Business logic for each route
│   ├── routes/                Maps URLs to controller functions
│   ├── seed/seedProducts.js   One-time script to fill the database
│   ├── app.js                 Express app + middleware setup
│   └── server.js              Entry point: connects DB, starts server
│
└── README.md
```

## 4. Install the backend

```bash
cd backend
npm install
```

## 5. Install the frontend

```bash
cd frontend
npm install
```

## 6. Configure MongoDB

You need a MongoDB database. Either:

- **MongoDB Atlas** (free, cloud-hosted): create a free cluster at mongodb.com, create a database user, and copy the connection string, or
- **Local MongoDB**: install MongoDB Community Edition and use `mongodb://127.0.0.1:27017/krishna-selection-house`.

## 7. Create your `.env` files

**Backend** — copy the example and fill in your MongoDB URI:

```bash
cd backend
cp .env.example .env
```

Then edit `backend/.env`:

```text
PORT=5000
MONGODB_URI=your-mongodb-connection-string-here
```

**Frontend** — copy the example (the default value already works for local development):

```bash
cd frontend
cp .env.example .env
```

> `.env` files are listed in `.gitignore` so your database credentials are never committed to version control.

## 8. Add starting products to the database

Run this once, from the `backend` folder, after your `.env` is set up:

```bash
npm run seed
```

This fills MongoDB with the shop's starting catalogue (defined in `backend/seed/seedProducts.js`). You can safely run it again later — it clears old products first so you won't get duplicates.

## 9. Run the backend

```bash
cd backend
npm run dev
```

This starts the API at `http://localhost:5000`. Visit that URL in a browser — you should see "Krishna Selection House API is running."

## 10. Run the frontend

In a **second terminal window**:

```bash
cd frontend
npm run dev
```

This starts the website, usually at `http://localhost:5173`. Open that link in your browser.

## 11. API endpoints

| Method | Endpoint                          | What it does                          |
|--------|------------------------------------|----------------------------------------|
| GET    | `/api/products`                   | Get all products                       |
| GET    | `/api/products?category=Ladies`   | Get products filtered by category      |
| GET    | `/api/products/:id`                | Get a single product by its id         |
| POST   | `/api/products`                    | Create a new product                   |
| PUT    | `/api/products/:id`                | Update a product                       |
| DELETE | `/api/products/:id`                | Delete a product                       |

`category` must be one of: `Ladies`, `Men`, `Kids`, `Fancy`.

You can test POST/PUT/DELETE with a tool like [Postman](https://www.postman.com/) or [Thunder Client](https://www.thunderclient.com/) (a free VS Code extension).

## 12. How WhatsApp integration works

`frontend/src/utils/whatsapp.js` builds a link in this format:

```text
https://wa.me/91<phone-number>?text=<url-encoded-message>
```

Opening this link on a phone launches the WhatsApp app; on a desktop it opens WhatsApp Web — either way, the message is already typed in, ready for the customer to hit send. Every "WhatsApp" button on the site calls the same `openWhatsApp()` function with a different pre-written message (see `whatsappMessages` in that file), depending on which section the customer was viewing.

## 13. Where to change shop information

All shop details (name, phone number, address) are defined directly in the components rather than scattered as random strings, so they're easy to find:

- **Phone number / WhatsApp**: `frontend/src/utils/whatsapp.js` (`SHOP_WHATSAPP_NUMBER`, and inside `callShop()`)
- **Address**: `frontend/src/utils/whatsapp.js` (`openDirections()`) and `frontend/src/components/Contact.jsx`
- **Shop name / hero text**: `frontend/src/components/Hero.jsx` and `frontend/src/components/Navbar.jsx`
- **About text**: `frontend/src/components/AboutShop.jsx`

## 14. Where to replace product images

Right now, product images use [loremflickr.com](https://loremflickr.com), a free placeholder service that returns real photos matching keywords (e.g. "women,jeans"). They look reasonably close to each category, but they are **not** photos of your actual shop.

To use real photos:

1. Take clear photos of your products.
2. Upload them somewhere with a public URL (e.g. a free image host, or your own server), or store them as local files in `frontend/public/images/` and reference them like `"/images/ladies-jeans.jpg"`.
3. Update the `image` field for that product — either:
   - Directly in MongoDB (using MongoDB Compass, Atlas's web UI, or a `PUT` request to `/api/products/:id`), or
   - In `backend/seed/seedProducts.js` and re-run `npm run seed`.

---

## A note on accuracy

This website only includes information that was explicitly provided: the shop name, owner, phone number, address, and the categories of clothing sold. No prices, opening hours, years of experience, reviews, or other details have been invented — please add real information yourself when you have it, in the files listed above.
