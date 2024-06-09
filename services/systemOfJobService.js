const job = require('../repository/job')
const candidate = require('../repository/canditade')
const user = require('../repository/user')


exports.getuser = () => {
    try {
        return user.getuser();
    } catch (error) {
        console.log(error);
    }
}