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
  res.render('index')
});
app.get('/t', function(req, res) {
  res.render('indexo')
});
app.post("/bck",function(req,res){
  const a=req.body.lat
  const b=req.body.lon
  console.log(a)
  console.log(b)
    axios.get('http://dev.virtualearth.net/REST/V1/Routes/LocalInsights?waypoint='+req.body.lat+','+req.body.lon+'&TravelMode=Driving&Optimize=time&MaxTime=20&TimeUnit=Minute&type=Hospitals&key=Akm-NUKYwLBqtU3z7n7uftlnRXC6iv55a9VqDZEkxLas1QkYTQeOTn3Isr0MRP9w')
    .then(function (response) {
      const heading=response.data.resourceSets[0].resources[0].categoryTypeResults[0].categoryTypeSummary
      const base = response.data.resourceSets[0].resources[0].categoryTypeResults[0].entities
      mza=[]
      const l = base.length;
      for (i = 0; i < base.length; i++) {
      mza.push(base[i])
}
res.render('indexo',{array:mza,hd:heading})
    })

});
