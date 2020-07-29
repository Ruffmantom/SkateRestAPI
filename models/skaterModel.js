const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skaterSchema = new Schema({
    fullName: { type: String, required: true },
    age: { type: Number, required: true },
    sponsors: { type: String, required: true },
    imgLink: { type: String, required: true },
    bio: { type: String, required: true },
    tampa:{type: String},
    XG: { type: Number },
    DT: { type: Number },
    SLS: { type: Number },
    VPS: { type: Number },
    SS: { type: Number },
    BATB: { type: Number },
    GOS: { type: Number },
    RBHL: { type: Number },
    date: { type: Date, default: Date.now }
})
const Skater = mongoose.model("Skater", skaterSchema);
module.exports = Skater; 