const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<db_jakubmigda120@gmail.com>:<db_m^u+pR-6$8gbqQS>@cluster2.pl88e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log('MongoDB connection error:', err));



