const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <img src={ data.place.pic} alt={data.place.name} />
          <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
  Edit <i className="fa-solid fa-pencil"></i>
</a>     

<form method="POST" action={`/places/${data.place.id}?_method=DELETE` }> 
  <button type="submit" className="btn btn-danger">
    Delete <i className="fa-solid fa-trash"></i>
  </button>
</form>     

           
          </main>
        </Def>
    )
}

module.exports = show
