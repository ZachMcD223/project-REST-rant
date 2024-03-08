const router = require('express').Router()
const places = require('../models/places')

router.get('/', (req, res) => {
  res.render('places/index', { places })
  

  router.get('/new', (req, res) => {
    res.render('new')
    })

  let places = [{
  name: 'H-Thai-ML',
  city: 'Seattle',
  state: 'WA',
  cuisines: 'Thai, Pan-Asian',
  pic: 'http://placekitten.com/250/250'
}, {
  name: 'Coding Cat Cafe',
  city: 'Phoenix',
  state: 'AZ',
  cuisines: 'Coffee, Bakery',
  pic: 'http://placekitten.com/250/250'
 
}]
})

   

      router.post('/', (req, res) => {
        console.log(req.body)
        res.send('POST /places')
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
