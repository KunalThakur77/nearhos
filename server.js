const express=require("express");
const bodyParser=require("body-parser")
const axios=require("axios")

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.listen( process.env.PORT ||3000,function(){
  console.log("Server Started on port 3000")
});

app.get('/', function(req, res) {
  axios({
    "method":"GET",
    "url":"https://apility-io-ip-geolocation-v1.p.rapidapi.com/%7Bip%7D",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"apility-io-ip-geolocation-v1.p.rapidapi.com",
    "x-rapidapi-key":"c8ae003968msh5b860412c448e98p1e3983jsn370917ba08f1",
    "accept":"application/json",
    "useQueryString":true
    }
    })
    .then((response)=>{

    })
    .catch((error)=>{
      console.log(error)
    })
//   axios.get('http://api.ipstack.com/check?access_key=47692fd4f78ff8a355e5479f6f976edf')
//   .then(function(respo){
//     const ci = respo.data.city
//     const zi = respo.data.zip
//   axios.get('http://dev.virtualearth.net/REST/V1/Routes/LocalInsights?waypoint='+ci+'&postalcode='+zi+'&TravelMode=Driving&Optimize=time&MaxTime=20&TimeUnit=Minute&type=Hospitals&key=Akm-NUKYwLBqtU3z7n7uftlnRXC6iv55a9VqDZEkxLas1QkYTQeOTn3Isr0MRP9w')
//   .then(function (response) {
//     const heading=response.data.resourceSets[0].resources[0].categoryTypeResults[0].categoryTypeSummary
//     const base = response.data.resourceSets[0].resources[0].categoryTypeResults[0].entities
//     mza=[]
//     const l = base.length;
//     for (i = 0; i < base.length; i++) {
//     mza.push(base[i])
// }
// res.render('indexo',{array:mza,hd:heading,oho:ci})
//   })
//   })
res.render('index')
});
// app.get('/t', function(req, res) {
//   res.render('indexo')
// });
// app.post("/bck",function(req,res){
//   const a=req.body.lat
//   const b=req.body.lon
//   console.log(a)
//   console.log(b)
//     axios.get('http://dev.virtualearth.net/REST/V1/Routes/LocalInsights?waypoint='+req.body.lat+','+req.body.lon+'&TravelMode=Driving&Optimize=time&MaxTime=20&TimeUnit=Minute&type=Hospitals&key=Akm-NUKYwLBqtU3z7n7uftlnRXC6iv55a9VqDZEkxLas1QkYTQeOTn3Isr0MRP9w')
//     .then(function (response) {
//       const heading=response.data.resourceSets[0].resources[0].categoryTypeResults[0].categoryTypeSummary
//       const base = response.data.resourceSets[0].resources[0].categoryTypeResults[0].entities
//       mza=[]
//       const l = base.length;
//       for (i = 0; i < base.length; i++) {
//       mza.push(base[i])
// }
// res.render('indexo',{array:mza,hd:heading})
//     })
//
// });
app.post("/f",function(req,res){
  const kick = req.body.ip
    axios.get('http://api.ipstack.com/'+kick+'?access_key=47692fd4f78ff8a355e5479f6f976edf')
    .then(function(respo){
      const ci = respo.data.city
      const zi = respo.data.zip
    axios.get('http://dev.virtualearth.net/REST/V1/Routes/LocalInsights?waypoint='+ci+'&postalcode='+zi+'&TravelMode=Driving&Optimize=time&MaxTime=30&TimeUnit=Minute&type=Hospitals&key=Akm-NUKYwLBqtU3z7n7uftlnRXC6iv55a9VqDZEkxLas1QkYTQeOTn3Isr0MRP9w')
    .then(function (response) {
      const heading=response.data.resourceSets[0].resources[0].categoryTypeResults[0].categoryTypeSummary
      const base = response.data.resourceSets[0].resources[0].categoryTypeResults[0].entities
      mza=[]
      const l = base.length;
      for (i = 0; i < base.length; i++) {
      mza.push(base[i])
  }
  res.render('indexo',{array:mza,hd:heading,oho:ci})
    })
    .catch((error)=>{
      res.render("error")
    })
    })

})





app.post("/k",function(req,res){
  const kick = req.body.ip
  const l = req.body.dek
    axios.get('http://api.ipstack.com/'+kick+'?access_key=47692fd4f78ff8a355e5479f6f976edf')
    .then(function(respo){
      const ci = respo.data.city
      const zi = respo.data.zip
    axios.get('http://dev.virtualearth.net/REST/V1/Routes/LocalInsights?waypoint='+l+'&TravelMode=Driving&Optimize=time&MaxTime=30&TimeUnit=Minute&type=Hospitals&key=Akm-NUKYwLBqtU3z7n7uftlnRXC6iv55a9VqDZEkxLas1QkYTQeOTn3Isr0MRP9w')
    .then(function (response) {
      const heading=response.data.resourceSets[0].resources[0].categoryTypeResults[0].categoryTypeSummary
      const base = response.data.resourceSets[0].resources[0].categoryTypeResults[0].entities
      mza=[]
      const jj = base.length;
      for (i = 0; i < base.length; i++) {
      mza.push(base[i])
  }
  res.render('indexo',{array:mza,hd:heading,oho:l})

    })
    .catch((error)=>{
      res.render("error")
    })
    })

})
