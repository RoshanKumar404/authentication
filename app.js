// const express=require('express')
// const cookieParser=require('cookie-parser')
// const app= express();
// app.use(cookieParser())

// app.get('/',function (req,res) {
//     res.cookie('name','babu')
//     res.send('tum sikh rhe ho')
//     console.log('cookie set ho gya hau');
    
    
// })
// app.get('/route1',function(req,res){
//     console.log(`cookie of route1 : `, req.cookies);
    
//     res.send('jai ho baba ki')
// });

// app.listen(3222, function(){
//     console.log('your server is running on port 3222');
    
// })
const bcrypt= require('bcrypt')
const saltrounds= 10;

bcrypt.genSalt(saltrounds,function (err,salt) {
    bcrypt.hash('john',salt,function (err,hash) {
        console.log(hash);

        bcrypt.compare("johny",hash,function (err,result) {
            console.log(result);
            
        })
      
        
    })

    
    
})

