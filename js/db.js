var booksArray = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Songs of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation"];

var bookDb = "";
var levelDb = "";
var favssDb = "";
var mus = "";
var sd = "";

if(localStorage.getItem("book") == null){
localStorage.setItem("book", "Genesis");
bookDb = localStorage.getItem("book");
}else{
bookDb = localStorage.getItem("book");
}
if(localStorage.getItem("level") == null){
localStorage.setItem("level", "1");
levelDb = localStorage.getItem("level");
}else{
levelDb = localStorage.getItem("level");
}
if(localStorage.getItem("favs") == null){
localStorage.setItem("favs", "");
favssDb = localStorage.getItem("favs");
}else{
favssDb = localStorage.getItem("favs");
}
if(localStorage.getItem("music") == null){
localStorage.setItem("music", "1");
mus = localStorage.getItem("music");
}else{
mus = localStorage.getItem("music");
}
if(localStorage.getItem("sound") == null){
localStorage.setItem("sound", "1");
sd = localStorage.getItem("sound");
}else{
sd = localStorage.getItem("sound");
}

var updateBkLv = function(b, l){
localStorage.setItem("book", b);
localStorage.setItem("level", l);
}

var addFavVerse = function (f){
if(localStorage.getItem("favs") == null){
localStorage.setItem("favs", f);
}else{
if(localStorage.getItem("favs") == ""){
localStorage.setItem("favs", f);
}else{
if(localStorage.getItem("favs").indexOf(f)<0){
localStorage.setItem("favs", localStorage.getItem("favs")+","+f);
}
}
}
return localStorage.getItem("favs");
}

var deleteFavVerse = function (f){
var faxstxt = localStorage.getItem("favs");
if(faxstxt.indexOf(",") > -1){
if(faxstxt.split(",").indexOf(f) == faxstxt.split(",").length - 1){
localStorage.setItem("favs", faxstxt.replace("," + f, ""));
}else{
localStorage.setItem("favs", localStorage.getItem("favs").replace(f + ",", ""));
}
}else{
localStorage.setItem("favs", faxstxt.replace(f, ""));
}
return localStorage.getItem("favs");
}

function loadDbData(){
var mus = localStorage.getItem("music");
var sd = localStorage.getItem("sound");
var bookDb = localStorage.getItem("book");
var levelDb = localStorage.getItem("level");
var favssDb = localStorage.getItem("favs");

return mus +"**"+ sd +"**"+ bookDb +"**"+ levelDb +"**"+ favssDb;
}

var db_kjv = "Genesis*1:9**txt***Genesis*1:16**txt***Genesis*1:19**txt***Genesis*1:31**txt***Genesis*2:2**txt***Genesis*2:3**txt***Genesis*2:10**txt***Genesis*2:14**txt***Genesis*2:21**txt***Genesis*2:24**txt***Genesis*3:22**txt***Genesis*4:15**txt***Genesis*4:19**txt***Genesis*4:24**txt***Genesis*4:24**txt***Genesis*5:3**txt***Genesis*5:4**txt***Genesis*5:5**txt***Genesis*5:6**txt***Genesis*5:7**txt***Genesis*5:8**txt***Genesis*5:9**txt***Genesis*5:10**txt***Genesis*5:11**txt***Genesis*5:12**txt***Genesis*5:13**txt***Genesis*5:14**txt***Genesis*5:15**txt***Genesis*5:16**txt***Genesis*5:17**txt***Genesis*5:18**txt***Genesis*5:19**txt***Genesis*5:20**txt***Genesis*5:21**txt***Genesis*5:22**txt***Genesis*5:23**txt***Genesis*5:25**txt***Genesis*5:26**txt***Genesis*5:27**txt***Genesis*5:28**txt***Genesis*5:30**txt***Genesis*5:31**txt***Genesis*5:32**txt***Genesis*6:3**txt***Genesis*6:10**txt***Genesis*6:15**txt***Genesis*6:15**txt***Genesis*6:15**txt***Genesis*6:19**txt***Genesis*6:20**txt***Genesis*7:2**txt***Genesis*7:2**txt***Genesis*7:3**txt***Genesis*7:4**txt***Genesis*7:4**txt***Genesis*7:6**txt***Genesis*7:9**txt***Genesis*7:10**txt***Genesis*7:11**txt***Genesis*7:11**txt***Genesis*7:12**txt***Genesis*7:13**txt***Genesis*7:15**txt***Genesis*7:17**txt***Genesis*7:20**txt***Genesis*7:24**txt***Genesis*8:3**txt***Genesis*8:4**txt***Genesis*8:5**txt***Genesis*8:6**txt***Genesis*8:10**txt***Genesis*8:12**txt***Genesis*8:13**txt***Genesis*9:19**txt***Genesis*9:22**txt***Genesis*9:28**txt***Genesis*9:29**txt***Genesis*11:1**txt***Genesis*11:7**txt***Genesis*11:10**txt***Genesis*11:13**txt***Genesis*11:14**txt***Genesis*11:18**txt***Genesis*11:21**txt***Genesis*11:25**txt***Genesis*11:26**txt***Genesis*11:32**txt***Genesis*12:4**txt***Genesis*14:4**txt***Genesis*14:5**txt***Genesis*14:9**txt***Genesis*14:14**txt***Genesis*15:9**txt***Genesis*15:13**txt***Genesis*16:3**txt***Genesis*17:1**txt***Genesis*17:12**txt***Genesis*17:17**txt***Genesis*17:20**txt***Genesis*17:24**txt***Genesis*17:25**txt***Genesis*18:2**txt***Genesis*18:6**txt***Genesis*18:24**txt***Genesis*18:26**txt***Genesis*18:28**txt***Genesis*18:28**txt***Genesis*18:29**txt***Genesis*18:31**txt***Genesis*18:32**txt***Genesis*19:1**txt***Genesis*19:8**txt***Genesis*19:15**txt***Genesis*19:30**txt***Genesis*20:16**txt***Genesis*21:4**txt***Genesis*21:15**txt***Genesis*21:28**txt***Genesis*21:29**txt***Genesis*21:30**txt***Genesis*22:3**txt***Genesis*22:23**txt***Genesis*23:1**txt***Genesis*23:15**txt***Genesis*23:16**txt***Exodus*2:2**txt***Exodus*2:16**txt***Exodus*3:18**txt***Exodus*6:25**txt***Exodus*7:25**txt***Exodus*11:1**txt***Exodus*22:1**txt***Exodus*26:3**txt***Exodus*26:7**txt***Exodus*26:8**txt***Leviticus*3:4**txt***Leviticus*5:7**txt***Leviticus*5:11**txt***Leviticus*9:1**txt***Leviticus*11:20**txt***Leviticus*11:21**txt***Leviticus*12:3**txt***Leviticus*16:29**txt***Leviticus*23:3**txt***Leviticus*24:6**txt***Numbers*3:47**txt***Numbers*6:9**txt***Numbers*6:14**txt***Numbers*6:19**txt***Numbers*7:17**txt***Numbers*7:48**txt***Numbers*10:33**txt***Numbers*12:4**txt***Numbers*29:26**txt***Numbers*34:13**txt***Deuteronomy*1:15**txt***Deuteronomy*1:23**txt***Deuteronomy*3:8**txt***Deuteronomy*3:11**txt***Deuteronomy*3:21**txt***Deuteronomy*4:13**txt***Deuteronomy*5:9**txt***Deuteronomy*5:13**txt***Deuteronomy*15:12**txt***Deuteronomy*34:8**txt***Joshua*1:11**txt***Joshua*2:16**txt***Joshua*6:4**txt***Joshua*6:6**txt***Joshua*9:2**txt***Joshua*10:5**txt***Joshua*10:16**txt***Joshua*12:9**txt***Joshua*13:7**txt***Joshua*14:2**txt***Judges*3:8**txt***Judges*3:16**txt***Judges*5:30**txt***Judges*6:27**txt***Judges*9:34**txt***Judges*11:40**txt***Judges*12:7**txt***Judges*12:9**txt***Judges*12:11**txt***Judges*12:14**txt***Ruth*1:1**txt***Ruth*1:4**txt***Ruth*1:4**txt***Ruth*1:8**txt***Ruth*1:19**txt***Ruth*2:13**txt***Ruth*2:20**txt***Ruth*3:15**txt***Ruth*4:11**txt***Ruth*4:15**txt***1 Samuel*1:2**txt***1 Samuel*1:3**txt***1 Samuel*1:24**txt***1 Samuel*1:24**txt***1 Samuel*2:5**txt***1 Samuel*2:21**txt***1 Samuel*2:34**txt***1 Samuel*6:1**txt***1 Samuel*6:4**txt***1 Samuel*6:16**txt***2 Samuel*1:1**txt***2 Samuel*2:2**txt***2 Samuel*2:11**txt***2 Samuel*3:4**txt***2 Samuel*3:5**txt***2 Samuel*12:6**txt***2 Samuel*15:16**txt***2 Samuel*18:11**txt***2 Samuel*18:15**txt***2 Samuel*19:43**txt***1 Kings*1:48**txt***1 Kings*2:11**txt***1 Kings*2:16**txt***1 Kings*2:39**txt***1 Kings*6:6**txt***2 Kings*1:14**txt***2 Kings*2:7**txt***2 Kings*5:5**txt***2 Kings*6:25**txt***2 Kings*7:3**txt***1 Chronicles*1:19**txt***1 Chronicles*2:3**txt***1 Chronicles*2:4**txt***1 Chronicles*2:6**txt***1 Chronicles*2:15**txt***2 Chronicles*3:2**txt***2 Chronicles*3:10**txt***2 Chronicles*3:15**txt***2 Chronicles*4:1**txt***2 Chronicles*4:3**txt***Ezra*2:1**txt***Ezra*3:1**txt***Ezra*3:6**txt***Ezra*6:4**txt***Ezra*6:22**txt***Nehemiah*1:2**txt***Nehemiah*2:11**txt***Nehemiah*3:8**txt***Nehemiah*3:28**txt***Nehemiah*7:73**txt***Esther*2:12**txt***Esther*2:12**txt***Esther*2:16**txt***Esther*2:21**txt***Esther*6:2**txt***Job*1:1**txt***Job*1:2**txt***Job*1:2**txt***Job*1:4**txt***Job*1:4**txt***Psalms*33:2**txt***Psalms*68:17**txt***Psalms*92:3**txt***Psalms*144:9**txt***Psalms*149:6**txt***Proverbs*1:14**txt***Proverbs*1:19**txt***Proverbs*3:18**txt***Proverbs*6:16**txt***Proverbs*6:31**txt***Ecclesiastes*4:9**txt***Ecclesiastes*4:11**txt***Ecclesiastes*4:12**txt***Ecclesiastes*7:19**txt***Ecclesiastes*7:22**txt***Songs of Solomon*2:10**txt***Songs of Solomon*2:13**txt***Songs of Solomon*4:2**txt***Songs of Solomon*4:9**txt***Songs of Solomon*6:6**txt***Isaiah*5:10**txt***Isaiah*6:2**txt***Isaiah*6:13**txt***Isaiah*7:4**txt***Isaiah*7:21**txt***Jeremiah*2:33**txt***Jeremiah*3:14**txt***Jeremiah*5:8**txt***Jeremiah*6:3**txt***Jeremiah*15:9**txt***Lamentations*1:2**txt***Lamentations*1:2**txt***Lamentations*1:2**txt***Lamentations*1:2**txt***Lamentations*1:2**txt***Ezekiel*1:6**txt***Ezekiel*1:9**txt***Ezekiel*3:15**txt***Ezekiel*3:16**txt***Ezekiel*14:14**txt***Daniel*1:12**txt***Daniel*1:14**txt***Daniel*1:15**txt***Daniel*1:17**txt***Daniel*1:20**txt***Hosea*1:11**txt***Hosea*4:3**txt***Hosea*6:2**txt***Hosea*10:10**txt***Hosea*11:9**txt***Joel*2:7**txt***Joel*2:7**txt***Joel*2:8**txt***Joel*2:8**txt***Joel*3:11**txt***Amos*1:1**txt***Amos*1:3**txt***Amos*1:6**txt***Amos*1:9**txt***Amos*1:11**txt***Obadiah*1:7**txt***Obadiah*1:9**txt***Obadiah*1:11**txt***Obadiah*1:11**txt***Obadiah*1:15**txt***Jonah*1:7**txt***Jonah*1:17**txt***Jonah*3:3**txt***Jonah*3:8**txt***Jonah*3:8**txt***Micah*2:4**txt***Micah*4:5**txt***Micah*5:5**txt***Micah*5:5**txt***Micah*6:7**txt***Nahum*1:11**txt***Nahum*1:11**txt***Nahum*1:11**txt***Nahum*2:4**txt***Nahum*2:4**txt***Habakkuk*1:12**txt***Habakkuk*1:12**txt***Habakkuk*1:12**txt***Habakkuk*3:3**txt***Habakkuk*3:3**txt***Zephaniah*2:15**txt***Zephaniah*2:15**txt***Zephaniah*3:9**txt***Zephaniah*3:9**txt***Zephaniah*3:9**txt***Haggai*1:1**txt***Haggai*2:1**txt***Haggai*2:12**txt***Haggai*2:16**txt***Haggai*2:16**txt***Zechariah*1:18**txt***Zechariah*1:20**txt***Zechariah*2:6**txt***Zechariah*3:9**txt***Zechariah*4:3**txt***Malachi*2:3**txt***Malachi*2:10**txt***Malachi*2:15**txt***Malachi*2:16**txt***Malachi*3:16**txt***Matthew*2:16**txt***Matthew*3:3**txt***Matthew*4:18**txt***Matthew*5:18**txt***Matthew*12:40**txt***Mark*1:3**txt***Mark*1:7**txt***Mark*2:3**txt***Mark*6:7**txt***Mark*6:9**txt***Luke*1:24**txt***Luke*1:56**txt***Luke*2:3**txt***Luke*2:24**txt***Luke*2:46**txt***John*1:23**txt***John*1:26**txt***John*1:35**txt***John*1:37**txt***John*2:6**txt***Acts*1:10**txt***Acts*1:14**txt***Acts*1:22**txt***Acts*1:23**txt***Acts*2:1**txt***Romans*1:16**txt***Romans*1:23**txt***Romans*1:27**txt***Romans*2:15**txt***Romans*2:28**txt***1 Corinthians*1:12**txt***1 Corinthians*3:4**txt***1 Corinthians*3:8**txt***1 Corinthians*4:6**txt***1 Corinthians*6:16**txt***2 Corinthians*2:7**txt***2 Corinthians*2:16**txt***2 Corinthians*11:24**txt***2 Corinthians*13:1**txt***2 Corinthians*13:1**txt***Galatians*1:18**txt***Galatians*1:18**txt***Galatians*3:10**txt***Galatians*4:22**txt***Galatians*4:24**txt***Ephesians*1:10**txt***Ephesians*2:14**txt***Ephesians*2:15**txt***Ephesians*2:16**txt***Ephesians*5:31**txt***Philippians*1:16**txt***Philippians*1:23**txt***Philippians*1:27**txt***Philippians*2:2**txt***Philippians*3:5**txt***Colossians*3:9**txt***Colossians*3:13**txt***Colossians*3:15**txt***Colossians*3:16**txt***Colossians*4:9**txt***1 Thessalonians*2:11**txt***1 Thessalonians*3:12**txt***1 Thessalonians*4:4**txt***1 Thessalonians*4:9**txt***1 Thessalonians*4:18**txt***2 Thessalonians*1:3**txt***2 Thessalonians*1:3**txt***2 Thessalonians*1:3**txt***2 Thessalonians*1:3**txt***2 Thessalonians*1:3**txt***1 Timothy*2:5**txt***1 Timothy*3:2**txt***1 Timothy*3:4**txt***1 Timothy*5:19**txt***1 Timothy*5:19**txt***2 Timothy*2:19**txt***2 Timothy*2:19**txt***2 Timothy*2:19**txt***2 Timothy*2:19**txt***2 Timothy*2:19**txt***Titus*1:6**txt***Titus*1:12**txt***Titus*1:12**txt***Titus*1:12**txt***Titus*3:3**txt***Philemon*1:9**txt***Philemon*1:9**txt***Philemon*1:9**txt***Philemon*1:9**txt***Philemon*1:9**txt***Hebrews*2:6**txt***Hebrews*4:4**txt***Hebrews*4:12**txt***Hebrews*6:18**txt***Hebrews*7:2**txt***James*2:10**txt***James*2:16**txt***James*2:19**txt***James*4:11**txt***James*4:12**txt***1 Peter*1:22**txt***1 Peter*3:8**txt***1 Peter*3:20**txt***1 Peter*4:9**txt***1 Peter*4:10**txt***2 Peter*2:5**txt***2 Peter*2:5**txt***2 Peter*2:5**txt***2 Peter*3:8**txt***2 Peter*3:8**txt***1 John*1:7**txt***1 John*2:13**txt***1 John*5:7**txt***1 John*5:7**txt***1 John*5:8**txt***2 John*1:5**txt***2 John*1:5**txt***2 John*1:5**txt***2 John*1:5**txt***2 John*1:5**txt***3 John*1:10**txt***3 John*1:10**txt***3 John*1:10**txt***3 John*1:10**txt***3 John*1:10**txt***Jude*1:11**txt***Jude*1:14**txt***Jude*1:14**txt***Jude*1:14**txt***Jude*1:14**txt***Revelation*1:13**txt***Revelation*1:16**txt***Revelation*2:12**txt***Revelation*2:23**txt***Revelation*4:4**txt";

