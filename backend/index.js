const express=require('express');
const app= new express(); //creating an instance 'app' of express
const cors=require('cors');
const PORT=4000;
const movieModel=require('./model/movieData');

require('./connection');
app.use(cors())
app.use(express.json())

//tofetch the movie data
app.get('/movies',async(req,res)=>{
    console.log('inside')
    try{
        const data=await movieModel.find();
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

app.post('/newmovie',async(req,res)=>{
    try{
        var item=req.body;
        const datasave=new movieModel(item);
        const saveddata=await datasave.save();
        res.send('Post successful')
    } catch (error) {
        console.log(error)
    }
})




//delete a document
app.delete('/movieremoval/:id',async(req,res)=>{
    try{
        await movieModel.findByIdAndDelete(req.params.id);
        res.send('Deleted successfully')
    } catch(error){
        console.log(error)
    }

})

app.listen(PORT,()=>{
    console.log('Server is running on PORT 4000')
})