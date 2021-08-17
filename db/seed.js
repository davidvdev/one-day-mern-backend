const mongoose = require('./connection')
const seedData = require('./swnWeaponsSeed')
const SWNWeapon = require('../models/swnWeapon')

try{
    SWNWeapon.deleteMany({}).then(() => {
        SWNWeapon.insertMany(seedData)
        .then((weapons) => {
            console.log('added: ', weapons)
            mongoose.connection.close()
        })
    })
}catch(err){ console.log('error: ',err)}