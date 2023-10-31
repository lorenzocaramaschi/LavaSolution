import { connectToDatabase } from '../../utils/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { name, description, image, price, stock } = req.body;

  const { db } = await connectToDatabase();

  // Store the product data in MongoDB
  await db.collection('products').insertOne({
    name,
    description,
    image,
    price,
    stock,
  });

  res.status(201).json({ message: 'Product added successfully' });
}
