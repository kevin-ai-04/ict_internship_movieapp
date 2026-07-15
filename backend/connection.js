const mongoose=require('mongoose');
require('dotenv').config();

const mongoUri=process.env.MONGODB_URI;

if (!mongoUri) {
    throw new Error('MONGODB_URI is not set. Copy backend/.env.example to backend/.env and provide a connection string.');
}

mongoose.connect(mongoUri).then((res)=>{
    console.log('DB is connected')
}).catch((res)=>{
    console.log('DB not connected')
})
