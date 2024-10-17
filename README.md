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
2. Setup Express
    * Install express `npm i express`
    * Add static resources
    * Configure static middleware (!folder static is renamed to public --> `app.use('/static', express.static('public'))`)
    * Add body parser (!if we need to parse more complex data it should be true --> `app.use(express.urlencoded({ extended: false }));`)
    * Add modular routes (routes.js file + add home controller)

