const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Connection error:', err))

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true
  },
  title: String,
  completed: {
    type: Boolean,
    default: false
  }
})

const me = new User({
  name: 'Parv',
  title: 'I am a teacher'
})

me.save()
  .then(user => {
    console.log('Saved:', user)
  })
  .catch(error => {
    console.log('ERROR:', error)
  })
