module.exports = {
  getHealth: (_, res) => {
    res.send('ok');
  },
  getHouses: (req, res) => {
    const db = req.app.get('db');
    db.get_houses()
      .then((r) => {
        res.status(200).send(r);
      })
      .catch(() => {
        res.status(500).send('get houses failed');
      });
  },
  postHouse: (req, res) => {
    const db = req.app.get('db');
    db.post_house([
      req.body.name,
      req.body.address,
      req.body.city,
      req.body.state,
      req.body.zipcode,
      req.body.imgurl,
      req.body.mortgage,
      req.body.rent,
    ])
      .then(() => {
        res.status(200).send();
      })
      .catch(() => {
        res.status(500).send('post house failed');
      });
  },
  deleteHouse: (req, res) => {
    const db = req.app.get('db');
    db.delete_house([req.params.id])
      .then(() => {
        res.status(200).send();
      })
      .catch(() => {
        res.status(500).send('delete house failed');
      });
  },
};
