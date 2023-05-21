const express = require('express');
const router = express.Router();
const subCategoryController = require('../../../controllers/subCategoryController');
const passport = require('../../../passport/passport');

//GET routes
router.get('/',passport.authenticate('jwt', {session:false}),subCategoryController.getAll);
router.get('/:id',passport.authenticate('jwt', {session:false}),subCategoryController.getById);
router.get('/category/:name',passport.authenticate('jwt', {session:false}),subCategoryController.getByName);
router.get('/store/:store',passport.authenticate('jwt', {session:false}),subCategoryController.getByStore);

//POST routes
router.post('/',passport.authenticate('jwt', {session:false}),subCategoryController.createSubCategory);


//PUT routes


//DELETE routes


module.exports = router;