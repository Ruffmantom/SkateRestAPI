const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/userPosts"
);

const skaterSeed = [
    {
        fullName:"Ryan Allen Sheckler",
        age:30,
        sponsors:'Ethika, Etnies, Grizzly Griptape, Independent Trucks, Nixon, Oakley, Plan B, Red Bull, Volcom',
        imgLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTw9tKh-ueUDntvtlSyUsLOJzZZvcPGE08yeA&usqp=CAU",
        bio:"Ryan Allen Sheckler is an American professional skateboarder and entrepreneur, and was the star of the MTV-produced reality television series Life of Ryan. Sheckler was listed in Fox Weekly's \"15 Most Influential Skateboarders of All-Time\" article.",
        XG:3,
        DT:10,
    },
    {
        fullName:"Nyjah Huston",
        age:25,
        sponsors:'Nike SB, Bones Bearings, Diamond Supply Co, Element, Mob Grip, Monster Energy, Ricta Wheels, Stance',
        imgLink:"https://www.pinterest.com/pin/69383650497771275/",
        XG:12,
        DT:5,
        SLS:19
    },
    {
        fullName:"Ryan Allen Sheckler",
        age:30,
        sponsors:'Ethika, Etnies, Grizzly Griptape, Independent Trucks, Nixon, Oakley, Plan B, Red Bull, Volcom',
        imgLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTw9tKh-ueUDntvtlSyUsLOJzZZvcPGE08yeA&usqp=CAU",
        bio:"Ryan Allen Sheckler is an American professional skateboarder and entrepreneur, and was the star of the MTV-produced reality television series Life of Ryan. Sheckler was listed in Fox Weekly's \"15 Most Influential Skateboarders of All-Time\" article.",
        XG:3,
        DT:10,
    }

]
db.Skater
    .remove({})
    .then(()=> db.Post.collection.insertMany(skaterSeed))
    .then(data => {
        console.log(data.result.n + "posts have been entered!");
        process.exit(0);
    })
    .catch(err =>{
        console.log(err);
        process.exit(1);
    })