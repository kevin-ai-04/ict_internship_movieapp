const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://kevinabey04:MpehW7zcq5mMiBTh@cluster0.ep1aqlq.mongodb.net/moviedb?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log('DB is connected')
}).catch((res)=>{
    console.log('DB not connected')
})
