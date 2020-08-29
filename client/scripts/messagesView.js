// Controller
var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  render: function() {
    $.getJSON(Parse.server, function() {
      var i;
      var html = "";
      var data = Messages.storage;
      for (i = 0; i < data.length; i++) {
        console.log('here');
        html += MessageView.render(data[i]);
        $('#chats').append(html);
      }
    });

  }

};