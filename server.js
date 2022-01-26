const express = require('express');
const app = express();
const posts = [
  {
    username:'bob',
    title:'post1'
  },
  {
    username:'jan',
    title:'post2'
  }
]
app.get('/posts', (req, res) => {
res.json(posts)

})
app.listen(3000)