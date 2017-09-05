function Journal(journalEntry){
  this.entry = journalEntry;
}

Journal.prototype.wordCount = function(body) {
  return body.split(" ").length;
};

exports.journalModule = Journal;
