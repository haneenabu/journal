function Journal(journalEntry){
  this.entry = journalEntry;
}

Journal.prototype.wordCount = function(body) {
  return body.split(" ").length;
};

Journal.prototype.wordCount = function(body) {
  var vowelCount = 0;
  var array = body.split("");
  for(i = 0; i < array.length; i++){
    if(array[i] == 'a' || array[i] == 'e' || array[i] == 'i' || array[i] == 'o' || array[i] == 'u' || array[i] == 'y'){
      vowelCount ++;
    }
  }
  return vowelCount;
};
exports.journalModule = Journal;
