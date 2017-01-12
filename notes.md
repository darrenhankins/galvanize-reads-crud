### Notes for this project

---

#### Decoupled App
- Express installs a view folder by default
- just leave the views folder alone
- use `res.json` everywhere instead of `res.render`

---

#### CORS
- If a decoupled app, need to use CORS module
- `$ npm install --save cors`
- In app.js

  ```js
  var cors = require('cors');

  ```
- Put code abve the routes code

  ```js
  app.use(cors({
   origin: 'http://localhost:8080',
   credentials: true
}));

  ```

---

### RESTful Delete API

- `$ npm install --save method-override`

app.js

```js
var methodOverride = require('method-override');

app.use(methodOverride('_method'));

```
- `method="post" action="?_method=delete"`

---

#### ORM's
  - objective.js
  - bookshelf

---
