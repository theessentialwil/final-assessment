const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome home. This is Cohort 12, mbu!');
})

app.get('/index', (req, res) => {
  res.render('index');
})
app.listen(3000, () => console['log']('Elders are listening on port 3000'));
