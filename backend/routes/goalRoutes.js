const express = require('express')
const router = express.Router()
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals
} = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')

//shortcut for route chaining
// router.route('/').get(getGoals).post(setGoals)

router.get('/', protect, getGoals)

router.post('/', protect, setGoals)

router.put('/:id', protect, updateGoals)

router.delete('/:id', protect, deleteGoals)

module.exports = router
