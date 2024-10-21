# js-backend-mpa
JS-Backend-App for MultiPageApp @ SoftUni

# STEPS

BASE

1. Initialiaze project 
    * Initialize node package `npm init -y`
    * Install nodemon `npm i -D nodemon`
    * Add start scripts
        "start": "node src/index.js",
        "dev": "nodemon src/index.js"
    * Add initial folder structure & index.js file
    * Change module type to module
    * Add debugging launch.json file
        "name": "Nodemon Debug",
        "program": "${workspaceFolder}/src/index.js"
    * Add env variabe file
    * Install and config dotenv `npm i dotenv`
2. Setup Express
    * Install express `npm i express`
    * Add static resources
    * Configure static middleware (!folder static is renamed to public --> `app.use('/static', express.static('src/public'))`)
    * Add body parser (!if we need to parse more complex data it should be true --> `app.use(express.urlencoded({ extended: false }));`)
    * Add modular routes (routes.js file + add home controller)
3. Setup Handlebars
    * Install handlebars `npm i express-handlebars`
    * Add view engine
    * Set view directory
    * Set view engine
    * Add home view
    * Add layout
    * Add partials dir
    ---TODOS---
    Change the content of main.hbs & layout.hbs
    * Add dynamic page title
4. Add database
    * Install mongoose `npm i mongoose`
    ---TODOS---
    Change db name
    * Connect to local db
    * Add user model
5. Setup Register 
    * Fix navigation links
    * Add template
    * Add authentication controller
    * Render page
    * Add POST action
    * Add auth service
    * Install  bcrypt `npm i bcrypt`
    * Hash password
    * Check for password missmatch
    * Check if user exists
6. Setup Login
    * Install jsonwebtoken `npm i jsonwebtoken`
    * Convert jsonwebtoken to Promise-based lib
    * Add typescript declaration documentation
    * Install cookie-parser `npm i cookie-parser`
    * Add cookie parser middleware
    * Add login page
    * Add POST action
    * Add authService login method
    * Generate jwt
    * Return jwt with http only cookie
    * Auto login after register
7. Setup Logout
8. Setup Authorization
    * Add auth middleware
    * Check and verify token
    * Add a route guard (isAuth) in authMiddleware
9. Setup Error handling
    * Add error notification
    * Add error message util
    * Handle register errors
    * Handle login errors
10. Dynamic navigation

FURTHER STEPS

[X] Modify views
    [X]  login.hbs
    [X]  register.hbs
    [X]  404.hbs 
    [X]  index.hbs
    [X]  main.hbs
    
    Pay attention at the:
        if/else conditions,
        the titles,
        add value,
        add id (if needed),
        change the hrefs,
        the methods!!!

[X] Add static files (public/ css & images)

[X] Copy/paste the rest of the html files

[X] Modify DB name

[X] Modify User model
    Check if the register is only
    { email & password } or { username, email & password }

[X] CREATE

    [X] Add Create page --> views/volcano/create.hbs

    [X] Create a volcanoController.js
        volcanoController.get('/create')
        add it to the routes.js
        volcanoController.post('/create')

    [X] Add volcanoService.js ---> create method .create

    [X] Create a volcano model ---> use volcanoService.create in the volcanoController

    [X] Save the user (owner) too

    [X] Add try/catch in the volcanoController for .post --> link it to the getErrorMessage from erroUtils.js
    
    [X] Add values to the form in create.hbs
 
    [X] Add a value for the drop down selection too --> add a function in volcanoController + create a partial

[X] Fix the navigation by adding a conditional isAuthenticated in the main.hbs

[X] CATALOG

    [X] Add volcanoController.get('/') + render the catalog page

[X] DETAILS

    [X] Add volcanoController.get('/:volcanoId/details') + render the details page

    [X] Add getOne in the volcanoService.js DON'T FORGET TO ADD .lean()

    [X] Create isOwner in volcanoController('/:volcanoId/details')

    [X] Add isOwner and isAuthenticated to details.hbs + conditional statements

    [X] Add new Object 'boughtBy' to the volcano model

    [X] Add new service 'vote' to volcanoService.js

    [X] Add volcanoController.get on '/:volcanoId/vote'

    [X] Add hasBought & voteCount to the volcanoController.get on'/:volcanoId/details'

[X] DELETE

    [X] In the volcanoController + in the volcanoService
    [X] Maybe add an error page (optional)

[X] EDIT

    [X] Add a get in volcanoController + edit.hbs

    [X] Add a post in volcanoController + in the volcanoService (DON'T FORGET { runValidators: true } in the Service)

    [X] Add error handling for non owners (optional!)

[X] ROUT GUARDS

    [X] Add isAuth to logout in authController.js

    [X] Add isAuth to create (post & get) in volcanoController.js

    [X] Add isAuth to vote (post & get) in volcanoController.js

    [X] Add check for isOwner to edit and vote

[X] VALIDATION & ERROR HANDLING

[X] SEARCH

    [X] Add a get req 'search' to the volcanoController (BUT BEFORE DETAILS!)

    [X] For the search.hbs METHOD:GET + make sure to put all names

