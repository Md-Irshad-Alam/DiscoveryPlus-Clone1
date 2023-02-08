const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchmea = new mongoose.Schema(
    {   "name":{type:String,require:"true"},
        "email" : {type: String, required: true},
        "password" : {type: String, required: true},
    },
    {
        versionKey: false,
        timestamps : true
    }
)


userSchmea.pre('save', function (next) {
    if (!this.isModified("password")) return next();
    let hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
})


userSchmea.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}



const User = mongoose.model('user', userSchmea);

module.exports = User;