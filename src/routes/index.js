const { Router }= require('express');
const router= Router();

router.get('/test',(resq,res)=>{
    const data={
        "Name":"Carlos Quintero",
        "GitHub":"caqg95"
    };

    res.json(data);
});

module.exports=router;