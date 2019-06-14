 exports.show =  (req,res) => {
    const path = (req.path === '/') ? '/home' : req.path;

    //render the view

    res.render(`pages${path}`); //views/pages/about we set it on app.js (app.set)
 }; 