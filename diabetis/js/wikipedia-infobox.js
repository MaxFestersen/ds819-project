// example of queries, you can also implement a search input
// HTTP request is stored in a variable url
var wikiUrl = "https://en.wikipedia.org/w/api.php?action=parse&format=json&page=" + town + "&redirects&prop=text&callback=?";
console.log(wikiUrl);
// using the .getJSON() function to parse the response
town = 'Odense';
$.getJSON(wikiUrl, function (data){
  var rawtext = data.parse.text["*"]; //placing data text on variable to be used on string replacement below
  // Next line uses regular expressions to replave local href to global href so the links in the infobox work properly
  // NOTE this is made to work with English, if you use a different language you need to change the global address
  rawtext = rawtext.replace(new RegExp('href="/wiki', 'g'), 'href="https://en.wikipedia.org/wiki'); //wikipedia links
  wikiHTML = rawtext.replace(new RegExp('"//upload.', 'g'), '"https://upload.'); //wikimedia pictures
  $wikiDOM = $("<document>"+wikiHTML+"</document>");
  $("div.infoBox").append($wikiDOM.find('.infobox').html()); //Using DOM to insert the content on a given class
});
