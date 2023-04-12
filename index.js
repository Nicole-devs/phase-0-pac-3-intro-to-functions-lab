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
    const checkForLowerCase = string === string.toLowerCase();
    const checkForUpperCase = string === string.toUpperCase();
   
    console.log(checkForLowerCase);
    console.log(checkForUpperCase);
   
    if (checkForLowerCase) {
      return `I can't hear you!`;
    }
  
    if (checkForUpperCase) {
      return `YES INDEED!`;
    }
  
    if ("Let's have dinner together!"){
    return "I would love to!"
    }
  }
  
  const whatCaseIsThis = sayHiToHeadphonedRoommate('Ben');
  
  console.log(whatCaseIsThis);