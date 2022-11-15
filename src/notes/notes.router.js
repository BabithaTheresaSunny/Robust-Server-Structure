const router=require('express').Router();
const {read,addData,deleteData,editData}=require('./notes.controller')
router.route('/').get(read);
router.route('/add').post(addData);
router.route('/delete').delete(deleteData);
router.route('/edit/:id').put(editData);

module.exports=router;