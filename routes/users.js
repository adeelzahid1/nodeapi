import express from "express";
import {v4 as uuidv4} from 'uuid';

const router = express.Router();


let users = [
    {
        firstName:"Adeel",
        lastName: "Zahid",
        age: 25,
        id: '592f2134-7093-4c84-a39f-90867bc19d0a'
    } ,
    {
        firstName:"faisal",
        lastName:"khan",
        age:20,
        id:"e15p1a8c-6a53-4c84-8675-54e6f70291ca"
    }
];

router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});


router.post('/', (req, res) => {
    const user = req.body;
    user.id = uuidv4()
    const userWithId = {...user}; 

    console.log('post route reached ... ');

    users.push(userWithId);
    res.send(`New user ${user.firstName} Added Successfully ... `);
});

router.get('/:id', (req, res) => {
    // const userId = req.params.id;
    const {id} = req.params;
    const userFound = users.find( (user) =>user.id == id); 
    if(userFound){
        res.send(userFound);
    }
    else{
        res.send('User Not Found .. !!');
    }
});

router.delete('/:id', (req, res) => {
    console.log('User Delete Call ');
    const {id} = req.params;
    users = users.filter( (user) => user.id != id );

    res.send(`User with the Id ${id} deleted from the data base`);
});

router.patch('/:id', (req, res) => {
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    const userToBeUpdated = users.find( (user) => user.id == id);
    if(firstName) userToBeUpdated.firstName = firstName;
    if(lastName) userToBeUpdated.lastName = lastName;
    if(age) userToBeUpdated.age = age;

    res.send(` User have an ID ${id} has been updated successfully.. `);
});


export default router;