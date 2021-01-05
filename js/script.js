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
//strike through list item
  li.on("click", function() {
    li.addClass("strike");
  });

//add 'X' button for deleteListItem
  let crossOutButton = $('<button class="crossOutButton"></button>');
  crossOutButton.append(document.createTextNode ('X'));
  $('li').append(crossOutButton);

//add event listener to deleteListItem
    crossOutButton.on("click", deleteListItem);
    function deleteListItem(){
    li.addClass("delete")
  }

//make list sortable
    $('#list').sortable();
  }
