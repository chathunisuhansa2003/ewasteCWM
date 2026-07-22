const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection with fallback
const connectWithFallback = async () => {
  const primaryUri = process.env.MONGO_URI;
  const localFallback = 'mongodb://127.0.0.1:27017/inventory';
  const opts = { serverSelectionTimeoutMS: 5000 };

  if (!primaryUri) {
    console.warn('MONGO_URI not set — attempting local MongoDB at', localFallback);
    try {
      await mongoose.connect(localFallback, opts);
      console.log('MongoDB connected to local fallback');
      return;
    } catch (err) {
      console.error('Local MongoDB connection failed:', err.message || err);
      return;
    }
  }

  try {
    await mongoose.connect(primaryUri, opts);
    console.log('MongoDB Connected Successfully');
    return;
  } catch (err) {
    console.error('Database connection failed:', err.message || err);
    const isSrvDnsError = (err && err.message && (err.message.includes('querySrv') || err.code === 'EAI_AGAIN' || err.code === 'ECONNREFUSED'));
    if (isSrvDnsError) {
      console.warn('SRV/DNS lookup failed for Atlas cluster. Trying local MongoDB fallback...');
      try {
        await mongoose.connect(localFallback, opts);
        console.log('MongoDB connected to local fallback');
        return;
      } catch (localErr) {
        console.error('Local fallback connection also failed:', localErr.message || localErr);
      }
    }
  }
};

connectWithFallback();  