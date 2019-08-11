const express = require('express');
const router = express.Router();

//item model
//GET api/items
const item = require('../../models/item');

router.get('/', (req,res)=>{
    item.find()
        .sort({date:-1})
        .then(items=>res.json(items))
});

//delete
router.delete('/',(req,res)=>{
    item.findById(req.params.id)
        .then(item=>item.remove().then(()=>res.json({success:true})))
        .catch(err=>res.status(404).json({success:false}))
})


//post
router.post('/',(req,res)=>{
    const newItem = new item({
        name: req.body.name
    })

    newItem
        .save()
        .then(item=>res.json(item ))
})


module.exports = router;