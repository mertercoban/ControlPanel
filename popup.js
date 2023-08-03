

var isInfoVisible = {};
function showAll(person) {
    var content = document.getElementById('myModal' + person);
    if (isInfoVisible[person]) {
        content.style.display = 'none';
        isInfoVisible[person] = false;
    }
    else {
        content.style.display = 'block';
        isInfoVisible[person] = true;
    }
}

const authRoutes = require('./router/authRoutes')
const cookieParser = require('cookie-parser')
const {requireAuth, checkUser} = require('./middlewares/authMiddleware')

app.get('*', checkUser)
app.use('/', authRoutes)
app.use('/login',requireAuth,adminRoutes)
app.use(cookieParser())