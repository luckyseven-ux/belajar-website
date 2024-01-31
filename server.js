const express= require("express");
const app = express();

const middleware = (req,res,next) => {
	if(req.query.via == "asep"){
		next();
	}else {
		res.send('kaga boleh!!');
	}
}
app.use(middleware);

app.get("/udin",(req,res) => {
	res.send("ada apa bro ini gw udin !!");
})

app.get('/mamah',(req,res) =>{
	res.send('ini ibu');
})


app.listen(80, () => console.log("server starting...."))
