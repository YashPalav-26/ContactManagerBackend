const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//*@desc Get all contacts
//*@route GET /api/contacts/
//*@access private

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

//*@desc Create contact
//*@route POST /api/contacts/
//*@access private

const createContact = asyncHandler(async (req, res) => {
  const { name, age, email, phone } = req.body;

  if (!name || !age || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory !!");
  }

  const contact = await Contact.create({
    name,
    age,
    email,
    phone,
    user_id: req.user.id,
  });
  console.log(req.body);
  res.status(201).json(contact);
});

//*@desc Get specific contact by ID
//*@route GET /api/contacts/
//*@access private

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

//*@desc Update contact
//*@route PUT /api/contacts/
//*@access private

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error(
      "User don't have permission to update other users's contact"
    );
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContact);
});

//*@desc Delete contact
//*@route DELETE /api/contacts/
//*@access private

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error(
      "User don't have permission to delete other users's contact"
    );
  }

  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
