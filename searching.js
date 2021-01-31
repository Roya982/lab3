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
