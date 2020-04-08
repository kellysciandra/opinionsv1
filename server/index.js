const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');
const io = require('socket.io')(http);

const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 5000;

const Message = require('./Message');
const Conversation = require('./Conversation');
const mongoose = require('mongoose');

mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

io.on('connection', (socket) => {

  // Get the last 10 messages from the database.
  Message.find().sort({createdAt: -1}).limit(10).exec((err, messages) => { 
    if (err) return console.error(err);

    // Send the last messages to the user.
    socket.emit('init', messages);
  });

  Conversation.find().sort({createdAt: -1}).limit(10).exec((err, conversations) => { 
    if (err) return console.error(err);

    // Send the last messages to the user.
    socket.emit('init', conversations);
  });

  // Listen to connected users for a new message.
  socket.on('message', (msg) => {
    // Create a message with the content and the name of the user.
    const message = new Message({
      content: msg.content,
      name: msg.name,
      conversation_id: msg.conversation_id
    });

    // Save the message to the database.
    message.save((err) => {
      if (err) return console.error(err);
    });

    // Notify all other users about a new message.
    socket.broadcast.emit('push', msg);
  });


  socket.on('conversation', (conv) => {
    const conversation = new Conversation({
      _id: conv._id,
      title: conv.title,
    })
    conversation.save((err) => {
      if (err) return console.error(err);
    });
    socket.broadcast.emit('push', conv);
  });


});






http.listen(port, () => {
  console.log('listening on *:' + port);
});