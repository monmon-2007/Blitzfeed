google.load("feeds", "1") //Load Google Ajax Feed API (version 1)

function rssdisplayer(divid, url, feedlimit, showoptions){
this.showoptions=showoptions || "" //get string of options to show ("date" and/or "description")
var feedpointer=new google.feeds.Feed(url) //create new instance of Google Ajax Feed API
feedpointer.setNumEntries(feedlimit) //set number of items to display
document.write('<div id="'+divid+'">Loading feed...</div>')
this.feedcontainer=document.getElementById(divid)
var displayer=this
feedpointer.load(function(r){displayer.formatoutput(r)}) //call Feed.load() to retrieve and output RSS feed
}


rssdisplayer.prototype.formatdate=function(datestr){
var itemdate=new Date(datestr)
return "<span style='color:gray; font-size: 90%'>"+itemdate.toLocaleString()+"</span>"
}


rssdisplayer.prototype.formatoutput=function(result){
if (!result.error){ //if RSS feed successfully fetched
var thefeeds=result.feed.entries //get all feed entries as a JSON array
var rssoutput="<ul>"
for (var i=0; i<thefeeds.length; i++){ //loop through entries
var itemtitle="<a href=\"" + thefeeds[i].link + "\">" + thefeeds[i].title + "</a>"
var itemdate=/date/i.test(this.showoptions)? this.formatdate(thefeeds[i].publishedDate) : ""
var itemdescription=/description/i.test(this.showoptions)? "<br />"+thefeeds[i].content : /snippet/i.test(this.showoptions)? "<br />"+thefeeds[i].contentSnippet  : ""
rssoutput+="<li>" + itemtitle + " " + itemdate + itemdescription + "</li>"
}
rssoutput+="</ul>"
this.feedcontainer.innerHTML=rssoutput
}
else //else, output error
alert("Error fetching feeds: "+result.error.message)
}

//USAGE SYNTAX: new rssdisplayer("divid", "rssurl", numberofitems, "displayoptions")
//new rssdisplayer("adiv", "http://www.cssdrive.com/index.php/news/rss_2.0/", 5, "date, description")