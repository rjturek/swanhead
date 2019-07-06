// Start with the badButtonClicked variable set to false - it may be set to true later.
var badButtonClicked = false;

function clickedTheBadButton() {
  alert("You should not have pressed that button!!!!!!!!!!!!!");
  badButtonClicked = true;
};

function clickedTheGoodButton() {
  confirmMessage = "Great that you pressed this button\n\nYou didn't click the bad button did you?\n\nPress OK if you did NOT press the bad button\n\nPress Cancel if you did press the bad button" 
  
  okOrCancel = confirm(confirmMessage) 
  
  if (okOrCancel) {
    if (badButtonClicked) {
      message = "YOU LIE !!!!!!!!!";
    }
    else {
      message = "You are good at following directions";
    }
  }
  else {
    if (badButtonClicked) {
      message = "You did a bad thing, though you are honest";
    }
    else {
      message = "How strange?\nYou admitted to doing something you didn't do";
    }
  }

  alert(message);
};