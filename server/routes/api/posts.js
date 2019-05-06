const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// allusers
router.get('/allusers', async (req, res) => {
    const posts = await loadPostCollection();
    res.send(await posts.find({}).toArray())
});

// login
router.get('/login/:username', async (req, res) => {
    const posts = await loadPostCollection();
    res.send(await posts.findOne(
        { username: ( req.params.username ) }
    ));
    console.log(req.params.username);
    
});

// forget
router.get('/forget/:email', async (req, res) => {
    const posts = await loadPostCollection();
    res.send(await posts.findOne(
        { email: ( req.params.email ) }
    ));
    console.log(req.params.email);
    
});

// repassword /*/ยังไม่เสด
router.put('/forget/:id', async (req, res) => {
    const posts = await loadPostCollection();
    var newUser = {};
    newUser = req.body
    res.send(await posts.findOneAndUpdate(
        { _id: (req.params.id) },
        { $set: { "violations" : 3 } }
    ));
    console.log(req.params.email);
    
});

// Check
router.get('/check/:username', async (req, res) => {
    const posts = await loadPostCollection();
    res.send(await posts.findOne(
        {username:(req.params.username)}
    ));
    console.log(req.params.username);
    res.status(201).send();
});

// Signup
router.post('/signup', async (req, res) => {
    const posts = await loadPostCollection();
    await posts.insertOne({
        //text: req.body.text,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        profilename: req.body.profilename,
        createdAt: new Date()
    });
    res.status(201).send();
})

// Delete Posts
router.delete('/:id', async (req, res) => {
    const posts = await loadPostCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
})

async function loadPostCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://phaksuree:Nan_79678956@mycluster-bpdtm.mongodb.net', {
        useNewUrlParser: true
    }) 

    return client.db('vue').collection('Users');
}

module.exports = router;