import Property from "../models/Property.js";

// Get all properties
export const getProperties = async (req, res, next) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    next(err);
  }
};

// Get a single property by ID
export const getProperty = async (req, res, next) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) return res.status(404).json({ message: "Property not found" });
    res.json(property);
  } catch (err) {
    next(err);
  }
};

// Create a new property
export const createProperty = async (req, res, next) => {
  try {
    const { name, location, description, price, capacity, availability, amenities } = req.body;

    // Validate required fields
    if (!name || !location || !description || !price || !capacity || !availability || !amenities) {
      return res.status(400).json({ message: "All 7 fields are required" });
    }

    const property = await Property.create({
      name,
      location,
      description,
      price,
      capacity,
      availability,
      amenities,
    });

    res.status(201).json(property);
  } catch (err) {
    next(err);
  }
};

// Update a property
export const updateProperty = async (req, res, next) => {
  try {
    const { name, location, description, price, capacity, availability, amenities } = req.body;

    // Optional: You can validate fields here if needed

    const updated = await Property.findByIdAndUpdate(
      req.params.id,
      { name, location, description, price, capacity, availability, amenities },
      { new: true, runValidators: true }
    );

    if (!updated) return res.status(404).json({ message: "Property not found" });

    res.json(updated);
  } catch (err) {
    next(err);
  }
};

// Delete a property
export const deleteProperty = async (req, res, next) => {
  try {
    const deleted = await Property.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Property not found" });
    res.json({ message: "Property removed" });
  } catch (err) {
    next(err);
  }
};