function apikey(req,res,next){
    const apiKey = '1234'
    console.log(req.query)
    if(req.query.api_key && (req.query.api_key ===apiKey)){
        next()
    }
    else{
        res.json({
            msg:"Invalid Authentication"
        })
    }
    //if not added, page will just continue to load; tells your work is done

}

module.exports = apikey