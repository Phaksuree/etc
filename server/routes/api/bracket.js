const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Signup
router.post('/generator/user/:username', async (req, res) => {
    const posts = await loadPostCollection();
    await posts.findOne(
        {username:(req.params.username)}
    );
    res.send (await posts.insertOne({
        username: req.params.username,
        bracketId: req.body.bracketId, 
        tourName: req.body.tourName,
        tourType: req.body.tourType,
        size: req.body.size,
        createdAt: new Date()
    }));
})

async function loadPostCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://phaksuree:Nan_79678956@mycluster-bpdtm.mongodb.net', {
        useNewUrlParser: true
    }) 

    return client.db('vue').collection('Bracket');
}

module.exports = router;