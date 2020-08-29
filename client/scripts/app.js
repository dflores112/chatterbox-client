var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    MessagesView.initialize();
    FormView.initialize();
    RoomsView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // updates/fetches more messages without having to refresh
    // setInterval(App.fetch, 3000);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:

      // iterate through the initial batch of messages
      for (let i = 0; i < data.results.length; i++) {
        // push into the Message Model's storage
        Messages.storage.push(data.results[i]);
        // push the roomname prop of each message into room model
        Rooms.storage.push(data.results[i].roomname);
        //console.log(data.results[i].roomname);
      }
      // render the batch
      console.log(Messages.storage);
      MessagesView.render();
      RoomsView.render();
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }

};
