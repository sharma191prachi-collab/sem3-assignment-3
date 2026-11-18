// Run: npm run seed  -> inserts 12 sample products
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./src/models/Product');

const data = [
  { name: 'Study Table', sku: 'FURN-TB-812', category: 'Furniture', price: 3999, quantity: 2, reorderLevel: 4, supplier: 'IKEA India' },
  { name: 'Office Chair', sku: 'FURN-CH-101', category: 'Furniture', price: 5499, quantity: 15, reorderLevel: 5, supplier: 'Godrej' },
  { name: 'Laptop 15"', sku: 'ELEC-LP-001', category: 'Electronics', price: 55000, quantity: 5, reorderLevel: 3, supplier: 'Dell' },
  { name: 'Wireless Mouse', sku: 'ELEC-MS-002', category: 'Electronics', price: 799, quantity: 40, reorderLevel: 10, supplier: 'Logitech' },
  { name: 'Bluetooth Speaker', sku: 'ELEC-SP-003', category: 'Electronics', price: 2499, quantity: 3, reorderLevel: 8, supplier: 'boAt' },
  { name: 'Smartphone', sku: 'ELEC-PH-004', category: 'Electronics', price: 18000, quantity: 48, reorderLevel: 10, supplier: 'Samsung' },
  { name: 'Cotton T-Shirt', sku: 'APRL-TS-010', category: 'Apparel', price: 499, quantity: 60, reorderLevel: 20, supplier: 'Levis' },
  { name: 'Denim Jeans', sku: 'APRL-JN-011', category: 'Apparel', price: 2299, quantity: 18, reorderLevel: 10, supplier: 'Levis' },
  { name: 'Gel Pen Pack of 15', sku: 'STNY-PN-713', category: 'Stationery', price: 120, quantity: 40, reorderLevel: 20, supplier: 'Cello Pens' },
  { name: 'A4 Notebook', sku: 'STNY-NB-714', category: 'Stationery', price: 60, quantity: 8, reorderLevel: 25, supplier: 'Classmate' },
  { name: 'Basmati Rice 5kg', sku: 'GROC-RC-020', category: 'Grocery', price: 650, quantity: 30, reorderLevel: 10, supplier: 'India Gate' },
  { name: 'Olive Oil 1L', sku: 'GROC-OL-021', category: 'Grocery', price: 899, quantity: 4, reorderLevel: 6, supplier: 'Figaro' },
];

(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Product.deleteMany();
  await Product.insertMany(data);
  console.log(`Seeded ${data.length} products`);
  await mongoose.disconnect();
})();
