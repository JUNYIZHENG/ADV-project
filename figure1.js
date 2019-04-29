Reveal.addEventListener('ready', function() {
    var yourVlSpec = {
        $schema: 'https://vega.github.io/schema/vega-lite/v3.0.json',
        description: 'A simple bar chart with embedded data.',
            "data": {
              "url": "https://raw.githubusercontent.com/vega/vega-datasets/master/data/seattle-weather.csv"
            },
            "mark": "point",
            "transform": [
              {
                "fold": ["wind", "precipitation", "temp_min", "temp_max"],
                "as": ["var_x", "val_x"]
              },
                  {
                "fold": ["wind", "precipitation", "temp_min", "temp_max"],
                "as": ["var_y", "val_y"]
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
                  "var_x"
                ],
                "bind": {
                  "input": "select",
                  "options": [
                    "wind",
                    "precipitation",
                    "temp_min",
                    "temp_max"
                  ]
                }
              },
              "y_axis": {
                "type": "single",
                "fields": [
                  "var_y"
                ],
                "bind": {
                  "input": "select",
                  "options": [
                    "wind",
                    "precipitation",
                    "temp_min",
                    "temp_max"
                  ]
                }
              }
            },
            "encoding": {
              "x": {
                "field": "val_x",
                "type": "quantitative"
              },
              "y": {
                "field": "val_y",
                "type": "quantitative"
              }
            }
    };

    var embedded = vegaEmbed('#vis', yourVlSpec);
});