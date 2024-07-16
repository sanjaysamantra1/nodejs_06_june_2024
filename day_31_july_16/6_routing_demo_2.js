const express = require('express');
const userRouter = require('./user_routes');
const productRouter = require('./product_route');
const app = express();

// logger middleware gets invoked before the request goes to the actual route
function logger(req,res,next){
    console.log('control is in middleware')
    console.log('The time is: '+ Date.now())
    next(); // transfers the request to actual route
}
app.use(logger);


app.get('/', (req, res) => {
    console.log('control is in home route')
    res.send('Home Route')
})
app.use('/users', userRouter)
app.use('/products', productRouter)

app.listen(5000, () => {
    console.log('server running at 5000')
});