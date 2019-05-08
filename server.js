const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const knex = require('knex');
const knexConfig = require('./knexfile')

const server = express();

const db = knex(knexConfig.development);

//middleware 
server.use(morgan('short')); //3rd party logging yarn add morgan 
server.use(helmet()); //3rd party security yarn add helmet 
server.use(express.json()); //built-in 
server.use(cors()); //3rd party yarn add cors

//routes and end points
server.get('/', (req, res) => {
    res.send('Number 5 is alive!!!');
}); 


server.get('/cohorts', (req, res) => {
    db('cohorts')
        .then(cohorts => {
            res.status(200).json(cohorts);
        })
        .catch(err => res.status(500).json(err));
});

server.get('/cohorts/:id', (req, res) => {
    db('cohorts').where({ id: req.params.id })
        .then(cohorts => {
            if (cohorts) {
                res.status(200).json(cohorts);
            } else {
                res.status(404).json({ message: 'Cohort not found' });
            }
        }).catch(err => res.status(500).json(err));
});

// add cohorts
server.post('/cohorts', (req, res) => {
    db('cohorts')
        .insert(req.body)
        .then(ids => {
            res.status(201).json(ids);
        })
        .catch(err => res.status(500).json(err));
});

// update cohorts
server.put('/cohorts/:id', (req, res) => {
    const changes = req.body;
    db('cohorts')
        .where({ id: req.params.id })
        .update(changes)
        .then(count => {
            if (count) {
                res.status(200).json(count);
            } else {
                res.status(400).json({ message: 'Cohort not found' });
            }
        }).catch(err => res.status(500).json(err));
});

// delete cohorts
server.delete('/cohorts/:id', (req, res) => {
    db('cohorts')
        .where({ id: req.params.id })
        .del()
        .then(count => {
            res.status(200).json(count);
        })
        .catch(err => res.status(500).json(err));
});

// list students
server.get('/students', (req, res) => {
    db('students')
        .then(students => {
            res.status(200).json(students);
        })
        .catch(err => res.status(500).json(err));
});

server.get('/students/:id', (req, res) => {
    db('students').where({ id: req.params.id })
        .then(students => {
            if (students) {
                res.status(200).json(students);
            } else {
                res.status(404).json({ message: 'Student not found' });
            }
        }).catch(err => res.status(500).json(err));
})

//add students
server.post('students', (req, res) => {
    // db.insert(req.body).into('bears').then().catch();
    db('students')
        .insert(req.body)
        .then(ids => {
            res.status(201).json(ids);
        })
        .catch(err => res.status(500).json(err));

});

//delete students
server.delete('/students/:id', (req, res) => {
    db('students')
        .where({ id: req.params.id })
        .del()
        .then(count => {
            res.status(200).json(count);
        })
        .catch(err => res.status(500).json(err));
});


//update students
server.put('/students/:id', (req, res) => {
    const changes = req.body;
    db('students')
        .where({ id: req.params.id })
        .update(changes)
        .then(count => {
            if (count) {
                res.status(200).json(count);
            } else {
                res.status(400).json({ message: 'Student not found' });
            }
        }).catch(err => res.status(500).json(err));
});

module.exports = server