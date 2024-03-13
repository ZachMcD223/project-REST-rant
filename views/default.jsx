const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body>
            <nav>
  <ul>
    <li>
        <a href="/">Home</a>
    </li>
    <li>
        <a href="/places">Places</a>
    </li>
    <li>
        <a href="/places/new">Add Place</a>
    </li>
  </ul>
</nav>

                {html.children}
            </body>
        </html>
    )
}

module.exports = Def
