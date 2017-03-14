$(document).ready(function() {

  var endpt = "";

/*
  Some button on click
    - connect to node.js app
    - get all polls

    - display poll
       - get each option and votes
       - create a pie chart of votes per option

       - add option to dropdown list
       - user to select an option
       - user to click a save vote button
       - system to pass poll id, option id, 1 vote to back end
       - re get poll
       - don't allow another vote?



function testPollData() {
  var onePoll = [{"id":1,
                "name":"Best Star Trek captain",
                "options":[{"name":"Jean Luc Picard","votes":0},
                          {"name":"James T Kirk","votes":0},
                          {"name":"Kathrine Janeway","votes":300}]}];

   var pollname = onePoll.name;
   var options = onePoll.options;

} */

function testBestPie() {
  var bestPie = [{"id":1,
                "name":"Best Pie",
                "options":[{"name":"Banoffee","votes":44},
                          {"name":"Steak and Potato", "votes":79},
                          {"name":"Steak and Ale","votes":53},
                          {"name":"Pie barm","votes":67},
                          {"name":"Apple","votes":53},
                          {"name":"Pork pie","votes":71},
                          {"name":"Cottage pie","votes":39}
                        ]
                }];
}

function testAllPolls() {
  var json = [
                   {"id" : 1, "name" : "Best Star Trek captain"},
                   {"id" : 2, "name" : "Best Star Wars Character"},
                   {"id" : 3, "name" : "Star wars v Star Trek"},
                   {"id" : 4, "name" : "Beverages"},
                   {"id" : 5, "name" : "Best Pie"}
                  ];

    var name;
    var href = "";
    var snippet = "";
    json.forEach(function(val) {

          name = val.name;
                  var result = "<li style=\"list-style-type:none;\">" +
                      "<div class=\"srch\">" +
                         "<div class=\"txt\"><h3>" +
                           "<a href=\""+ href +"\">" + name + "</a>" +
                          "</h3>" +
                      "<p>" + snippet + "</p></div>" +
                      "</div><br></li>";
                  console.log(result);

                  $('#output').prepend(result);
     });

}


  function getWikiData() {

    st = $("#searchTerm").val();
    URL = endpt + actionformat + query + st + callback;
    console.log("In getWikiData.  URL= " + URL);

    //GET THE JSON FROM APP
    $.getJSON(URL).done(function(response) {
      json = response;
      console.log(json);
      /*


      */

    }).catch(function(error) {console.log(error);});
  }



  //Start
  testAllPolls();


});
