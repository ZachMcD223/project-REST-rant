const React = require('react')
const Def = require('../default')

function comment_form(data) {
    return (
      <Def>
        <main>
          <h1>Add Comments</h1>
          <form method="POST" action={`/places/${req.params.id}?_method=PUT`}>
            <div className="row">
              <div className="form-group col-sm-6">
                <label htmlFor="name">Author</label>
                <input className="form-control" id="name" name="name" defaultValue={data.place.name} required />
              </div>
              <div className="form-group col-sm-6">
                <label htmlFor="city">Content</label>
                <input className="form-control" id="city" name="city" />
              </div>
              <div className="form-group col-sm-6">
                <label htmlFor="state">Star Rating</label>
                <input className="form-control" id="state" name="state" />
              </div>
              <div className="form-group col-sm-6">
                <label htmlFor="cuisines">Rant</label>
                <input className="form-control" id="cuisines" name="cuisines" required />
              </div>
            </div>
            <input className="btn btn-primary" type="submit" value="Add Comment" />
          </form>
        </main>
      </Def>
    )
  }

  module.exports = comment_form