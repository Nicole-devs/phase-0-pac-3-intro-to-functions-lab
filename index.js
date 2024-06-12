  function shout(hello) {
    return 'hello'.toUpperCase();
  }

  function whisper(hello) {
    return 'hello'.toLowerCase()
  }

  function logShout(string) {
    console.log('HELLO'.toUpperCase());
  }
  
  function logWhisper(string) {
    console.log('HELLO'.toLowerCase());
  }

  function sayHiToHeadphonedRoommate(string) {
  // Method 1
    const checkForLowerCase = string === string.toLowerCase();
    const checkForUpperCase = string === string.toUpperCase();

    if (checkForLowerCase) {
      return `I can't hear you!`;
    }
  
    if (checkForUpperCase) {
      return `YES INDEED!`;
    }

  // Method 2
    var cantAnswer = "I can't hear you!";
    var yesAnswer = "YES INDEED!"; 
    var loveAnswer = "I would love to!"

    if (string.toLowerCase(string) === string) {
        return cantAnswer;
    }
      
    else if (string.toUpperCase(string)===string) {
            return yesAnswer;
    }

    else if ("Let's have dinner together!"===string) {
        return loveAnswer;
    }

    if ("Let's have dinner together!"){
    return "I would love to!"
    }
  }
