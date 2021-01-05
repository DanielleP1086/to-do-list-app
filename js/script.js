function newItem(){
  let list = $('#list')
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  list.append(li);
  $('#button').append(document.createTextNode('X'));

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    let list = $('#list');
    li.append(inputValue);}
  }
