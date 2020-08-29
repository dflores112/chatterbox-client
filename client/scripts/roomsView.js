var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('click', RoomsView.handleChange);
  },

  render: function() {
    var set = new Set(Rooms.storage);
    var arr = [...set];
    console.log(arr);
    for (var item of arr) {
      if (item !== "" && item !== undefined) {
        RoomsView.renderRoom(item);
      }
    }
  },

  renderRoom: function (roomName) {
    console.log('click');
    RoomsView.$select.append(new Option(roomName, roomName));
  },

  handleClick: function (event) {
    var roomname = prompt('Enter room name');
    RoomsView.renderRoom(roomname);
    Rooms.storage.push(roomname);
    // RoomsView.render();
    // MessagesView.render();
  },

  handleChange: function (event) {
    Rooms.selected = RoomsView.$select.val();
    MessagesView.render();
  }

};
