//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');
//use mysql database
const mysql = require('mysql');
const app = express();
 
//konfigurasi koneksi
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'caffe'
});
 
//connect ke database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
//set views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//set image
app.use(express.static('views/images'))

//route untuk homepage
app.get('/',(req, res) => {
  let dataCashier = [];
  let dataCategory = [];
  conn.query("SELECT * FROM cashier", (err, data) => {
      dataCashier = data;
  });
  conn.query("SELECT * FROM category", (err, data1) => {
    dataCategory = data1;
});
  let sql = "SELECT product.id as id, product.name as product, product.price as price, product.id_category as id_cat, product.id_cashier as id_cas, category.name as category, cashier.name as cashier FROM product LEFT JOIN category ON product.id_category = category.id LEFT JOIN cashier ON product.id_cashier = cashier.id";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.render('product',{
      results: results, dataCashier, dataCategory
    });
  });
});
 
//route untuk insert data
app.post('/save',(req, res) => {
  let data = {id_cashier: req.body.id_cashier, id_category: req.body.id_category, name: req.body.name, price: req.body.price};
  let sql = "INSERT INTO product SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});
 
//route untuk update data
app.post('/update',(req, res) => {
  let sql = "UPDATE product SET id_cashier='"+req.body.id_cashier+"', id_category='"+req.body.id_category+"', name='"+req.body.name+"', price='"+req.body.price+"' WHERE id="+req.body.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});
 
//route untuk delete data
app.post('/delete',(req, res) => {
  let sql = "DELETE FROM product WHERE id="+req.body.product_id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.redirect('/');
  });
});
 
//server listening
app.listen(8000, () => {
  console.log('Server is running at port 8000');
});