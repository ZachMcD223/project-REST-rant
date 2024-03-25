const router = require('express').Router()
const db = require('../models')



router.get('/', async (req, res) => {
  const places = await db.Place.find()
  res.render('places/index', { places })
})

router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
    if (err && err.name == 'ValidationError') {
      let message = 'Validation Error: '
      for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `
          message += `${err.errors[field].message}`
      }
      console.log('Validation error message', message)
      res.render('places/new', { message })
    }
    else {
      res.render('error404')
    }
  })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', async (req, res) => {
  let id = req.params.id
  
   if (!id) {
    res.render('error404')
  }
  else {
   const place= await db.Place.findOne({_id: id})
    res.render('places/show', { place })
  }
})

router.get('/:id/edit',  async (req, res) => {
   let id = req.params.id
 
    if (!id) {
      res.render('error404')
   }
  
  
 else { 
   const place= await db.Place.findById(id)
    res.render('places/edit', { place })
  }
 db.Place.findById(req.params.id)
    .then((place) => {
      res.render("places/edit", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
})

router.put('/:id', async (req, res) => {
  let id = req.params.id
 // if (!id) {rs
 //   res.render('error404')
//  }
 //    else {
      
      if (!req.body.pic) {
              req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
          req.body.city = 'Anytown'
      }
      if (!req.body.state) {
          req.body.state = 'USA'
      }
      await db.Place.findByIdAndUpdate(id, req.body)
      res.redirect(`/places/${id}`)
 // }
})



router.delete('/:id', async (req, res) => {
  let id = req.params.id
  await db.Place.findByIdAndDelete(id)
  res.redirect('/places')
})




module.exports = router
