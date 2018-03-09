const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config(); 

const app = express();
app.use(cors());
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING) 
  .then((db)=>{
       app.set('db', db);
       return db.reset_db_tables()
         .then(()=>{
             console.log('Tables reset')
         })
         
  })
  .catch((err)=>{

    console.error(err)
});

  app.get('/api/check/bin/:shelfID:binID', (req, res)=>{
      const db = req.app.get('db');
      console.log(db);
      db.check_bin([req.params.shelfID, req.params.binID])
        .then((response)=>{
            res.send(response[0])
        })
        .catch((err)=>{
            console.error(err)
        })
  });

  app.get('/api/bin/:shelfID:binID', (req, res)=>{
      const db = req.app.get('db');
      db.getBin([req.params.shelfID, req.params.binID])
        .then((response)=>{
            console.log(response)
            res.send(response[0])
        })
        .catch((err)=>{
            console.error(err)
        })
  })

  app.put('/api/update/bin/:shelfID:binID', (req, res)=>{
      console.log(req.body)
      const db = req.app.get('db');
      db.updateBin([req.params.shelfID, req.params.binID, req.body.name, req.body.price])
        .then((response)=>{
            console.log(response)
            res.send(response[0])
        })
        .catch((err)=>{
            console.error(err)
        })
  })

  app.delete('/api/delete/bin/:shelfID:binID', (req, res)=>{
      const db = req.app.get('db');
      db.deleteBin([req.params.shelfID, req.params.binID])
        .then((response)=>{
            console.log(response)
            res.send(response[0])
        })
        .catch((err)=>{
            console.error(err)
        })
  })

  app.post('/api/create/bin/:shelfID:binID', (req, res)=>{
    const db = req.app.get('db');
    console.log(req.body)
    db.create_bin([req.params.binID, req.body.name, req.body.price, req.params.shelfID])
      .then(([response])=>{
          console.log(response);
          res.status(201).send(response)
          
      })
      .catch((err)=>{
        console.error(err)
    })
  })

  const port = process.env.PORT || 5000;

  app.listen(port, ()=> {
      console.log(`Server listening on port ${port}`)
  });