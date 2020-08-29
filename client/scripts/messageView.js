// View
var MessageView = {
  // render template
  render: _.template(

    '<div class=\'chat\'>' +
      '<div class=\'username\'>' +
        '<%= username %>' +
      '</div>' +
      '<div>' +
        '<%= text %>' +
      '</div>' +
    '</div>'
  )

};


$.getJSON(Parse.server, function(data) {
  var i;
  var html = '';
  for (i = 0; i < data.length; i++) {
    html += render(data[i]);
    $('#chats').append(html);

  }
});

$(document).on('click', 'submit', function() {
  alert('Message Added');
});