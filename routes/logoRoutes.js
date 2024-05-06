// routes/logoRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Logo = require('../models/logo');

// Multer Middleware for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

// Create a logo
router.post('/create', upload.single('logo'), async (req, res) => {
  try {
    const { company, website } = req.body;
    const logoUrl = req.file ? path.join('uploads/', req.file.filename) : '';
    const logo = new Logo({ company, website, logoUrl });
    await logo.save();
    res.status(201).send(logo);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Get all logos
router.get('/list', async (req, res) => {
  try {
    const logos = await Logo.find();
    res.send(logos);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Update a logo
router.put('/update/:id', async (req, res) => {
  try {
    const { company, website } = req.body;
    const logo = await Logo.findByIdAndUpdate(req.params.id, { company, website }, { new: true });
    res.send(logo);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Delete a logo
router.delete('/delete/:id', async (req, res) => {
  try {
    await Logo.findByIdAndDelete(req.params.id);
    res.send('Logo deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
