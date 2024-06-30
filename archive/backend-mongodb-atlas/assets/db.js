import mongoose, { model, models, Schema } from "mongoose";

const { MONGODB_URL } = process.env;

const elementSchema = new Schema({
  id: String,
  name: String,
});

const Element = models.Element || model("Element", elementSchema);

async function connectDatabase() {
  await mongoose.connect(MONGODB_URL);
}

async function createElement(element) {
  await connectDatabase();
  const newElement = await Element.create(element);
  return newElement;
}

async function getElement(id) {
  await connectDatabase();
  const element = await Element.findOne({ id });
  return element;
}

async function getAllElements() {
  await connectDatabase();
  const elements = await Element.find({});
  return elements;
}

async function deleteElement(id) {
  await connectDatabase();
  const element = await Element.findOne({ id });
  await Element.deleteOne({ id });
  return element;
}

async function updateElement(id, element) {
  await connectDatabase();
  await Element.updateOne({ id }, element);
  const updatedElement = await Element.findOne({ id });
  return updatedElement;
}

export {
  createElement,
  getElement,
  getAllElements,
  deleteElement,
  updateElement,
};
