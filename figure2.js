Reveal.addEventListener('ready', function() {
    var yourVlSpec = {
        $schema: 'https://vega.github.io/schema/vega-lite/v3.0.json',
        description: 'A simple bar chart with embedded data.',
            "title" : "delay vs distance",
            "width": 1100,
            "height": 720,
            "autosize": {
                "type": "fit",
                "contains": "padding"
            },
            "data": {
              "url": "https://raw.githubusercontent.com/vega/vega-datasets/master/data/flights-2k.json"
            },
            "mark": "point",
            "transform": [
              {
                "fold": ["delay", "distance"],
                "as": ["x_variable", "x_value"]
              },
                  {
                "fold": ["delay", "distance"],
                "as": ["y_variable", "y_value"]
              },
              {
                "filter": {
                  "selection": "x_axis"
                }
              }, {
                "filter": {
                "selection": "y_axis"
                }
              }
            ],
            "selection": {
              "x_axis": {
                "type": "single",
                "fields": [
                  "x_variable"
                ],
                "bind": {
                  "input": "select",
                  "options": [
                    "delay", 
                    "distance"
                  ]
                }
              },
              "y_axis": {
                "type": "single",
                "fields": [
                  "y_variable"
                ],
                "bind": {
                  "input": "select",
                  "options": [ 
                    "delay", 
                    "distance"
                  ]
                }
              }
            },
            "encoding": {
              "x": {
                "field": "x_value",
                "type": "quantitative"
              },
              "y": {
                "field": "y_value",
                "type": "quantitative"
              }
            }
            
    };

    var embedded = vegaEmbed('#vis', yourVlSpec);

    var yourVlSpec1 = {
      "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
      "data": {
        "url": "https://raw.githubusercontent.com/vega/vega-datasets/master/data/flights-2k.json"
      },
      "width": 1200,
      "height": 800,
      "mark": {
        "type": "circle",
        "opacity": 0.8,
        "stroke": "black",
        "strokeWidth": 1
      },
      "encoding": {
        "x": {
          "field": "origin",
          "type": "nominal",
          "axis": {"labelAngle": 0}
        },
        "y": {"field": "destination", "type": "nominal", "axis": {"title": ""}},
        "size": {
          "aggregate" : "mean",
          "field": "delay",
          "type": "quantitative",
          "legend": {"title": "average delay", "clipHeight": 30},
          "scale": {"range": [0, 2000]}
        },
        "color": {"aggregate" : "mean","field": "delay", "type": "quantitative", "legend": null}
      }
          
  };

  var embedded1 = vegaEmbed('#vis1', yourVlSpec1);

  var yourVlSpec2 = {
    $schema: 'https://vega.github.io/schema/vega-lite/v3.0.json',
    description: 'A simple bar chart with embedded data.',
        "title" : "average delay in a day of month",
        "width": 720,
        "height": 720,

        "data": {
          "url": "https://raw.githubusercontent.com/vega/vega-datasets/master/data/flights-2k.json"
        },
        "transform": [{"calculate": "date(datum.date)","as": "Date"}],
        "mark": "bar",
        "encoding": {
          "x": {
            "field": "Date",
            "type": "ordinal"
          },
          "y": {
            "aggregate" : "mean",
            "field": "delay",
            "type": "quantitative"
          }
        }
        
};

var embedded2 = vegaEmbed('#vis2', yourVlSpec2);

var yourVlSpec3 = {
  $schema: 'https://vega.github.io/schema/vega-lite/v3.0.json',
  description: 'A simple bar chart with embedded data.',
  "width": 1200,
  "height": 600,
 
  "data": {"url": "https://raw.githubusercontent.com/vega/vega-datasets/master/data/flights-2k.json"},
  "transform": [{"calculate": "date(datum.date)","as": "Date"}],
  "selection": {
      "DATE": {
      "type": "single",
      "fields": ["Date"],
      "bind": {
    "Date": {"input": "range","min": 1,"max": 31,"step": 1}
       }
      }
   },
  "mark": "circle",
  "encoding": {
      "x": {"field": "origin","type": "nominal"},
      "y": {"field": "distance","type": "quantitative"},
      "color": {
      "condition": {
          "selection": "DATE",
          "field": "delay", "type": "quantitative"
      },
      "value": "#E61E33"
      },
      "size": {
          "condition": {"selection": "DATE", "value": 200},
          "value": 50
        }
  }
  };

var embedded3 = vegaEmbed('#vis3', yourVlSpec3);
});

