module.exports = function (app) {

   var titulos = exports.titulos = [];
   var titulo = exports.titulo = {
      id: "",
      data: "",
      descricao: "",
      valor: "",
      categoria: ""
   };
   var Titulo = app.db.models.titulo;

   function enviar(obj, callback) {
      callback(obj);
   };

   /*         --Listar--        */
   var List = function (callback) {
      Titulo.findAll().then(function (titulosResult) {
         titulosResult.forEach(function (tituloResult) {
            titulos.push(tituloResult.dataValues);
         });
         enviar(titulos, callback);
         titulos = [];
      });
   };
   /*         --Listar--        */

   /*         --Search--        */
   var Search = function (titulo, callback) {
      Titulo.findOrCreate({where: {id: titulo.id}}).then(function (tituloResult) {
         console.log(tituloResult[0].dataValues);
         enviar(tituloResult[0].dataValues, callback);
         titulo = {};
      });
   };
   /*         --Search--        */

   /*         --Insert--        */
   var Insert = function (titulo, callback) {

      if (titulo.data == '') {
         titulo.data = null;
      }
      else {
         titulo.data = new Date(titulo.data);
         /*Validação da Data para salvar no formato Date no banco*/
      }

      Titulo.create(titulo).then(function (titulo) {
         enviar((titulo ? '1' : '0') + ' Registro inserido', callback)
      }).catch(function (error) {
         enviar(error, callback);
      });

   };
   /*         --Insert--        */

   /*         --Update--        */
   var Update = function (titulo, callback) {

      if (titulo.data == '') {
         titulo.data = null;
      }
      else {
         titulo.data = new Date(titulo.data);
         /*Validação da Data para salvar no formato Date no banco*/
      }

      Titulo.update(titulo, {where: {id: titulo.id}}).then(function (quantidadeDeAtualizacoes) {
         enviar(quantidadeDeAtualizacoes + (quantidadeDeAtualizacoes > 1 ? ' Registros atualizados' : ' Registro atualizado'), callback);
      }).catch(function (error) {
         enviar(error, callback);
      });
   };
   /*         --Update--        */

   /*         --Delete--        */
   var Delete = function (titulo, callback) {

      Titulo.destroy({where: {id: titulo.id}}).then(function (quantidadeDeExclusao) {
         enviar(quantidadeDeExclusao + (quantidadeDeExclusao > 1 ? ' Registros excluidos' : ' Registro excluido'), callback);
      }).catch(function (error) {
         enviar(error, callback);
      });
   };
   /*         --Delete--        */

   return titulo_controller = {
      List: List,
      Search: Search,
      Insert: Insert,
      Update: Update,
      Delete: Delete,
      titulo: titulo,
      titulos: titulos
   };

};