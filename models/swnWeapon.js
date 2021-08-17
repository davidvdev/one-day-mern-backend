const mongoose = require('mongoose')
const {Schema, model} = mongoose

const swnWeaponSchema = new Schema(
    {
        "type":String,
        "name":String,
        "damage":String,
        "shock": String,
        "range":String,
        "magazine":Number,
        "attribute":String,
        "cost":Number,
        "encumberance":String,
        "TL":Number,
        "suppress":Boolean,
        "description":String  
      }
)

const SWNWeapon = model("SWNWeapon", swnWeaponSchema)

module.exports = SWNWeapon