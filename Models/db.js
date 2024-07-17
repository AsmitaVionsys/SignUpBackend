import mongoose from 'mongoose';

const mongo_url = process.env.MONGODB;

mongoose.connect(mongo_url)
  .then(() => {
    console.log('MongoDB connected...');
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err);
  });
