const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/food.jpg" alt="food" />
               
              Photo by <a href="https://unsplash.com/@ben_brunner?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Benjamin Brunner</a> on <a href="https://unsplash.com/photos/red-tomato-beside-green-vegetable-on-white-table-bAcMAhWciiM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
              </div>
              <a href="/places">
  <button className="btn-primary">Places Page</button>
  <button className="btn-primary">Add Places Page</button>
</a>


          </main>
      </Def>
    )
  }
  

module.exports = home
