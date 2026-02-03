import mongoose from "mongoose";

const produceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    message: "Missing a value",
  },
  category: {
    type: String,
    required: true,
    enum: ["Vegetable", "Fruit"],
    message: "Submitted an  incorrect value for category",
  },
  price: {
    type: Number,
    required: true,
  },
  stocked: {
    type: Boolean,
    required: false,
  },
});

//indexes
produceSchema.index({ category: 1, price: -1 });
produceSchema.index({ price: 1 });
produceSchema.index({ name: -1 });

export default mongoose.model("Produce", produceSchema);
