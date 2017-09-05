var Journal = require('./../js/scripts.js').journalModule;

$(document).ready(function(){
  $('#vowel').submit(function(event){
    event.preventDefault();
    var body = $('#body').val();
    var simpleJournal = new Journal("test test");
    var output = simpleJournal.wordCount(body);
    $('#vowelResult').text(output);
  });
});

var Journal = require('./../js/scripts.js').journalModule;

$(document).ready(function() {
  $('#entry').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var simpleJournal = new Journal("test test");
    var output = simpleJournal.wordCount(body);
    $('#result').append(output);
  });
});
