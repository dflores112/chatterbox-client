var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    //RoomsView.$button.on('click', RoomsView.renderRoom());
    console.log(Array.isArray(Rooms.storage));
    console.log(Rooms.storage.length);

  },

  render: function() {
    var set = new Set(Rooms.storage);
    var arr = [...set];
    console.log(arr);
    for (var item of arr) {
      if (item !== "" && item !== undefined) {
        $('#mySelect').append(new Option(item, item));
      }
    }
    // var i;
    // // get all roomnames for messages
    // var data = Rooms.storage;
    // console.log(data)
    // // for each roomname
    // for (i = 0; i < data.length; i++) {
    //   // if roomname equals room selected
    //   if (data[i] === room??) {
    //     var html = "";
    //     // render the message into html template
    //     html += MessageView.render(Messages.storage[i]);
    //     // append to page
    //     $('#chats').append(html);
    //   }
    // }
  },

  renderRoom: function (roomName) {
    $('#mySelect').append(new Option(roomName, roomName));
    //document.getElementById('mySelect');
    //console.log('click');
  }

};
