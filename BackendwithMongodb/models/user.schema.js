const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({

    personal: {

        type: {
            firstname: String,
            lastname: String,
            city: String,
            postalcode: String,
            country: String,
            phone: String,
            email: String,
            user_img: String
        }

    },
    job: {

        type: [
            {
                jobtitle: String,
                employer: String,
                startdate: String,
                enddate: String,
                city: String,
                country: String,
                desc: String
            }
        ]
    },
    intro: {

        type: String

    },
    
    acadmeic: {

        type: [
            {
                schoolname: String,
                schoollocation: String,
                fieldofstudy: String,
                qualification: String,
                startyear: String,
                graduationdate: String,
                grade: String,
                honors: String,
            }
        ]

    }

})

module.exports = mongoose.model('user', UserSchema)