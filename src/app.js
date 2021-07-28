const express = require('express');
const publicRoutes  = require('./routes/public')
const userRoutes  = require('./routes/user')
const adminRoutes  = require('./routes/admin')

const app = express();
const port = 3000;

app.use(express.static('public'))
app.use('/', publicRoutes);
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);



app.listen(port,()=>{
    console.log(`App listening at http://localhost:${port}`)
});