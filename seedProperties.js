import mongoose from "mongoose";
import dotenv from "dotenv";
import Property from "./models/Property.js";

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Sample properties
const properties = [
  {
    name: "Ocean View Apartment",
    location: "Miami, Florida",
    description: "Modern apartment with panoramic ocean views and a balcony.",
    price: 350,
    capacity: 4,
    availability: ["2025-10-05", "2025-10-12", "2025-10-19"],
    amenities: ["WiFi", "Pool", "Air Conditioning", "Kitchen", "Parking"],
  },
  {
    name: "Mountain Cabin",
    location: "Aspen, Colorado",
    description: "Cozy cabin surrounded by pine trees, perfect for winter getaways.",
    price: 250,
    capacity: 5,
    availability: ["2025-11-01", "2025-11-05", "2025-11-10"],
    amenities: ["Fireplace", "WiFi", "Parking", "Hot Tub"],
  },
  {
    name: "Downtown Loft",
    location: "New York, NY",
    description: "Stylish loft in the heart of the city with modern decor.",
    price: 400,
    capacity: 3,
    availability: ["2025-10-08", "2025-10-15", "2025-10-22"],
    amenities: ["WiFi", "Air Conditioning", "Elevator", "Gym Access"],
  },
  {
    name: "Seaside Villa",
    location: "Malibu, California",
    description: "A beautiful villa overlooking the ocean with modern amenities.",
    price: 450,
    capacity: 6,
    availability: ["2025-10-10", "2025-10-15", "2025-10-20"],
    amenities: ["Pool", "WiFi", "Air Conditioning", "Parking"],
  },
  {
    name: "Countryside Cottage",
    location: "Napa Valley, California",
    description: "Charming cottage in the wine country surrounded by vineyards.",
    price: 300,
    capacity: 4,
    availability: ["2025-09-25", "2025-10-05", "2025-10-12"],
    amenities: ["WiFi", "Kitchen", "Parking", "Garden"],
  },
  {
    name: "Beachfront Bungalow",
    location: "Honolulu, Hawaii",
    description: "Private bungalow on the beach with direct ocean access.",
    price: 500,
    capacity: 5,
    availability: ["2025-11-01", "2025-11-07", "2025-11-15"],
    amenities: ["WiFi", "Pool", "Air Conditioning", "Parking", "Beach Access"],
  },
  {
    name: "Urban Studio",
    location: "San Francisco, California",
    description: "Compact and modern studio apartment in downtown SF.",
    price: 200,
    capacity: 2,
    availability: ["2025-10-01", "2025-10-05", "2025-10-10"],
    amenities: ["WiFi", "Air Conditioning", "Elevator", "Gym Access"],
  },
  {
    name: "Luxury Penthouse",
    location: "Chicago, Illinois",
    description: "Sky-high penthouse with city skyline views and luxury furnishings.",
    price: 600,
    capacity: 4,
    availability: ["2025-10-12", "2025-10-18", "2025-10-25"],
    amenities: ["WiFi", "Pool", "Gym", "Parking", "Elevator"],
  },
  {
    name: "Forest Retreat",
    location: "Portland, Oregon",
    description: "Secluded retreat surrounded by forest, perfect for relaxation.",
    price: 280,
    capacity: 4,
    availability: ["2025-09-30", "2025-10-07", "2025-10-14"],
    amenities: ["WiFi", "Fireplace", "Parking", "Hot Tub"],
  },
  {
    name: "Historic Manor",
    location: "Charleston, South Carolina",
    description: "Elegant historic manor with classic architecture and gardens.",
    price: 420,
    capacity: 6,
    availability: ["2025-10-05", "2025-10-15", "2025-10-25"],
    amenities: ["WiFi", "Pool", "Kitchen", "Parking", "Garden"],
  },
];

// Async function to seed MongoDB
const seedProperties = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    // Optional: clear existing data
    await Property.deleteMany();

    // Insert new data
    const created = await Property.insertMany(properties);
    console.log(`${created.length} properties inserted successfully`);

    // Disconnect
    await mongoose.disconnect();
    console.log("MongoDB Disconnected");
  } catch (err) {
    console.error("Error seeding properties:", err);
    await mongoose.disconnect();
  }
};

// Run the async function
seedProperties();