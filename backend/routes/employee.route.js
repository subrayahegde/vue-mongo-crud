const express = require('express');
const employeeRoute = express.Router();

// Employee model
let EmployeeModel = require('../models/Employee');

// Get all data
employeeRoute.route('/').get((req, res, next) => {
    
    EmployeeModel.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Create employee data
employeeRoute.route('/create-employee').post((req, res, next) => {
    EmployeeModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Edit employee data
employeeRoute.route('/edit-employee/:id').get((req, res, next) => {
    EmployeeModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    })
})

// Update employee data
employeeRoute.route('/update-employee/:id').put((req, res, next) => {
    EmployeeModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
            console.log('Employee successfully updated');
        }
    })
})

// Delete employee data
employeeRoute.route('/delete-employee/:id').delete((req, res, next) => {
   EmployeeModel.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = employeeRoute;
