console.log(process.env.PORT);
const app = require('./app');

app.listen(process.env.PORT || 9090);