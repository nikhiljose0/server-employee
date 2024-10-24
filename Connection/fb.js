const mongoose=require("mongoose")

mongoose.connect(process.env.DATABASE).then((res)=>{
  console.log("Server Connected to DB")
}).catch((err)=>{
    console.log(err)
})