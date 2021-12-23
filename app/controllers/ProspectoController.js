const Prospecto = require('../models/Prospecto');


function index(req,res){
    Prospecto.find({})
        .then(prospectos => {
            if(prospectos.length) return res.status(200).send(prospectos);
            return res.status(204).send({message: 'NO CONTENT'});
        }).catch(error => res.status(500).send({error}));

}

function show(req,res){
    if(req.body.error) return res.status(500).send(error);
    if(!req.body.prospectos) return res.status(204).send({message: 'NO CONTENT'});
    let prospectos = req.body.prospectos;
    return res.status(200).send({prospectos});

}

function create(req,res){
    
    let prospecto = new Prospecto(req.body);
    prospecto.save().then(prospecto => res.status(201).send(prospecto)).catch(error => res.status(500).send(error));

}

function update(req,res){

    if(req.body.error) return res.status(500).send(error);
    if(!req.body.prospectos) return res.status(404).send({message: 'NO ENCONTRADO'});
    let prospecto = req.body.prospectos[0];
    prospecto= Object.assign(prospecto,req.body);
    prospecto.save().then(prospecto => res.status(200).send({message: 'UPDATED', prospecto})).catch(error => res.status(500).send({error}));


}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Prospecto.find(query).then(prospectos => {
        if(!prospectos.length) return next();
        req.body.prospectos = prospectos;
        return next();
    }).catch(error => {
        req.body.error = error;
        next();
    })

}


module.exports ={

    index,
    show,
    create,
    update,
    find
}