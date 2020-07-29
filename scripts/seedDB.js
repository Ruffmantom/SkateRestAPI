const mongoose = require("mongoose");
const db = require("../models");
// mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/Skater", { useNewUrlParser: true }
);

const skaterSeed = [
    {
        fullName: "Ryan Allen Sheckler",
        age: 30,
        sponsors: 'Ethika, Etnies, Grizzly Griptape, Independent Trucks, Nixon, Oakley, Plan B, Red Bull, Volcom',
        imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTw9tKh-ueUDntvtlSyUsLOJzZZvcPGE08yeA&usqp=CAU",
        bio: "Ryan Allen Sheckler is an American professional skateboarder and entrepreneur, and was the star of the MTV-produced reality television series Life of Ryan. Sheckler was listed in Fox Weekly's \"15 Most Influential Skateboarders of All-Time\" article.",
        XG: 10,
        DT: 3,
        SLS: 0,
        VPS: 0,
        SS: 0,
        BATB: 0,
        GOS: 0,
        RBHL: 0
    },
    {
        fullName: "Nyjah Huston",
        age: 25,
        sponsors: 'Nike SB, Bones Bearings, Diamond Supply Co, Element, Mob Grip, Monster Energy, Ricta Wheels, Stance',
        imgLink: "https://www.pinterest.com/pin/69383650497771275/",
        XG: 12,
        DT: 5,
        SLS: 19,
        VPS: 0,
        SS: 0,
        BATB: 0,
        GOS: 0,
        RBHL: 0
    },
    {
        fullName: "Tony Hawk",
        age: 52,
        sponsors: 'Birdhouse Skateboards, Nixon, Vans, Independent Trucks',
        imgLink: "https://static.highsnobiety.com/thumbor/H_wQs5Tm8fZi73GOe2xY4ba68oM=/fit-in/1200x720/smart/static.highsnobiety.com/wp-content/uploads/2019/08/23181922/tony-hawk-vogue-73-questions-feature.jpg",
        bio: "Anthony Frank Hawk, nicknamed Birdman, is an American professional skateboarder, actor, stuntman, and the owner of the skateboard company Birdhouse. Hawk completed the first documented 900, licensed a video game series published by Activision, and is one of the pioneers of modern vertical skateboarding.",
        XG: 9,
        DT: 1,
        SLS: 0,
        VPS: 0,
        SS: 0,
        BATB: 0,
        GOS: 0,
        RBHL: 0
    }

]
db.Skater
    .deleteMany({})
    .then(() => db.Skater.collection.insertMany(skaterSeed))
    .then(data => {
        console.log(data.result.n + "posts have been entered!");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    })