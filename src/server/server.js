var express=require('express')
var bodyparser=require('body-parser')
var app=express()

var cookieParser = require('cookie-parser');

var nodemailer = require('nodemailer');
var rn = require('random-number');
app.use(cookieParser());
app.use(bodyparser.json())
var options = {
    min:  1000
  , max:  9999
  , integer: true
  }
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tanujdoshi3920@gmail.com',
      pass: 'tanuj3920'
    }
  });

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
//all db things are here
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/shop", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
/*var userschema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    password:String
}, {collection : 'user'});
var user = mongoose.model("user", userschema);*/
var user=require('./schemas/users')
var product=require('./schemas/product')
var cartschema=require('./schemas/cart')
var admin=require('./schemas/admin')
var order=require('./schemas/order')
//take cart
app.post('/takecart',async (req,res)=>{
  var array=[]
  var qty=[]
  const uid=req.body.useroid
  cartschema.find({userid:uid},{_id:0}).exec()
  .then((data)=>{
    //console.log(data)
    data.forEach(d=>{
      array.push(d.productid)
      qty.push(d.qty)
    //  console.log(d)
    })
    console.log('products:'+array)
    console.log('qqty:'+JSON.stringify(qty))    
    product.find({_id:{$in:array}}).exec()
    .then(data=>{
      res.status(200).json({
        cproducts: data,
        pcount:qty
          });
    
    })
  }).catch(error=>{
    console.log(error)
  })
  // console.log("array"+array)
  /*function(err,resp){
    if(err){
      console.log("cant find cart")
  }
  else
  {
    console.log("::::::::::::::::::::::::")
    //console.log(resp.productid)
    console.log("cart item:"+resp)
    res.status(200).json({
      cartitems: resp
        });
  }

  })*/


});
//end of take cart
//search key

app.post('/search',async (req,res)=>{
  const s=req.body.search
  console.log("searc value"+s)
product.find({name:{$regex: '.*' + s + '.*'}},function(err,data){
  console.log("product details:"+data)
  console.log("already oh no");
  res.status(200).json({
    sp: data
      });


})

})




//end of search

//add to cart

app.post('/addtocart',async (req,res)=>{
  const productid=req.body.productid1
  const userid=req.body.userid
  console.log("producid"+productid)
  console.log("userid"+userid)

  const resp=await cartschema.findOne({productid,userid})
  if(resp)
  {
    console.log("already oh no");
    res.status(200).json({
      already: true
        });
  }
  else
  {
  
    new cartschema({ productid: req.body.productid1,
    userid: req.body.userid,
    qty:req.body.qty,
    price:req.body.price}).save(function(err,data){
           if(err)
           {
               console.log("oh no");
               res.status(200).json({
                   isSucceed: false,
                   already: false
                   });
           }
           else{
              
               res.status(200).json({
               isSucceed: true,
               already: false
               });
           }
          
       });
      }
    

    // else
    // {
    //   console.log("already in cart")
    //   res.status(200).json({
    //     already: true
    //     });
    // }
      });




//end
//all products
  app.get('/product',async (req,res)=>{
    product.find({},function(err,products){
      if(err){
        console.log("error")
      }
      else
      {
        product.find({},{},{sort:{ _id : -1}},function(err,latest){
          if(err){
            console.log("Error in fining latest products")
          }
          else
          {
            res.status(200).json({
              list:products,
              sorted:latest
            })
            console.log("products"+products)
            console.log("=============================================")
            console.log("sorted products"+latest)

          }
        })
       
      }
      //var productmap={};

    })

  })
  //fashion products
  app.get('/fashionproduct',async (req,res)=>{
    product.find({ category:"fashion" },function(err,products){
      if(err){
        console.log("error")
      }
      else
      {
        res.status(200).json({
          fashionlist:products
        })
        console.log("fashion products"+products)
      }
      //var productmap={};

    })

  })
  //end

  //get electro product list
  app.get('/electroproduct',async (req,res)=>{
    product.find({ category:"electro" },function(err,products){
      if(err){
        console.log("error")
      }
      else
      {
        res.status(200).json({
          electrolist:products
        })
        console.log("fashion products"+products)
      }
      //var productmap={};

    })

  })
  //end

  //get footwear products
  app.get('/footproduct',async (req,res)=>{
    product.find({ category:"footwear" },function(err,products){
      if(err){
        console.log("error")
      }
      else
      {
        res.status(200).json({
          footlist:products
        })
        console.log("fashion products"+products)
      }
      //var productmap={};

    })

  })
  //end

  //get single product details
  app.post('/productdetail',async (req,res)=>{
    const id = req.body.productid
    const resp=await product.find({'_id':id})
    if(!resp)
    {
          console.log("incorrect")
          res.status(200).json({
            notfound: false
            });
    }
    else
    {
        console.log("product found")
        res.status(200).json({
            productdetail:resp
            });      
    }

  });
  //end

  app.post('/adminlogin',async (req,res)=>{
    //console.log(req.body.email)
    const {email,password} = req.body
    //const admin = new adminschema({email:'admin1@gmail.com', password:'123'}).save()
   // console.log('ADMINNNN: ' + admin)
    console.log("email"+req.body.email)
    const resp=await admin.findOne({email,password})
    if(!resp)
    {
          console.log("incorrect")
          res.status(200).json({
            isLogin: false
            });
    }
    else
    {
        console.log(email)
        console.log("correct details")
        res.status(200).json({
            isLogin: true,
            userd:resp
            });
      

    }
})

    app.post('/login',async (req,res)=>{
        const {email,password} = req.body
        const resp=await user.findOne({email,password})
        if(!resp)
        {
              console.log("incorrect")
              res.status(200).json({
                isLogin: false
                });
        }
        else
        {
            console.log(email)
            console.log("correct details")
            res.status(200).json({
                isLogin: true,
                userd:resp
                });
          

        }
    })
  /*  app.get('/data',(req,res)=>{
        console.log(req.session.usersession)
        res.send('user is: => '+req.session.usersession)
        req.session.test=1
    })*/

    app.post('/register',async (req,res)=>{
        const email = req.body.email
        const resp=await user.findOne({email})
        if(resp)
        {
            console.log("oh no");
                res.status(200).json({
                    emailregister: true
                });
        }
        else{
            var pin=rn(options)
           // console.log("pin is:"+pin)
            var mailOptions = {
                from: 'tanujdoshi3920@gmail.com',
                to: req.body.email,
                subject: 'Verifying Your Mail Account',
                text: "Your OTP IS "+pin
              };
              console.log(mailOptions)
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  //  console.log("Mail cant sent");
                    res.status(200).json({
                        isSucceed: false
                        });
                } else {
                                           
                    //console.log(info)
                  //  console.log("Mail Sent")
                    res.status(200).json({
                    isSucceed: true,
                    otp:pin
                  
                });
            }
              });
            }
          })


    app.post('/registerverify',async (req,res)=>{

       new user({ fname: req.body.fname,
            lname: req.body.lname,
            email:req.body.email,
            password:req.body.password}).save(function(err,data){
                if(err)
                {
                    console.log("oh no");
                    res.status(500).json({
                        isSucceed: false
                        });
                }
                else{
                                          
                    console.log(data)
                    console.log("love you baby")
                    res.status(200).json({
                    isSucceed: true
                    });
                }
            });
        });

         
        //delete

        app.post('/delete',async (req,res)=>{
          console.log("Server delete")
          const id=req.body.id
          console.log("id"+id)
          const resp=await product.deleteOne({_id:id})
          console.log(resp)
          if(!resp)
          {
            console.log("oh no");
            res.status(200).json({
              already: false
                });
          }
          else
          {
            console.log("Deleted")
            res.status(200).json({
              already: true
                });
          }
        })

        //edit product
        app.put('/edit',async (req,res)=>{
          const id=req.body.id
          const name=req.body.name
          const price=req.body.price
          const category=req.body.category
          const stockk=req.body.stock
          const img=req.body.img
          const desc=req.body.desc
          product.updateOne({_id:id},{
            $set:{
              name:req.body.name,
              price:price,
              category:category,
              stock:stockk,
              img1:img,
              description:desc

            }
          }).exec().then(data=>{
            res.status(200).json({
              updated: true
                });
            //console.log("updated")

          }).catch(error=>{
            res.status(200).json({
              updated: false
                });
            //console.log("Err//or")

          })
        })
        
        app.post('/add',async (req,res)=>{

          const name=req.body.name
          const price=req.body.price
          const category=req.body.category
          const stockk=req.body.stock
          const img=req.body.img
          const desc=req.body.desc

          new product({ name:name,
            price:price,
            category:category,
            stock:stockk,
            img1:img,
            description:desc}).save(function(err,data){
                if(err)
                {
                    //console.log("oh no");
                    res.status(500).json({
                        add: false
                        });
                }
                else{
                                          
                    //console.log(data)
                    //console.log("love you baby")
                    res.status(200).json({
                    add: true
                    });
                }
              })
            })
       
//delete cart
app.post('/deletecart',async (req,res)=>{
  console.log("Server delete")
  const pid=req.body.pid
  const uid=req.body.uid
  const resp=await cartschema.deleteOne({productid:pid,userid:uid})
  console.log(resp)
  if(!resp)
  {
    console.log("oh no");
    res.status(200).json({
      already: false
        });
  }
  else
  {
    console.log("Deleted")
    res.status(200).json({
      already: true
        });
  }
})

//end of delete cart
        
      //  console.log(req.body)



//my orders

app.post('/order',async (req,res)=>{
  console.log("inside proccedto check out")

  var array=[]
  var qty=[]
  const uid=req.body.uid
  console.log("uid"+uid)
  cartschema.find({userid:uid},{_id:0}).exec()
  .then((data)=>{
    data.forEach(d=>{
      new order({
        productid:d.productid,
        userid:d.userd,
        qty:d.qty,
        price:d.price
      }).save(function(err,data){
        if(err){
          console.log("Err"+err)
        }
        else
        {
          console.log("Inserted")
        }
      })
     
    //  console.log(d)
    })
    
    
  }).catch(error=>{
    console.log(error)
  })
  console.log('products:'+array)
})

app.listen(8000,()=>console.log('server is listening at 8000'))