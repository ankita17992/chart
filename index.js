//Json dataset for bar chart 
var chartjson = {
    "title": "Students Academic Scores",
    "data": [{
      "name": "A",
      "score": 47
    }, {
      "name": "B",
      "score": 73
    }, {
      "name": "C",
      "score": 60
    }, {
      "name": "D",
      "score": 89
    }, {
      "name": "E",
      "score": 45
    }, {
      "name": "F",
      "score": 70
    }, {
      "name": "G",
      "score": 96
    }, {
      "name": "H",
      "score": 71
    }],
    "xtitle": "Secured Marks",
    "ytitle": "Marks",
    "ymax": 100,
    "ykey": 'score',
    "xkey": "name",
    "prefix": "%"
  }
  
  //defined variable 
  var color = 'green';
  var rowX = 'rowx';
  var rowY = 'rowy';

  
  //constants
  var TROW = 'tr',
    TDATA = 'td';
  
  //create the chart canvas
  var chart = document.createElement('div'); 
  // X and Y axis title 
  var Xaxis = document.createElement('div');
  Xaxis.setAttribute('class', rowX);
  Xaxis.innerHTML = "NAME OF STUDENT";

  var Yaxis = document.createElement('td');
  Yaxis.setAttribute('class', rowY);
  Yaxis.innerHTML = "SCORE (%) ";
  //table structure for chart display
  var barchart = document.createElement('table');

  //create the title row
  var titlerow = document.createElement(TROW);

  //create the title data
  var titledata = document.createElement(TDATA);
  //make the colspan to number of records
  titledata.setAttribute('colspan', chartjson.data.length + 1);
  titledata.setAttribute('class', 'charttitle');
  titledata.innerText = chartjson.title;
  titlerow.appendChild(titledata);
  barchart.appendChild(titlerow);
  chart.appendChild(barchart);
  
  //create the bar row
  var barRow = document.createElement(TROW);
  barRow.appendChild(Yaxis);

  //this will add data to the chart using for loop
  for (var i = 0; i < chartjson.data.length; i++) {
    
    barRow.setAttribute('class', 'bars');
    var prefix = chartjson.prefix || '';
    //create the bar chart data
    var bardata = document.createElement(TDATA);
    var bar = document.createElement('div');
    bar.setAttribute('class', color); //add color to the bar chart column 
    bar.style.height = chartjson.data[i][chartjson.ykey] + prefix;
    // display the name and % on the top of the bar
    bardata.innerText = chartjson.data[i][chartjson.xkey] + " - " + chartjson.data[i][chartjson.ykey] + "%";
    bardata.appendChild(bar); 
    barRow.appendChild(bardata);

  }
  // adding more to chart UI
  barchart.appendChild(barRow);
  chart.appendChild(barchart);
  chart.appendChild(Xaxis);

  
  document.getElementById('chart').innerHTML = chart.outerHTML;

  chart.appendChild(barchart); 

  
