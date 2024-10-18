# js-backend-app
JS Back-End @ SoftUni

# STEPS

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

____________________________________________________________

CHECK IF THE MAIN ELEMENT SHOULD BE INSIDE THE MAIN LAYOUT (THERE COULD BE STYLES INSIDE!!!)

NEXT STEPS

    [ ] Modify views
        *  login.hbs
        *  register.hbs
        *  404.hbs
        *  index.hbs
        *  main.hbs
        (Pay attention at the if/else conditions in the hbs files and the titles!)

    [ ] Add static files (public/ css & images)

    [ ] Copy/paste the rest of the html files

    [ ] Modify DB name

    [ ] Modify User model
        (Check if the register is only { email & password } or { username, email & password })

    [ ] Modify the catalog page (create.html --> create.hbs)

    [ ] Create a volcanoController.js (GET & POST reqs) and add it in routes.js

    [ ] Modify the paths in main.hbs

    [ ] Create a volcanoService.js and Volcano.js model


