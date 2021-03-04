const {response} = require ('express');


const  usersGet = (req, res = response) => { 
const {q, nombre = 'no name', apikey} = req.query;

    res.status(201).json({
        msg: 'API get prueba',
        q,
        nombre,
        apikey
     })
  }


  const usersPost = (req, res) => { 
      
    const body = req.body;

    const {nombre, edad} = req.body;

    res.json({
        msg: 'API post prueba',
        nombre,
        edad
     });
  }


  const usersPut = (req, res) => { 
    const id =req.params.id;

    res.json({
        msg: 'API put prueba',
        id
     })
  }

  const usersPatch = (req, res) => { 
    res.json({
        msg: 'API patch prueba'
     })
  }


  const usersDelete = (req, res) => { 
    res.json({
        msg: 'API delete prueba'
     })
  }


  module.exports = {
      usersGet,
      usersPost,
      usersPut,
      usersPatch,
      usersDelete
    
    }