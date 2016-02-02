$('.post-todo').on('click', function (e) {
  e.preventDefault();
  var todo = $('.todo-input').val();
  $('.todo-list').append('<li>' + todo + '</li>');
});