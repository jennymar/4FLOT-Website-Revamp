"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const eventDetailsSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    guidelines: { type: String, required: true },
    date: { type: String, required: true },
    location: { type: String, required: true },
    imageURI: { type: String, required: true }, // TODO: Change this if necessary
    // empty by default, stores _id of volunteers
    volunteers: { type: [String], required: false, default: [] },
});
exports.default = (0, mongoose_1.model)("EventDetails", eventDetailsSchema);
