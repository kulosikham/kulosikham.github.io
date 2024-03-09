function saveText() {
  var text = document.getElementById('textInput').value;
  localStorage.setItem('pastebinText', text);
  displayText();
}

function clearText() {
  localStorage.removeItem('pastebinText');
  document.getElementById('textInput').value = '';
  displayText();
}

function displayText() {
  var text = localStorage.getItem('pastebinText');
  if (text) {
    document.getElementById('output').innerText = text;
  } else {
    document.getElementById('output').innerText = 'No text saved.';
  }
}

// Display any saved text on page load
displayText();
