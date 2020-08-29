// Controller
var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {


  },

  render: function() {
    var i;
    // get all messages in storage
    var data = Messages.storage;

    // for each message
    for (i = 0; i < data.length; i++) {
      var html = "";
      // render into html template
      html += MessageView.render(data[i]);
      // append to page
      $('#chats').append(html);
    }
  },

  renderMessage: function(message) {
    // add new message to Model storage
    Messages.storage.push(message);
    // save the new message to the server
    Parse.create(message);
    // render into html template
    var html = MessageView.render(message);
    // prepend to page
    MessagesView.$chats.prepend(html);
  }

};