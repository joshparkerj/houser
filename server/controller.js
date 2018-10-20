module.exports = {
  getHealth: (req,res,next) => {
    res.send('ok');
  },
  getHouses: (req,res,next) => {
    const db = req.app.get('db');
    db.get_houses()
      .then(r => {
        res.status(200).send(r);
      })
      .catch(err => {
        res.status(500).send('get houses failed');
        console.log(err);
      })
  },
  postHouse: (req,res,next) => {
    const db = req.app.get('db');
    db.post_house([
      req.body.name,
      req.body.address,
      req.body.city,
      req.body.state,
      req.body.zipcode,
      req.body.imgurl,
      req.body.mortgage,
      req.body.rent
    ])
      .then(r => {
        res.status(200).send();
      })
      .catch(err => {
        res.status(500).send('post house failed');
        console.error(err);
      })
  },
  deleteHouse: (req,res,next) => {
    const db = req.app.get('db');
    db.delete_house([req.params.id])
      .then(r => {
        res.status(200).send();
      })
      .catch(err => {
        res.status(500).send('delete house failed');
        console.error(err);
      })
  }
}