const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const Profile = require('./models/profile')
const Calendar = require('./models/calendar')
const Workout = require('./models/workout')
const Nutrition = require('./models/nutrition')
mongoose.connect('mongodb://localhost:27017/Onepound', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connected"); })
    .catch(() => { console.log("error connecting"); });

app.use((req, res, next) => {
    console.log('This line is always called');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
});

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/profiles', (req, res, next) => {
    Profile.find()
        .then(data => res.status(200).json(data))
        .catch(err => {
            console.log('Error: ${err}');
            res.status(500).json(err);
        });
});

app.post('/profiles', (req, res, next) => {
    const profile = new Profile({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        userPass: req.body.userPass,
        userEmail: req.body.userEmail
    });
    profile.save()
        .then(() => { console.log('Success'); })
        .catch(err => { console.log('Error:' + err); });
});

app.delete("/profiles/:id", (req, res, next) => {
    Profile.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json("Deleted!");
    });
});

app.put('/profiles/:id', (req, res, next) => {
    console.log("id: " + req.params.id)
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        Profile.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    userName: req.body.userName,
                    userPass: req.body.userPass,
                    userEmail: req.body.userEmail
                }
            },
            { new: true }
        )
            .then((profile) => {
                if (profile) {
                    console.log(profile);
                } else {
                    console.log("no data exist for this id");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        console.log("please provide correct id");
    }
});

app.get('/profiles/:id', (req, res, next) => {
    Profile.findOne({ _id: req.params.id })
        .then(data => {
            res.status(200).json(data)
            console.log(data);
        })
        .catch(err => {
            console.log('Error: ${err}');
            res.status(500).json(err);
        });
});

//CALENDAR STARTS HERE
app.get('/calendars', (req, res, next) => {
    Calendar.find()
        .then(data => res.status(200).json(data))
        .catch(err => {
            console.log('Error: ${err}');
            res.status(500).json(err);
        });
});

app.get('/calendars/:id', (req, res, next) => {
    Calendar.findOne({ _id: req.params.id })
        .then(data => {
            res.status(200).json(data)
            console.log(data);
        })
        .catch(err => {
            console.log('Error: ${err}');
            res.status(500).json(err);
        });
});

app.post('/calendars', (req, res, next) => {
    const calendar = new Calendar({
        day: req.body.day,
        month: req.body.month,
        year: req.body.year,
        activity: req.body.activity,
        duration: req.body.duration
    });
    calendar.save()
        .then(() => { console.log('Success'); })
        .catch(err => { console.log('Error:' + err); });
});

app.put('/calendars/:id', (req, res, next) => {
    console.log("id: " + req.params.id)
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        Calendar.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    day: req.body.day,
                    month: req.body.month,
                    year: req.body.year,
                    activity: req.body.activity,
                    duration: req.body.duration,
                }
            },
            { new: true }
        )
            .then((calendar) => {
                if (calendar) {
                    console.log(calendar);
                } else {
                    console.log("no data exist for this id");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        console.log("please provide correct id");
    }
});
app.delete("/calendars/:id", (req, res, next) => {
    Calendar.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json("Deleted!");
    });
});


//WORKOUT COMPONENT STARTS HERE
app.get('/workouts', (req, res, next) => {
    Workout.find()
        .then(data => res.status(200).json(data))
        .catch(err => {
            console.log('Error: ${err}');
            res.status(500).json(err);
        });
});

app.post('/workouts', (req, res, next) => {
    const workout = new Workout({
        muscleGroup: req.body.muscleGroup,
        reps: req.body.reps
    });
    workout.save()
        .then(() => { console.log('Success'); })
        .catch(err => { console.log('Error:' + err); });
    console.log(workout);
});

app.delete("/workouts/:id", (req, res, next) => {
    Workout.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json("Deleted!");
    });
});

app.put('/workouts/:id', (req, res, next) => {
    console.log("id: " + req.params.id)
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        Workout.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    muscleGroup: req.body.muscleGroup,
                    reps: req.body.reps
                }
            },
            { new: true }
        )
            .then((workout) => {
                if (workout) {
                    console.log(workout);
                } else {
                    console.log("no data exist for this id");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        console.log("please provide correct id");
    }
});

app.get('/workouts/:id', (req, res, next) => {
    Workout.findOne({ _id: req.params.id })
        .then(data => {
            res.status(200).json(data)
            console.log(data);
        })
        .catch(err => {
            console.log('Error: ${err}');
            res.status(500).json(err);
        });
});

//NUTRITION COMPONENT STARTS HERE

app.get('/nutritionn', (req, res, next) => {
    //call mongoose method find (MongoDB db.Nutritionn.find())
    Nutrition.find()
        //if data is returned, send data as a response 
        .then(data => res.status(200).json(data))
        //if error, send internal server error
        .catch(err => {
            console.log('Error: ${err}');
            res.status(500).json(err);
        });

});


//serve incoming post requests to /nutritionn
app.post('/nutritionn', (req, res, next) => {
    // create a new nutrition variable and save request’s fields 
    const nutrition = new Nutrition({


        date: req.body.date,
        meal: req.body.meal,
        food: req.body.food,
        calories: req.body.calories
    });
    //send the document to the database 
    nutrition.save()
        //in case of success
        .then(() => { console.log('Success'); })
        //if error
        .catch(err => { console.log('Error:' + err); });
});

//:id is a dynamic parameter that will be extracted from the URL
app.delete("/nutritionn/:id", (req, res, next) => {
    Nutrition.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json("Deleted!");
    });
});

//serve incoming put requests to /nutritionn 
app.put('/nutritionn/:id', (req, res, next) => {
    console.log("id: " + req.params.id)
    // check that the parameter id is valid 
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {

        Nutrition.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {


                    date: req.body.date,
                    meal: req.body.meal,
                    food: req.body.food,
                    calories: req.body.calories
                }
            },
            { new: true }
        )
            .then((nutrition) => {
                if (nutrition) { //what was updated 
                    console.log(nutrition);
                } else {
                    console.log("no data exist for this id");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        console.log("please provide correct id");
    }
});

//find a nutrition based on the id
app.get('/nutritionn/:id', (req, res, next) => {
    //call mongoose method findOne (MongoDB db.Nutritionn.findOne())
    Nutrition.findOne({ _id: req.params.id })
        //if data is returned, send data as a response 
        .then(data => {
            res.status(200).json(data)
            console.log(data);
        })
        //if error, send internal server error
        .catch(err => {
            console.log('Error: ${err}');
            res.status(500).json(err);
        });
});

module.exports = app;