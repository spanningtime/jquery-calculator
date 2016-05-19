
var $screen = $('#screen');

var pressButton = function() {
  if($screen.text() === ('Error')) {
    return;
  } else {
    // Add event listeners to all span tags
    var $buttons = $('span');

    $buttons.click(function (event) {
      if ($(event.target).text() === 'C') {
        return $screen.text("");
    };
      var $addToScreen = $(event.target).text();
      $screen.append($addToScreen);
    });
  };
};


pressButton();
