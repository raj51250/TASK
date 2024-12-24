const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    // No maxlength constraint, so the name can be of any length
  },
  completed: {
    type: Boolean,
    default: false,
  },
});


module.exports = mongoose.model('Todo', TaskSchema);
