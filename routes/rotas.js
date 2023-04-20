const { Router } = require('express');

const pessoaController = require('../controllers/pessoaController')

const tarefaController = require('../controllers/tarefaController')

const rotas = new Router();


rotas.route('/pessoas')
     .get(pessoaController.getPessoas)
     .post(pessoaController.addPessoa)
     .put(pessoaController.updatePessoa)


rotas.route('/pessoas/:codigo')
     .delete(pessoaController.deletePessoa)
     .get(pessoaController.getPessoaPorCodigo)

rotas.route('/tarefas')
     .get(tarefaController.getTarefas)
     .post(tarefaController.addTarefa)
     .put(tarefaController.updateTarefa)

rotas.route('/tarefas/:codigo')
     .delete(tarefaController.deleteTarefa)
     .get(tarefaController.getTarefaPorCodigo)

module.exports = rotas;

