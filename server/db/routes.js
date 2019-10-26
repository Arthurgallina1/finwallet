const mysql = require('mysql')
const express = require('express')
const cors = require('cors')
const router = express.Router();

/* @get
  get all info  
*/
router.get('/', async (req, res) => {
    let query = "select f.nome, tipo, sigla, TRUNCATE(avg(i.valor), 2) as PM,sum(i.quantidade) as TotalQtd, truncate((sum(i.quantidade) * avg(i.valor)),2) as ValorInvestido from investimentos f INNER join investimentos_info i on f.sigla = i.nome group by i.nome; ";
    const connection = await loadMySQL();
    connection.query(query, (err, result) => {
        if(err) console.log('erro na queyr 1')
        res.send(result)
    })
   // res.send('Ola mundo')
});
/* @get 
    get only one ID
*/
router.get('/:id', async (req, res) => {
    let query = `SELECT * FROM investimentos where id = ${req.params.id}`
    const connection = await loadMySQL();
    connection.query(query, (err, result) => {
        if(err) {
            return console.log('Error on query by id!' + err)
            
        }
        res.send(result)
    })
})

router.post('/investimentos', async (req, res) => {
    let query2 = `insert into investimentos_info (nome, quantidade, valor, dia) values ('${req.body.nome}', '${req.body.qtd}', '${req.body.valor}', Now());`
    let query1 = `INSERT into investimentos (sigla, tipo) values ('${req.body.nome}', '${req.body.categoria}')`
    const connection = await loadMySQL();
    connection.query(query1, (err, result) => {
        if(err) {
            console.log('Erro on insert main table (1)! '+ err)
           // res.status(500).send('Error na inseração!')
        } 
        
    })
    connection.query(query2, (err, result) => {
        if(err) {
            console.log('Erro on insert (2)! '+ err)
            res.status(500).send('Error na inseração!')
        } 
        res.status(201).send();
    })
})



/*@delete
param: sigla do investimento a ser deletado
output: deleta o investimento
*/
router.delete(`/investimentos/:id`, async (req,res) => {
    let query = `DELETE FROM investimentos where sigla = '${req.params.id}'`;
    let query2 = `DELETE FROM investimentos_info where nome = '${req.params.id}'`;
    const connection = await loadMySQL();
    connection.query(query, (err, result) => {
        if(err) console.log('erro ao deletar' + err)
        res.status(201).send()
    })
    connection.query(query2, (err, result) => {
        if(err) console.log('erro ao deletar info' + err)
        res.status(201).send()
    })
})

/* @post
param: valor total do dia
output: adiciona esse valor ao dia de hoje para ter historico
*/

router.post(`/investimentos/historico`, async (req,res) => {
    let query = `INSERT INTO patrimonio (data, valor) VALUES (Now(), ${req.body.valor})`;
    const connection = await loadMySQL();
    connection.query(query, (err, result) => {
        if(err) console.log('erro ao inserir' + err)
        res.status(201).send()
    })
})



//Conexão com banco
async function loadMySQL(){
    const connection = await mysql.createConnection({
        host: process.env.DB_PASS,
        port: '3306',
        user: proccess.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'finwallet'
    });
    
    connection.connect(function(err){
        if(err) {
            return console.error(err);
        }      
    })

    return connection
}



module.exports = router;
