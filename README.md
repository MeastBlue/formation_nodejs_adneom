# formation_nodejs_adneom

## Configuration ES6

### Instalation babel
 npm install --save-dev babel-loader @babel/runtime @babel/register @babel/preset-env @babel/plugin-transform-runtime @babel/node @babel/core @babel/cli
 
 ### Mise en place de la configruration babel
 
 touch .babelrc
 
 ### Ajout du preset babelrc
 
 {
   "presets": [
     "@babel/preset-env"
   ]
 }
 
 ### Installer nodemon
 npm install --save-dev nodemon
 
 ### changer la commande start
 nodemon --exec babel-node ./api/index.js
 
 ### Install sequelize
 npm install --save sequelize
 npm install -g sequelize-cli
 
 ### Init sequelize in api directory
 sequelize:init
 
  ### Generate database
  sequelize db:create
 
 ### Generate models Author and Book
 sequelize model:generate --name Author --attributes lastName:string,firstName:string
 sequelize model:generate --name Book --attributes title:string,editionDate:date

 ### Modifier les fichier migration et models en vue de la gestiond des foreignKey
 voir fichier models et migrations
  
  
 ### Creation des tables
 sequelize db:migrate
 