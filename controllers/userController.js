const { response } = require('express');


const userGet = (req, res=response) =>{
  const {id,nombre='No name',edad} = req.query;

  res.json({
    msg:'get Api Controller',
    id,
    nombre,
    edad
  });
}

const userPost = (req, res=response) =>{
  const body = req.body;

  res.status(201).json({
    msg:'post Api controller',
    body
  });
}

const userPut = (req, res=response) =>{
  const { id } = req.params;

  res.status(500).json({
    msg:'put Api Controller',
    id
  });
}

const userPatch = (req, res=response) =>{
  res.json({
    msg:'patch Api Controller'
  });
}


const userDelete = (req, res=response) =>{
  res.json({
    msg:'delete Api controller'
  });
}


module.exports = {
  userGet,
  userPost,
  userPut,
  userPatch,
  userDelete,

}
