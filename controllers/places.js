const router = require('express').Router()


router.get('/', (req, res) => {
   

      router.post('/', (req, res) => {
        console.log(req.body)
        if (!req.body.pic) {
          req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
          req.body.city = 'Anytown'
        }
        if (!req.body.state) {
          req.body.state = 'USA'
        }
        places.push(req.body)
        res.redirect('/places')
      })
      

module.exports = router
