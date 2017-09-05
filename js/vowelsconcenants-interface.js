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
