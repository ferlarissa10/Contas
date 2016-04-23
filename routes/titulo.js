module.exports = function (app) {

   var validator = app.get("validator");
   var titulo_controller = app.controller.titulo_controller;
   var titulo = titulo_controller.titulo;
   var titulos = titulo_controller.titulos;


   var preencheTitulo = function (req) {

      var params = req.body;
      if (req.body.data !== undefined) {
         params = req.body.data;
      }

      titulo.id = validator.trim(validator.escape(params.id));
      titulo.descricao = validator.trim(validator.escape(params.descricao));
      titulo.data = validator.trim(validator.escape(params.data));
      titulo.valor = validator.trim(validator.escape(params.valor));
      titulo.categoria = validator.trim(validator.escape(params.categoria));
      
      return titulo;
   };

   /*			TITULO ROTAS			*/
   app.get('/titulos', function (req, res) {
      console.log('chegou');

      titulo_controller.List(function (resp) {

         res.jsonp({titulos: resp});
      });
   });

   app.get('/titulo/:id', function (req, res) {
      titulo.id = validator.trim(validator.escape(req.params.id));

      titulo_controller.Search(titulo, function (resp) {
         res.json(resp);
      });
   });

   app.post('/titulo', function (req, res) {
      titulo = preencheTitulo(req);

      titulo_controller.Insert(titulo, function (resp) {
         res.json(resp);
      });
      limparTitulo();
   });

   app.put('/titulo', function (req, res) {
      titulo = preencheTitulo(req);
      
      titulo_controller.Update(titulo, function (resp) {
         res.json(resp);
      });
      limparTitulo();
   });

   app.delete('/titulo/:id', function (req, res) {
      titulo.id = validator.trim(validator.escape(req.params.id));

      titulo_controller.Delete(titulo, function (resp) {
         res.json(resp);
      });
   });

   var limparTitulo = function () {
      titulo = {};
   };
   /*			TITULO ROTAS			*/


};