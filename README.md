# Inventory and Data Management System

REST API built with Node.js, Express, MongoDB (Mongoose) and dotenv for managing a product catalogue.

**Features:** product CRUD, schema validation, filtering/sorting/pagination, safe stock updates (restock/sale), low-stock report and category-wise summary using aggregation, centralized error handling.

**Run:**
```bash
npm install
npm run seed   
npm run dev    # http://localhost:5000
```
Set `PORT` and `MONGO_URI` in `.env`.

**Endpoints:**
- `POST /api/products` create
- `GET /api/products` list (filter, sort, paginate)
- `GET /api/products/:id` single product
- `PUT /api/products/:id` update
- `PATCH /api/products/:id/stock` restock/sale
- `DELETE /api/products/:id` delete
- `GET /api/products/low-stock` low-stock report
- `GET /api/products/summary` category summary