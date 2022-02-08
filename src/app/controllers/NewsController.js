class NewController{
    
    //[GET] news
    index(req,res){
        res.render('news');
    }
    amen(req,res){
        res.render('home');
    }
}

module.exports = new NewController;