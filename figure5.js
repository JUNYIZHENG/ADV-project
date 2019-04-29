Reveal.addEventListener('ready', function() {
    var yourVlSpec = {
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

    var embedded = vegaEmbed('#vis', yourVlSpec);
});z