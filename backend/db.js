const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://dhruvlakhotia7:x0Gy4C06boXHwfCr@cluster0.iozwfrg.mongodb.net/gofoodmern?retryWrites=true&w=majority"
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) { console.log("---", err); }
        else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("foodData");
            fetched_data.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function (error, catData) {
                    if (err) console.log(err);
                    else {
                        global.foodData = data;
                        global.foodCategory = catData;
                    }
                })


                if(err) console.log(err);
                else {
                    global.foodData=data;
                    console.log(global.foodData);

                }
            })


        }
    });
}



module.exports = mongoDB;

