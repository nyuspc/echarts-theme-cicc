(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('cicc-color', {
        "color": [
            "rgba(203,170,123,1)",
            "rgba(190,192,194,1)",
            "rgba(199,103,75,1)",
            "rgba(138,144,165,1)",
            "rgba(223,151,83,1)"
        ],
        "backgroundColor": "rgba(255,255,255,1)",
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": "rgba(155,53,25,1)"
            },
            "subtextStyle": {
                "color": "rgba(99,107,135,1)"
            }
        },
        "line": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "2"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "2"
                }
            },
            "symbolSize": "6",
            "symbol": "rect",
            "smooth": true
        },
        "radar": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "2"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "2"
                }
            },
            "symbolSize": "6",
            "symbol": "rect",
            "smooth": true
        },
        "bar": {
            "itemStyle": {
                "normal": {
                    "barBorderWidth": "0",
                    "barBorderColor": "#ccc"
                },
                "emphasis": {
                    "barBorderWidth": "0",
                    "barBorderColor": "#ccc"
                }
            }
        },
        "pie": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "scatter": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "boxplot": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "parallel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "sankey": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "funnel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "gauge": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "candlestick": {
            "itemStyle": {
                "normal": {
                    "color": "rgb(185,65,30)",
                    "color0": "transparent",
                    "borderColor": "rgb(155,53,25)",
                    "borderColor0": "#58c470",
                    "borderWidth": "1"
                }
            }
        },
        "graph": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1,
                    "color": "#aaa"
                }
            },
            "symbolSize": "6",
            "symbol": "rect",
            "smooth": true,
            "color": [
                "rgba(203,170,123,1)",
                "rgba(190,192,194,1)",
                "rgba(199,103,75,1)",
                "rgba(138,144,165,1)",
                "rgba(223,151,83,1)"
            ],
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#ffffff"
                    }
                }
            }
        },
        "map": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#f3f3f3",
                    "borderColor": "#999999",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "#ffb248",
                    "borderColor": "#eb8146",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#893448"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#893448"
                    }
                }
            }
        },
        "geo": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#f3f3f3",
                    "borderColor": "#999999",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "#ffb248",
                    "borderColor": "#eb8146",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#893448"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#893448"
                    }
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#444444"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#444444"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#444444"
                }
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#e6e6e6"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#444444"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#444444"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#444444"
                }
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#e6e6e6"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#444444"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#444444"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#444444"
                }
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#e6e6e6"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#444444"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#444444"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#444444"
                }
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#e6e6e6"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "normal": {
                    "borderColor": "#999999"
                },
                "emphasis": {
                    "borderColor": "#666666"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "#444444"
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#cccccc",
                    "width": 1
                },
                "crossStyle": {
                    "color": "#cccccc",
                    "width": 1
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#893448",
                "width": 1
            },
            "itemStyle": {
                "normal": {
                    "color": "#893448",
                    "borderWidth": 1
                },
                "emphasis": {
                    "color": "#ffb248"
                }
            },
            "controlStyle": {
                "normal": {
                    "color": "#893448",
                    "borderColor": "#893448",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "color": "#893448",
                    "borderColor": "#893448",
                    "borderWidth": 0.5
                }
            },
            "checkpointStyle": {
                "color": "#eb8146",
                "borderColor": "rgba(255,178,72,0.41)"
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#893448"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#893448"
                    }
                }
            }
        },
        "visualMap": {
            "color": [
                "rgb(155,53,25)",
                "#d95850",
                "#eb8146",
                "#ffb248",
                "#f2d643",
                "rgb(247,238,173)"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(255,255,255,0)",
            "dataBackgroundColor": "rgba(255,178,72,0.5)",
            "fillerColor": "rgba(255,178,72,0.15)",
            "handleColor": "#ffb248",
            "handleSize": "100%",
            "textStyle": {
                "color": "#333333"
            }
        },
        "markPoint": {
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#ffffff"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#ffffff"
                    }
                }
            }
        }
    });
}));