var intrest=prompt("are you intrested in human body anatomy");


while (intrest !== 'yes' && intrest !== 'no') {
    intrest = prompt('are you intrested in human body anatomy');
  }
  
  var welcomemessag = '';
  
  if (intrest === 'yes') {
    welcomemessag = '<img src="images/anatomy.jpg"/>';
  } else if (intrest === 'no') {
    welcomemessag = '<img src="images/sorry.jpg"/>';
  }
  
  var noimg = prompt('on a scal from 1-5, how much are you interested in the anatomy?');
  
  var result = '';
  
  for (var i = 0; i < noimg; i++) {
    result = result + welcomemessag;
  }
  
  
  document.write(result)

function popquiz(){
  var popquiz = prompt("do you want to take a pop quiz?");
}

popquiz()

while (popquiz !=="yes" && popquiz !=="no"){
  popquiz = prompt("are you sure?")
}

while (popquiz == "no"){
  popquiz = prompt("If you realy don't want to take the pop quiz then please print ok")
}

while (popquiz == "yes"){
  popquiz = prompt("This is yes/no quiz, so if you're sure please print ok")
  while (popquiz == "ok"){
    popquiz = prompt("Human anatomy is the study of the structures of the human body?(yes/no)")
  }
  while(popquiz == "yes"){
    popquiz = prompt("Great job! to move to the next question please inter ok")
  }
  while (popquiz =="ok"){
    popquiz = prompt("Human anatomy discuss animals structures? (yes/no)")
  }
  while (popquiz == "no"){
    popquiz = prompt("Great! you're almost done. Print 'go' to continue")
  }
  while (popquiz == "go"){
    popquiz = prompt("This is the last question. Is human anatomy related to medicine? (yes/no)")
  }
  while (popquiz == "yes"){
    popquiz = prompt ("You've done great pleas print 'go' to finish")
  }
  while (popquiz == 'go'){
    popquiz = prompt (" Thank you for visiting, pleas enjoy your reading.")
  }
}
