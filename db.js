var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var db = null;
module.exports = function (app) {
   if (!db) {
      const sequelize = new Sequelize('financas', 'root', 'namesystem', {
         host: 'localhost',
         dialect: 'mysql',
         logging: false,
         pool: {
            max: 5,
            min: 0,
            idle: 10000
         }
      });
      db = {
         'sequelize': sequelize,
         'Sequelize': Sequelize,
         models: {}
      };
      const dir = path.join(__dirname, "models");
      fs.readdirSync(dir).forEach(function (file) {
         if (file != ".svn") {
            const modelDir = path.join(dir, file);
            const model = sequelize.import(modelDir);
            db.models[model.name] = model;
         }
      });
      Object.keys(db.models).forEach(function (key) {
         if (db.models[key].hasOwnProperty('associate')) {
            db.models[key].associate(db.models);
         }
      });
   }
   return db;
};