const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:5173', // or wherever your frontend runs
  credentials: true
}));
