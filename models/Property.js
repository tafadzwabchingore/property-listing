import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  name: { type: String, required: true },           // Property name
  location: { type: String, required: true },       // City, state, or area
  description: { type: String, required: true },    // Short description
  price: { type: Number, required: true },          // Price per night
  capacity: { type: Number, required: true },       // Max guests
  availability: [{ type: String }],                // Array of available dates
  amenities: [{ type: String }]                    // List of amenities
});

export default mongoose.model("Property", propertySchema);