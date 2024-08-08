เริ่มใช้ Nodejs พิมพ์  node
ออกจาก Nodejs พิมพ์  .exit
    พิมพ์ชุดหลายคำสั่งให้สร้างไฟล์ JavaScript เก็บไว้
        run file : node ชื่อไฟล์.js

Non-Blocking/Asynchronous I/O
    โดยปกติโปรแกรมจะทำงานตามลำดับแบบBlocking/Synchronous(ทำตามลำดับขั้นตอนให้เสร็จห้ามข้ามขั้น)
        มี Non-Blocking/Asynchronous ช่วยให้ทำงานข้ามขั้นตอนได้โดยไม่ต้องรอให้แต่ละขั้นทำเสร็จก่อนคือทำงานพร้อมๆกันทุกคนตอน (ช่วยให้ทำงานเสร็จไว)

คุณสมบัติ NodeJs
    ใช้ Google V8 Engine ในการ Compile Javascript
    ทำงานแบบ Single-Thread ( 1Thread : 1Process )
    ทำงานแบบ  Non-blocking , Event Loop และส่วนของ Background (งานที่ต้องใช้เวลาทำนาน)
        Event Loop คือ วนลูปเพื่อมองหางาน งานไหนทำนานก็จะส่งไปที่ Background

คำสั่ง  Asynchronous ใน JavaScript
    setTimeout  หน่วยเป็น ms
        console.log("เริ่มต้นโหลด")
        setTimeout(()=>{
        console.log("กำลังดาวน์โหลด")
        },3000) //หน่วงเวลา 3วินาที
        console.log("จบการทำงาน")        
    setInterval
    Promise
คำสั่ง Synchronous ใน JavaScript
    confirm


จัดการทำงานแบบ Asynchronous 
    CallBack
    Promise
    Async & Await (ปัจจุบันใช้)
CallBack -> Promise -> Async & Await

    CallBack : ทำงานแบบลำดับขั้นตอนโดยฟังก์ชันที่ถูกเรียกใช้งานเมื่ออีกฟังก์ชั่นทำงานเสร็จ 
        ใช้ CallBack กำหนดการกระทำบางอย่าง
            CallBack Hell : นำ Callback Function มาซ้อนกันไปเรื่อยๆ จึงควรใช้ Promise 

    Promise : ทำงานแบบ Asynchronouse ใช้กับงานที่มีลักษณะการDelay แก้ปัญหา CallBack Hell
        Promise(function(resolve,reject){

        })
            การทำงานของ promise
                pending เป็นสถานะเริ่มต้นของ Promise
                    ถ้าทำงานสำเร็จจะเป็น resolve
                    ถ้าล้มเหลวจะเป็น reject
                resolve/fulfilled เป็น parameter ของ callback ซึ่งใช้กำหนดสถานะหากทำงาน สำเร็จ (true)
                reject เป็น parameter ของ callback ซึ่งใช้กำหนดสถานะหากทำงาน ผิดพลาด (false)

                    ระหว่างตรวจสอบสถานะ
                    สามารถกำหนดขั้นตอนต่อไปในการทำงานได้
                        then() : ใช้กับสถานะ resolve
                        catch() : ใช้กับสถานะ reject
                        finally() : ไม่สนสถานะ ใช้ได้เลย
    
    Async&Await  (ทำงานร่วมกับ Promise : resolve , reject)
        Await : //Await : รอให้ขั้นตอนนี้ทำงานเสร็จก่อนแล้วค่อยไปขั้นตอนต่อไป
    

Module : ไฟล์จัดเก็บโค้ด JavaScript เช่น  function , Class , Object , จัดการ Database , จัดการ Image เป็นต้น
     การนำโมดูลมาใช้   
        ตัวแปรรับค่าโมดูล = require(<location>)      : location คือ ชื่อไฟล์ Module
            เช่น const util = require("mymodule")

    การอ่านและเขียนไฟล์
        ใช้ fs (File System)
             อ่านไฟล์แบบ Synchronous(Blocking)
                const ชื่อตัวแปรa=fs.readFileSync("ตำแหน่งไฟล์",encoding)
             เขียนไฟล์แบบ Synchronous
                โครงสร้างคำสั่ง
                    fs.writeFileSync("ตำแหน่งไฟล์",ชื่อตัวแปร)
            อ่านไฟล์แบบ Asynchronous(Non-Blocking)
                fs.readFile("ตำแหน่งไฟล์",encoding,callback)

                fs.readFile("./imyfile/input1.txt","utf-8",(err,data)=>{
                    if(err) return console.log("เกิดข้อผิดพลาด",err)
                    console.log(data)
                })                    
            เขียนไฟล์แบบ Asynchronous
                fs.writeFile("ตำแหน่งไฟล์",ชื่อตัวแปร,callback)

สร้าง Web Server   : Client -> API -> Server  ประกอบไปด้วย Request(คำขอที่ส่ง) , Response(ส่งข้อมูลตอบกลับ)
    เริ่มใช้โดยสร้างแอพของ Node.js
        npm init(กำหนดรายละเอียดเอง) หรือ npm init -y(ไม่ต้องใส่รายละเอียด)
        package.json -เป็นไฟล์ที่เก็บข้อมูลหรือรายละเอียดต่างๆรวมถึง module/package ที่จะใช้ทำงานภายในโปรเจค
    
    http คือ Moduleที่ใช้นำมาควบคุมการทำงานของServer
    http.createServer() คือ คำสั่งสำหรับสร้าง Server โดยสร้างการเชื่อมต่อและรับส่งข้อมูลผ่าน Callback Function
    และรับค่าเข้ามาทำงาน 2 ค่า ได้แก่
        req (request) : รับข้อมูลจากผู้ใช้ Browser มาที่ Server
        res (response) : ส่งข้อมูลตอบกลับจาก Server ไปหาผู้ใช้
                const server = http.createServer(function(req,res){

                })            

        response.write() : เขียนผลลัพธ์ตอบกลับไปหาผู้ใช้ ระบุข้อความ หรือ HTML ก็ได้ (ไม่เขียนก็ได้)
        response.end() : กำหนดจุดสิ้นสุดการรับส่งข้อมูลหรือระบุการตอบกลับไปหาผู้ใช้งาน
        listen(3000) : สั่งให้ Web Server เริ่ม run แล้วเชื่อมต่อที่ port หมายเลข
        3000 หรือใช้ port หมายเลขอื่นก็ได้ เช่น 5000, 8000 เป็นต้น
          
            วิธีดูผลลัพธ์ เปิด Browser พิมพ์ localhost:เลขportที่กำหนด  เช่น localhost:3000

            ถ้าแก้ไขข้อมูล ให้ปิดการทำงานของตัว Serverก่อน โดยพิมพ์ใน Terminal กด Ctrl+C
            แล้ว Run ใหม่ ก็จะขึ้นแสดงอัพเดตข้อมูล

Run app ด้วย nodemon : เมื่อไฟล์เกิดการเปลี่ยนแปลงและถูกบันทึกไฟล์ nodemon จะ restart แอพให้อัตโนมัติ
    การติดตั้ง พิมพ์ npm install nodemon
        การ run พิมพ์ในterminal ว่า  npx nodemon ชื่อไฟล์.js
        หรือ ตั้งค่าใน script โดยพิมพ์ว่า "start": "nodemon ./bin/www" ในไฟล์package.jsob และrun โดยใช้ npm start  ***


Routing : การกำหนดเส้นทาง(URL) ในการอนุญาตให้เข้าถึงข้อมูลรวมไปถึงตรวจสอบ URL Request เพื่อจะได้กำหนดรูปแบบการทำงาน
    HTTP Status Code : เป็นรหัสที่บ่งบอกสถานะของ Request เช่น
        200 Ok (ดำเนินการเสร็จสมบูรณ์)
        201 Create (สร้างข้อมูลใหม่เรียบร้อย)
        400 Bad Request (Server ไม่เข้าใจว่า Request นี้เกี่ยวกับอะไร)
        404 Not Found (หาข้อมูลที่เรียกไม่เจอหรือไม่สามารถใช้งานได้)
        500 Internal Server Error (Request ถูกต้องแต่มีข้อผิดพลาดที่ฝั่ง Server)

            เช่น res.writeHead(404)
    
    localhost:3000/ชื่อurlที่ได้กำหนดเส้นทาง
                const server = http.createServer((req,res)=>{            

                })

HTML Template : ใช้ fs ในการอ่านไฟล์เพื่อนำไฟล์ html เข้ามาทำงาน
    fs.readFileSync(`${__dirname}ตำแหน่งไฟล์`,endcoding) หรือ fs.readFile(`${__dirname}ตำแหน่งไฟล์`,endcoding)

    แสดงข้อมูล req url ไปที่ หน้าเว็บ 2 , 3 อื่นๆ   ใช้ url.parse(req.url,true)  ****
        const {pathName,Query}= url.parse(req.url,true)

Express : มาจัดการปัญหาที่เกิดจาก Node.js คือ ช่วยจัดการปัญหา Web Server (ปัจจุบันนิยมใช้)   ******
    Express.js คือ Framework ของ JavaScript ช่วยให้ใช้งานทำงาน Web Server ให้มีความง่ายและสะดวกสบายมากขึ้น
        ติดตั้งโดยพิมพ์ : npm install express
        การนำ express มาใช้ : 
                const express = require('express')    // นำ express เข้ามาทำงาน
                const app = express()   // เรียกใช้งาน express และเก็บลงในตัวแปรapp
                app.use((req,res)=>{         // path เริ่มต้น
                    res.send("Hello Express.js")
                })
                app.listen(8080,()=>{   // run server ผ่าน port
                    console.log('Start server at port 8080.')
                })


Express & Routing 
    ใช้คำสั่ง use (path เริ่มต้น)
    ใช้ http method (get,post)
        โครงสร้างคำสั่ง : app.method(path,callback function)
    get() : เป็น method สำหรับกำหนดการทำงานตามเส้นทางตามเส้นทางที่ระบุเมื่อ request ถูกส่งเข้ามา
    callback function : สำหรับกำหนดรูปแบบการตอบสนองที่เกิดขึ้นเพื่อส่ง request เข้ามาในเส้นทางดังกล่าว


การใช้งาน Module path
    const path = require('path')
    const ชื่อตัวแปร=path.join(__dirname,'ชื่อไฟล์.hmtl')

            const path=require('path')
            const indexPage = path.join(__dirname,'index.html')
            
            app.get('/',(req,res)=>{
                res.status(200)   // แจ้ง status code
                res.type('text/html')  // กำหนดรูปแบบเนื้อหา 
                res.sendFile(indexPage)
            })

Class Router : การทำระบบที่มีความซับซ้อนมากขึ้น มีเส้นทาง(route) มากขึ้น  จัดการ Routing โดยใช้ router

            const express = require('express')
            const router = express.Router()     //ใช้ router 
            router.get('/',function(req,res)=>{})
            router.get('/prodcut',function(req,res)=>{})
            app = express()
            app.use(router)    // นำ router ไปกำหนดเส้นทางในแอพ


            Router Parameter : กำหนดตัวแปรส่งไปพร้อมกันกับ Path โดยใช้เครื่องหมาย colon
                เช่น  product/:id
                     product/:category/:id

                        การรับค่า parameter
                            request.params['ชื่อparameter'] หรือ request.params.ชื่อparameter

    การเปลี่ยนเส้นทางด้วย redirect  : เปลี่ยนเส้นทางการแสดงผลไปยัง Path อื่นๆ 
        response.reditect(path)
        response.reditect(URL)

Static File : ไฟล์ที่ไม่มีการเปลี่ยนแปลงเนื้อหา เช่น ไฟล์ภาพ วิดิโอ เสียง หรือไฟล์โค้ด (เป็นไฟล์ตายตัวไม่มีการเปลี่ยนแปลงเนื้อหา)
    มาตราหลักที่ทั่วโลกใช้ คือ เก็บไฟล์ static ในโฟลเดอร์ที่มีชื่อว่า public
        การตั้งค่ากายใช้งาน
            const express=require('express)
            const app=express()

            app.use(express.static('public'))


Dynamic File(View&Templates) : ไฟล์ที่มีความยืดหยุ่นปรับเปลี่ยนได้โดยทำงานตามเงื่อนไขที่กำหนด (แตกต่างจาก Static ที่ตายตัว)
    View คือ แสดงเนื้อหาใน Web Browser ในรูปแบบ Dynamic Web Page เช่นดึงข้อมูลจากที่อื่นมาแทรงในส่วน Template
    Template คือ หน้าตาของ application โดยไฟล์ของ template จะเก็บไว้ในโฟลเดอร์ที่มีชื่อว่า views เท่านั้น
        ติดตั้งส่วนที่จัดการ template คือ "Template Engine" เช่น  EJS , Pug , Jade
            ติดตั้ง EJS Template Engine พิมพ์ npm install ejs
                EJS : โครงสร้างที่มีคล้ายๆ HTML และสามารถพิมพ์คำสั่ง JavaScript เข้าไปใน HTML ได้โดยที่มีไฟล์เป็นนามสกุล .ejs

            ตั้งค่าใช้งาน Template 
                const express = require('express')
                const ejs = require('ejs')
                const app = express()

                //ตั้งค่าให้เป็น Engine สำหรับ run app
                app.set('view engine','ejs')
            การแสดง Template
                router.get('/data',(req,res)=>{
                    res.render("ชื่อ Template")
                })


            การส่งข้อมูลไปที่ Template
                res.render("ชื่อ Template",{
                    property:value,
                    property:value
                })
                การแสดงข้อมูลที่ Template
                    <%= ชื่อ Propertie %>
                    ในกรณีส่งเป็นรูปแบบ html ระบุเป็น
                        <%- ชื่อ Propertie %>
            
            โครงสร้างควบคุม (เงื่อนไข)
                <% if(condition) {%>
                <%} else{%>
                <%} %>
                        เช่น
                            <% if(age>=18){%>
                                <h1>ผ่านเกณฑ์การใช้งาน</h1>
                            <%}else {%>
                                <h1>ไม่ผ่านเกณฑ์การใช้งาน</h1>
                            <%} %>   


            โครงสร้างควบคุม (การทำซ้ำ)    
                <% for(i=1;i<10;i++>){%>

                // คำสั่งที่ต้องการทำซ้ำ

                <%} %>
                        เช่น
                            <% for(i=1;i<=10;i++){%>
                                <p>ลำดับที่ <%= i%></p>
                            <%} %>


        ส่งข้อมูลแบบ array
         const products = ["เสื้อ","พัดลม","หูฟัง","คีร์บอดร์ด"]  ใน .js
            
            <p><%= products %></p>     ใน .ejs
            <p><%= products[0] %></p>

        
        ส่งข้อมูลแบบ Object
    เช่น     
        //ใน .js
            const products = [
        {name:"เสื้อผ้า",price:500,image:"../public/images/products/product1.png"},
        {name:"พัดลม",price:200,image:"../public/images/products/product2.png"},
        {name:"หูฟัง",price:300,image:"images/products/product3.png"}
    ]
        //ใน .ejs
        <% Object.values(products).forEach(function(item){%>
        <img src="<%= item.image %>" alt="">
        <p>ชื่อสินค้า : <%= item.name %></p>
        <p>ราคา : <%= item.price %>บาท</p>
        <hr>
    <%}) %>

การแทรกไฟล์ในTemplate (Include) : ใช้ในกรณีที่มีหลายเมนู(nav) และต้องการให้หน้าเว็บมีองค์ประกอบเหมือนกัน เช่น  Header Footer
    <%- include("ชื่อไฟล์")%>


การรับและส่งข้อมูล (HTML FORM)
    <form method="get|post" action="path">
    // Element
    </form>

    รูปแบบการส่งข้อมูล : method="getหรือpost"(รูปแบบการส่งข้อมูล)
        get คือ ส่งข้อมูลพร้อมแนบข้อมูลไปพร้อมกับ url (ไม่มีความปลอดภัยเพราะถูกมองเห็นและไม่ควรใช้งานร่วมกับข้อมูลแบบ sensitive data)
        post คือ ส่งข้อมูลพร้อมซ่อนค้าข้อมูลระหว่างที่ส่งไป(มีความปลอดภัย)
    รูปแบบการรับส่งข้อมูล : action="path" (ระบุ path ปลายทางเพื่อรับข้อมูลที่ส่งไปจากฟอร์ม)
        การรับค่าข้อมูลจากฟอร์ม(Express)
            app.get() : รับข้อมูลจากฟอร์มแบบ get method
            app.post() : รับข้อมูลจากฟอร์มแบบ post method
    

        จัดการข้อมูลที่ส่งแบบ GET
            การส่งค่าจากแบบฟอร์ม
                <form method="get" action="path"> </form>
            การรับค่า
                app.get("path",(req,res)=>{
                    console.log(req.query) //object ข้อมูลที่ส่งจากฟอร์ม
                })

        จัดส่งข้อมูลแบบ POST
            การส่งค่าจากแบบฟอร์ม
                <form method="post" action="path"></form>
            การรับค่า
            app.post('post',(req,res)=>{
                console.log(req.body)  // object ข้อมูลที่ส่งจากฟอร์ม
            })

                การตั่งค่าใน app.js
                    app.use(express.urlencoded{extended:false})
                    //ต้องระบุก่อน router

        res.render('form') : แสดงใน routerเพื่อเมื่อกรอกข้อมูลไปแล้วและกดบันทึกมันจะคืนค่าแบบฟอร์มบนหน้าเว็บให้
           เช่น         router.post('/insert',(req,res)=>{
                        console.log(req.body)
                        res.render('form')
                    })

ใช้ mongoose ในการเชื่อมต่อระหว่าง API กับ Database
    ติดตั้งโดยพิมพ์ npm install mongoose@6.10.0  //version 6.10.0 รองรับ callback function
        โครงสร้างคำสั่ง
            mongoose.connect('mongodb://<hostname:port>/<database>')
    
    เชื่อม MongoDB ด้วย Mongoose
        const mongoose = require('mongoose')
        mongoose.connect('mongodb://<hostname:port>/<ชื่อdatabaseที่ต้องการเชื่อม>',{
        useNewUrlParser:true,
        useUnifiedTopology:true

        }).catch(err=>console.log(err))
    
            // hostname : port นำมาจาก mongoDB
                เช่น localhost:27017
            // ถ้ามีข้อผิดพลาดเกิดขึ้นจะวิ่งไปที่ catch

        การสร้าง Schema (Document) :โครงสร้างในการเก็บข้อมูล
            mongoose.Schema({
                field:type,
                field:type
            })
        
        การสร้าง Model (สร้าง schemaมาใส่ในโฟลเดอร์ models และสร้าง schemaก่อน แล้วค่อยพิมพ์คำสั่ง model)
            mongoose.model("ชื่อCollection",schema)
            
            Model คือ ส่วนที่ใข้จัดการเกี่ยวกับข้อมูล เช่น

            let Product=mongoose.model('ชื่อ Collection',ชื่อตัวแปรที่กำหนดของSchema)

            module.exports = Product; // export คือ นำข้อมูลออกไปใช้งาน
            
                    // ใช้งาน mongoose

                    const mongoose = require('mongoose')


                    // เชื่อมไปยัง MongoDB
                    mongoose.set("strictQuery", false);
                    const dbUrl = 'mongodb://localhost:27017/productDB'
                    mongoose.connect(dbUrl,{
                        useNewUrlParser:true,
                        useUnifiedTopology:true
                    }).catch(err=>console.log(err))

                    // ออกแบบ Schema

                    let productSchema=mongoose.Schema({
                        name:String,
                        price:Number,
                        image:String,
                        description:String
                    })

                    // สร้างModel

                    let Product=mongoose.model("products",productSchema)

                    // export model

                    module.exports = Product
        
                    // เรียกใช้งาน model พิมพ์ในส่วนของ router
                    const Product = require('../models/products')

        การบันทึกข้อมูล
        
        *ในส่วนของ โฟลเดอร์ models 
            // ออกแบบฟังก์ชันสำหรับบันทึกข้อมูล
            module.exports.ชื่อsave = function(model,data){
                model.save(data)
            }        
        
        *ในส่วนของ router
            router.post('/insert',(req,res)=>{
                let data = new Product({
                    name:req.body.name,
                    price:req.body.price,
                    image:req.body.image,
                    description:req.body.description
                })
                Product.saveProduct(data,(err)=>{
                    if(err) console.log(err)
                    res.redirect('/')
                })
            })

อัพโหลดด้วย Multer
    -ติดตั้ง multer
        npm install multer
    -ตั้งค่า form
        <form class="form-horizontal"
        enctype="multipart/form-data">
    -กำหนด Option (ตำแหน่งจัดเก็บไฟล์,ชื่อไฟล์(ชื่อไฟล์ห้ามซ้ำกัน))
        const multer=require("multer");
        const storage=multer.diskStorage({
            destination:function(req,file,cb){      // ตำแหน่งเก็บไฟล์ภาพ
                cb(null,'./public/images/products');
            },
            filename:function(req,file,cb){
                cb(null,Date.now()+".jpg");      //กำหนดชื่อไฟล์ไม่ซ้ำกันในDate
            }
        })

    -กำหนดการอัพโหลดไฟล์
        const upload = multer({
            storage:storage
        })
    -บันทึกข้อมูล
        router.post('/insert',upload.single('image'),(req,res)=>{
            image:req.file.filename
        })

การแสดงผลข้อมูล
    Product.find().exec((err,doc)=>{
        res.render('index',{products:doc})
    })


ลบข้อมูลและยืนยันการลบ
//ใน.ejs
    <a href="/delete/<%=item._id%>" onclick="return confirm('คุณต้องการลบหรือไม่?')>ลบ</a>

//ในrouter
router.get('/delete/:id',(req,res)=>{
    Product.findByIdAndDelete(req.params.id,
    {useFindAndModify:false}).exec(err=>{
        res.redirect('/manage')
    })
})


แก้ไขปัญหาการแสดงผล โดยใช้ if เข้ามา check
    เช่น
        <% if(ชื่อตัวแปร) {%>
        <% } %>

การเก็บข้อมูลใน Browser ใช้ Cookie , Session

Cookie คือ เป็นรูปแบบการเก็บข้อมูลไว้ในเครื่องผู้ใช้เพื่อที่จะนำข้อมูลดังกล่าวมาใช้ในภายหลังถึงจะปิด Browser ไปแต่ข้อมูลใน      
           Cookie ยังคงอยู่ (ใช้ cookie ในการการเข้าถึงสิทธ์ข้อมูลบางอย่าง  เหมาะสำหรับเก็บข้อมูลที่ไม่เป็นความลับเพราะเก็บข้อมูลในฝั่ง Client)

    คุณสมบัติของ Cookie
        -ข้อมูลcookieจะเก็บไว้ในไฟล์ Text ธรรมดา ซึ่งcookieของแต่ละเว็บจะถูกแยกคนละไฟล์
        -cookieมีระดับความปลอดภัยที่ค่อนข้างต่ำ เนื่องจากเก็บที่ฝั่งClient จึงเหมาะจะใช้เก็บข้อมูลที่ไม่เป็นความลับ
        -ในกรณีที่cookieหมดอายุหรือไฟล์ที่เก็บข้อมูลcookieเสียหายก็จะไม่สามารถใช้งานcookieได้
    
    การใช้งาน Cookies
        ติดตั้งโมดูล : npm install cookie-parser
        การตั้งค่าใช้งาน :  const cookieParser = rquire('cookie-parset')
                        app.use(cookieParser())
        การเก็บข้อมูลและสร้างcookie : res.cookie("ชื่อcookie","ค่าในcookie")
        การอ่านข้อมูล : req.cookie.ชื่อcookie
        การกำหนดอายุcookie : res.cookie("ชื่อ cookie","ค่าใน cookie",{maxAge:หน่วยมิลลิวินาที})
        การลบ cookie : res.clearCookie("ชื่อ cookie ที่ต้องการลบ")
    
    เช่น

//ใน app
const cookieParser = require('cookie-parser')
app.use(cookieParser())

//ใน router
router.get('/manage',(req,res)=>{
    if(req.cookies.login){
        Product.find().exec((err,doc)=>{
            res.render('manage',{products:doc})
        })
    }else{
        res.render('admin')
    }
})

router.post('/login',(req,res)=>{
    const username = req.body.username
    const password = req.body.password
    const timeExpire= 10000  //10วินาที

    if(username=="admin" && password=="123"){
        // สร้าง cookie
        res.cookie('username',username,{maxAge:timeExpire})
        res.cookie('password',password,{maxAge:timeExpire})
        res.cookie('login',true,{maxAge:timeExpire}) // true => login เข้าสู่ระบบ    
        res.redirect('/manage')
    }else{
        res.render('404')
    }
})

//ออกจากระบบ
router.get('/logout',(req,res)=>{
    res.clearCookie('username')
    res.clearCookie('password')
    res.clearCookie('login')
    res.redirect('/manage')
})


Session คือ เก็บข้อมูลไว้ใน server เพื่อที่จะนำข้อมูลดังกล่าวมาใช้ในภายหลัง (เหมาะสำหรับการเก็บข้อมูลที่เป็นความลับเพราะเก็บข้อมูลSessionไว้ที่ฝั่งServer)
    คุณสมบัติ  
        -ผู้ใช้ทำการเชื่อมต่อกับเว็บไซต์หรือทำงานกับ server ตัวserverจะสร้างรหัสสำหรับอ้างอิงผู้ใช้คนนั้นโดยรหัสดังกล่าวจะเรียกว่า session ID โดยผู้ใช้ที่เชื่อมต่อจะมี Session ID ที่มีค่าไม่ซ้ำกัน สำหรับอ้างอิงตัวผู้ใช้งาน
        -Session ID จะถูกอ้างอิงระหว่างที่ผู้ใช้งานเชื่อมต่อกับ Server และเมื่อยกเลิกการเชื่อมต่อค่า Session ID ก็จะถูกยกเลิกด้วย เช่น เมื่อผู้ใช้ทำการปิด Browser และเมื่อมีการเชื่อมต่อใหม่อีกครั้ง ค่าSessionIDจะถูกสร้างใหม่
        -ข้อมูลใน Session จะนำมาจำแนกผู้ใช้แต่ละคนออกจากกัน มันจะใช้ได้เฉพาะกับผู้ใช้คนๆนั้นไม่สามารถใช้งานร่วมกับคนอื่นได้
        -ค่า Session ID ไม่สามารถใช้ร่วมกับ Browser ได้ เช่น Session ที่ทำงานในGoogle Chrome ไม่สามารถนำไปใช้กับ Firebox ได้
        -ข้อมูล Session ที่สร้างขึ้น สามารถนำไปทำงานในแต่ละ Page ได้เหมือนกับ Cookie เลย
        -ข้อมูล Session จะใช้งานได้แค่ชั่วคราว คือเชื่อมต่อเมื่อเวลาเปิด Browser แต่เมื่อปิด Browser ไปข้อมูลก็จะถูกยกเลิกการเชื่อมต่
        -ถ้าต้องการให้สภาพการเชื่อมต่อยังคงอยู่หรือการทำงานเหมือน Cookie จำเป็นต้องอาศัยการจัดเก็บ Session ID ไว้ที่เครื่องผู้ใช้และเก็บข้อมูล Session ไว้ที่ Server แทน

    
    การใช้งาน Session
        ติดตั้งโมดูล : npm install express-session
        การตั้งค่าใช้งาน : const session = require('express-session')
                       app.use(session({secret:"key สำหรับสร้าง session id",resave:false,saveUninitialized:false}))
        การเก็บข้อมูล Session : req.session.ชื่อsession = ค่าใน session
        การอ่านข้อมูลใน Session : req.session.ชื่อsession
        การกำหนดอายุ Session :  req.session.cookie.maxAge = หน่วยมิลลิวินาที
        การลบ Session : res.session.destroy((err)=>{
                           การทำงานเมื่อลบ Session เสร็จ
                          })

    เช่น

        //เข้าสู่ระบบ
        router.post('/login',(req,res)=>{
            const username = req.body.username
            const password = req.body.password
            const timeExpire= 30000  //30วินาที
            
            if(username=="admin" && password=="123"){
                //สร้าง session
                req.session.username =username
                req.session.password=password
                req.session.login= true
                req.session.cookie.maxAge = 30000  //30วินาที
                res.redirect('manage')

            }else{
                res.render('404')
            }
        })

            //ออกจากระบบ
            router.get('/logout',(req,res)=>{
                req.session.destroy((err)=>{
                    res.redirect('/manage')
                })
            })





    


    