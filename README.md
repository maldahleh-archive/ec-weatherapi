# Environment Canada Weather API
Environment Canada Weather API is a Node.JS Express App that provides simple endpoints for retrieving JSON weather data
from Environment Canada.

### Endpoints
**/cities** - Return city ID, province code and english/french names of all cities which Environment Canada provides 
forecasts for.

Sample Response (Returns 855 cities as of May 28, 2019):
```json
[
  {
    "cityId": "s0000001",
    "englishName": "Athabasca",
    "frenchName": "Athabasca",
    "provinceCode": "AB"
  },
  {
    "cityId": "s0000002",
    "englishName": "Clearwater",
    "frenchName": "Clearwater",
    "provinceCode": "BC"
  }
]
```

**/forecast?cityId={city ID}** - Return's Environment Canada's Forecast in _English_ for the given city.

**/forecast?cityId={city ID}&french** - Return's Environment Canada's Forecast in _French_ for the given city.

Sample Response:
<details><summary>CLICK ME</summary>
<p>
```json
{
  "creation": {
    "utc": {
      "offset": {
        "action": "xmlCreation",
        "zone": "UTC",
        "utcOffset": "0"
      },
      "minute": "30",
      "hour": "06",
      "timestamp": "20190529063000",
      "day": {
        "value": "29",
        "name": "Wednesday"
      },
      "month": {
        "value": "05",
        "name": "May"
      },
      "year": "2019",
      "textSummary": "Wednesday May 29, 2019 at 06:30 UTC"
    },
    "local": {
      "offset": {
        "action": "xmlCreation",
        "zone": "EDT",
        "utcOffset": "-4"
      },
      "minute": "30",
      "hour": "02",
      "timestamp": "20190529023000",
      "day": {
        "value": "29",
        "name": "Wednesday"
      },
      "month": {
        "value": "05",
        "name": "May"
      },
      "year": "2019",
      "textSummary": "Wednesday May 29, 2019 at 02:30 EDT"
    }
  },
  "location": {
    "continent": "North America",
    "country": {
      "name": "Canada",
      "code": "CA"
    },
    "province": {
      "name": "Ontario",
      "code": "ON"
    },
    "region": "City of Toronto",
    "city": {
      "name": "Toronto",
      "code": "s0000458",
      "lat": "43.74N",
      "lon": "79.37W"
    }
  },
  "warnings": {},
  "currentConditions": {
    "station": {
      "name": "Toronto Pearson Int'l Airport",
      "code": "YYZ",
      "lat": "43.68N",
      "lon": "79.63W"
    },
    "time": {
      "utc": {
        "offset": {
          "action": "observation",
          "zone": "UTC",
          "utcOffset": "0"
        },
        "minute": "00",
        "hour": "06",
        "timestamp": "20190529060000",
        "day": {
          "value": "29",
          "name": "Wednesday"
        },
        "month": {
          "value": "05",
          "name": "May"
        },
        "year": "2019",
        "textSummary": "Wednesday May 29, 2019 at 06:00 UTC"
      },
      "local": {
        "offset": {
          "action": "observation",
          "zone": "EDT",
          "utcOffset": "-4"
        },
        "minute": "00",
        "hour": "02",
        "timestamp": "20190529020000",
        "day": {
          "value": "29",
          "name": "Wednesday"
        },
        "month": {
          "value": "05",
          "name": "May"
        },
        "year": "2019",
        "textSummary": "Wednesday May 29, 2019 at 02:00 EDT"
      }
    },
    "condition": [
      "Light Drizzle"
    ],
    "iconCode": "28",
    "temperature": {
      "value": "10.8",
      "units": "C",
      "unitType": "metric"
    },
    "dewpoint": {
      "value": "10.3",
      "units": "C",
      "unitType": "metric"
    },
    "pressure": {
      "value": "100.9",
      "units": "kPa",
      "unitType": "metric",
      "change": "0.03",
      "tendency": "falling"
    },
    "visibility": {
      "value": "9.7",
      "units": "km",
      "unitType": "metric"
    },
    "relativeHumidity": {
      "value": "97",
      "units": "%"
    },
    "wind": {
      "speed": {
        "value": "7",
        "units": "km/h",
        "unitType": "metric"
      },
      "gust": {
        "units": "km/h",
        "unitType": "metric"
      },
      "direction": "E",
      "bearing": {
        "value": "92.0",
        "units": "degrees"
      }
    }
  },
  "hourly": {
    "issue": {
      "utc": {
        "offset": {
          "action": "forecastIssue",
          "zone": "UTC",
          "utcOffset": "0"
        },
        "minute": "09",
        "hour": "02",
        "timestamp": "20190529020900",
        "day": {
          "value": "29",
          "name": "Tuesday"
        },
        "month": {
          "value": "05",
          "name": "May"
        },
        "year": "2019",
        "textSummary": "Tuesday May 29, 2019 at 02:09 UTC"
      },
      "local": {
        "offset": {
          "action": "forecastIssue",
          "zone": "EDT",
          "utcOffset": "-4"
        },
        "minute": "09",
        "hour": "22",
        "timestamp": "20190528220900",
        "day": {
          "value": "28",
          "name": "Tuesday"
        },
        "month": {
          "value": "05",
          "name": "May"
        },
        "year": "2019",
        "textSummary": "Tuesday May 28, 2019 at 22:09 EDT"
      }
    },
    "forecast": {
      "201905290700": {
        "condition": [
          "Cloudy"
        ],
        "temperature": {
          "value": "10",
          "units": "C",
          "unitType": "metric"
        },
        "chanceOfPrecip": {
          "value": "20",
          "units": "%"
        },
        "windChill": {
          "unitType": "metric"
        },
        "humidex": {
          "unitType": "metric"
        },
        "wind": {
          "speed": {
            "value": "5",
            "units": "km/h",
            "unitType": "metric"
          },
          "gust": {
            "units": "km/h",
            "unitType": "metric"
          },
          "direction": {
            "direction": "VR",
            "directionText": "Variable direction"
          }
        }
      },
      "201905290800": {
        "condition": [
          "Cloudy"
        ],
        "temperature": {
          "value": "9",
          "units": "C",
          "unitType": "metric"
        },
        "chanceOfPrecip": {
          "value": "20",
          "units": "%"
        },
        "windChill": {
          "unitType": "metric"
        },
        "humidex": {
          "unitType": "metric"
        },
        "wind": {
          "speed": {
            "value": "5",
            "units": "km/h",
            "unitType": "metric"
          },
          "gust": {
            "units": "km/h",
            "unitType": "metric"
          },
          "direction": {
            "direction": "VR",
            "directionText": "Variable direction"
          }
        }
      },
      "201905290900": {
        "condition": [
          "Cloudy"
        ],
        "temperature": {
          "value": "9",
          "units": "C",
          "unitType": "metric"
        },
        "chanceOfPrecip": {
          "value": "20",
          "units": "%"
        },
        "windChill": {
          "unitType": "metric"
        },
        "humidex": {
          "unitType": "metric"
        },
        "wind": {
          "speed": {
            "value": "5",
            "units": "km/h",
            "unitType": "metric"
          },
          "gust": {
            "units": "km/h",
            "unitType": "metric"
          },
          "direction": {
            "direction": "VR",
            "directionText": "Variable direction"
          }
        }
      },
      "201905291000": {
        "condition": [
          "Mainly cloudy"
        ],
        "temperature": {
          "value": "9",
          "units": "C",
          "unitType": "metric"
        },
        "chanceOfPrecip": {
          "value": "20",
          "units": "%"
        },
        "windChill": {
          "unitType": "metric"
        },
        "humidex": {
          "unitType": "metric"
        },
        "wind": {
          "speed": {
            "value": "5",
            "units": "km/h",
            "unitType": "metric"
          },
          "gust": {
            "units": "km/h",
            "unitType": "metric"
          },
          "direction": {
            "direction": "VR",
            "directionText": "Variable direction"
          }
        }
      },
      "201905291100": {
        "condition": [
          "Mainly cloudy"
        ],
        "temperature": {
          "value": "10",
          "units": "C",
          "unitType": "metric"
        },
        "chanceOfPrecip": {
          "value": "20",
          "units": "%"
        },
        "windChill": {
          "unitType": "metric"
        },
        "humidex": {
          "unitType": "metric"
        },
        "wind": {
          "speed": {
            "value": "5",
            "units": "km/h",
            "unitType": "metric"
          },
          "gust": {
            "units": "km/h",
            "unitType": "metric"
          },
          "direction": {
            "direction": "VR",
            "directionText": "Variable direction"
          }
        }
      },
      "201905291200": {
        "condition": [
          "Mainly cloudy"
        ],
        "temperature": {
          "value": "10",
          "units": "C",
          "unitType": "metric"
        },
        "chanceOfPrecip": {
          "value": "20",
          "units": "%"
        },
        "windChill": {
          "unitType": "metric"
        },
        "humidex": {
          "unitType": "metric"
        },
        "wind": {
          "speed": {
            "value": "5",
            "units": "km/h",
            "unitType": "metric"
          },
          "gust": {
            "units": "km/h",
            "unitType": "metric"
          },
          "direction": {
            "direction": "VR",
            "directionText": "Variable direction"
          }
        }
      },
      "201905291300": {
        "condition": [
          "Mainly cloudy"
        ],
        "temperature": {
          "value": "10",
          "units": "C",
          "unitType": "metric"
        },
        "chanceOfPrecip": {
          "value": "20",
          "units": "%"
        },
        "windChill": {
          "unitType": "metric"
        },
        "humidex": {
          "unitType": "metric"
        },
        "wind": {
          "speed": {
            "value": "5",
            "units": "km/h",
            "unitType": "metric"
          },
          "gust": {
            "units": "km/h",
            "unitType": "metric"
          },
          "direction": {
            "direction": "VR",
            "directionText": "Variable direction"
          }
        }
      },
      "201905291400": {
        "condition": [
          "Mainly cloudy"
        ],
        "temperature": {
          "value": "11",
          "units": "C",
          "unitType": "metric"
        },
        "chanceOfPrecip": {
          "value": "20",
          "units": "%"
        },
        "windChill": {
          "unitType": "metric"
        },
        "humidex": {
          "unitType": "metric"
        },
        "wind": {
          "speed": {
            "value": "5",
            "units": "km/h",
            "unitType": "metric"
          },
          "gust": {
            "units": "km/h",
            "unitType": "metric"
          },
          "direction": {
            "direction": "VR",
            "directionText": "Variable direction"
          }
        }
      },
      "201905291500": {
        "condition": [
          "Mainly cloudy"
        ],
        "temperature": {
          "value": "11",
          "units": "C",
          "unitType": "metric"
        },
        "chanceOfPrecip": {
          "value": "20",
          "units": "%"
        },
        "windChill": {
          "unitType": "metric"
        },
        "humidex": {
          "unitType": "metric"
        },
        "wind": {
          "speed": {
            "value": "10",
            "units": "km/h",
            "unitType": "metric"
          },
          "gust": {
            "units": "km/h",
            "unitType": "metric"
          },
          "direction": {
            "direction": "E",
            "directionText": "East"
          }
        }
      },
      "201905291600": {
        "condition": [
          "Mainly cloudy"
        ],
        "temperature": {
          "value": "12",
          "units": "C",
          "unitType": "metric"
        },
        "chanceOfPrecip": {
          "value": "20",
          "units": "%"
        },
        "windChill": {
          "unitType": "metric"
        },
        "humidex": {
          "unitType": "metric"
        },
        "wind": {
          "speed": {
            "value": "10",
            "units": "km/h",
            "unitType": "metric"
          },
          "gust": {
            "units": "km/h",
            "unitType": "metric"
          },
          "direction": {
            "direction": "E",
            "directionText": "East"
          }
        }
      },
      "201905291700": {
        "condition": [
          "Mainly cloudy"
        ],
        "temperature": {
          "value": "14",
          "units": "C",
          "unitType": "metric"
        },
        "chanceOfPrecip": {
          "value": "20",
          "units": "%"
        },
        "windChill": {
          "unitType": "metric"
        },
        "humidex": {
          "unitType": "metric"
        },
        "wind": {
          "speed": {
            "value": "10",
            "units": "km/h",
            "unitType": "metric"
          },
          "gust": {
            "units": "km/h",
            "unitType": "metric"
          },
          "direction": {
            "direction": "E",
            "directionText": "East"
          }
        }
      },
      "201905291800": {
        "condition": [
          "Mainly cloudy"
        ],
        "temperature": {
          "value": "15",
          "units": "C",
          "unitType": "metric"
        },
        "chanceOfPrecip": {
          "value": "20",
          "units": "%"
        },
        "windChill": {
          "unitType": "metric"
        },
        "humidex": {
          "unitType": "metric"
        },
        "wind": {
          "speed": {
            "value": "10",
            "units": "km/h",
            "unitType": "metric"
          },
          "gust": {
            "units": "km/h",
            "unitType": "metric"
          },
          "direction": {
            "direction": "SE",
            "directionText": "Southeast"
          }
        }
      },
      "201905291900": {
        "condition": [
          "Mainly cloudy"
        ],
        "temperature": {
          "value": "15",
          "units": "C",
          "unitType": "metric"
        },
        "chanceOfPrecip": {
          "value": "20",
          "units": "%"
        },
        "windChill": {
          "unitType": "metric"
        },
        "humidex": {
          "unitType": "metric"
        },
        "wind": {
          "speed": {
            "value": "10",
            "units": "km/h",
            "unitType": "metric"
          },
          "gust": {
            "units": "km/h",
            "unitType": "metric"
          },
          "direction": {
            "direction": "SE",
            "directionText": "Southeast"
          }
        }
      },
      "201905292000": {
        "condition": [
          "Mainly cloudy"
        ],
        "temperature": {
          "value": "16",
          "units": "C",
          "unitType": "metric"
        },
        "chanceOfPrecip": {
          "value": "20",
          "units": "%"
        },
        "windChill": {
          "unitType": "metric"
        },
        "humidex": {
          "unitType": "metric"
        },
        "wind": {
          "speed": {
            "value": "10",
            "units": "km/h",
            "unitType": "metric"
          },
          "gust": {
            "units": "km/h",
            "unitType": "metric"
          },
          "direction": {
            "direction": "SE",
            "directionText": "Southeast"
          }
        }
      },
      "201905292100": {
        "condition": [
          "Mainly cloudy"
        ],
        "temperature": {
          "value": "16",
          "units": "C",
          "unitType": "metric"
        },
        "chanceOfPrecip": {
          "value": "20",
          "units": "%"
        },
        "windChill": {
          "unitType": "metric"
        },
        "humidex": {
          "unitType": "metric"
        },
        "wind": {
          "speed": {
            "value": "10",
            "units": "km/h",
            "unitType": "metric"
          },
          "gust": {
            "units": "km/h",
            "unitType": "metric"
          },
          "direction": {
            "direction": "SE",
            "directionText": "Southeast"
          }
        }
      },
      "201905292200": {
        "condition": [
          "A mix of sun and cloud"
        ],
        "temperature": {
          "value": "16",
          "units": "C",
          "unitType": "metric"
        },
        "chanceOfPrecip": {
          "value": "0",
          "units": "%"
        },
        "windChill": {
          "unitType": "metric"
        },
        "humidex": {
          "unitType": "metric"
        },
        "wind": {
          "speed": {
            "value": "10",
            "units": "km/h",
            "unitType": "metric"
          },
          "gust": {
            "units": "km/h",
            "unitType": "metric"
          },
          "direction": {
            "direction": "SE",
            "directionText": "Southeast"
          }
        }
      },
      "201905292300": {
        "condition": [
          "A mix of sun and cloud"
        ],
        "temperature": {
          "value": "15",
          "units": "C",
          "unitType": "metric"
        },
        "chanceOfPrecip": {
          "value": "0",
          "units": "%"
        },
        "windChill": {
          "unitType": "metric"
        },
        "humidex": {
          "unitType": "metric"
        },
        "wind": {
          "speed": {
            "value": "10",
            "units": "km/h",
            "unitType": "metric"
          },
          "gust": {
            "units": "km/h",
            "unitType": "metric"
          },
          "direction": {
            "direction": "SE",
            "directionText": "Southeast"
          }
        }
      },
      "201905300000": {
        "condition": [
          "Mainly sunny"
        ],
        "temperature": {
          "value": "15",
          "units": "C",
          "unitType": "metric"
        },
        "chanceOfPrecip": {
          "value": "0",
          "units": "%"
        },
        "windChill": {
          "unitType": "metric"
        },
        "humidex": {
          "unitType": "metric"
        },
        "wind": {
          "speed": {
            "value": "5",
            "units": "km/h",
            "unitType": "metric"
          },
          "gust": {
            "units": "km/h",
            "unitType": "metric"
          },
          "direction": {
            "direction": "VR",
            "directionText": "Variable direction"
          }
        }
      },
      "201905300100": {
        "condition": [
          "A few clouds"
        ],
        "temperature": {
          "value": "15",
          "units": "C",
          "unitType": "metric"
        },
        "chanceOfPrecip": {
          "value": "0",
          "units": "%"
        },
        "windChill": {
          "unitType": "metric"
        },
        "humidex": {
          "unitType": "metric"
        },
        "wind": {
          "speed": {
            "value": "5",
            "units": "km/h",
            "unitType": "metric"
          },
          "gust": {
            "units": "km/h",
            "unitType": "metric"
          },
          "direction": {
            "direction": "VR",
            "directionText": "Variable direction"
          }
        }
      },
      "201905300200": {
        "condition": [
          "A few clouds"
        ],
        "temperature": {
          "value": "14",
          "units": "C",
          "unitType": "metric"
        },
        "chanceOfPrecip": {
          "value": "0",
          "units": "%"
        },
        "windChill": {
          "unitType": "metric"
        },
        "humidex": {
          "unitType": "metric"
        },
        "wind": {
          "speed": {
            "value": "5",
            "units": "km/h",
            "unitType": "metric"
          },
          "gust": {
            "units": "km/h",
            "unitType": "metric"
          },
          "direction": {
            "direction": "VR",
            "directionText": "Variable direction"
          }
        }
      },
      "201905300300": {
        "condition": [
          "A few clouds"
        ],
        "temperature": {
          "value": "14",
          "units": "C",
          "unitType": "metric"
        },
        "chanceOfPrecip": {
          "value": "0",
          "units": "%"
        },
        "windChill": {
          "unitType": "metric"
        },
        "humidex": {
          "unitType": "metric"
        },
        "wind": {
          "speed": {
            "value": "5",
            "units": "km/h",
            "unitType": "metric"
          },
          "gust": {
            "units": "km/h",
            "unitType": "metric"
          },
          "direction": {
            "direction": "VR",
            "directionText": "Variable direction"
          }
        }
      },
      "201905300400": {
        "condition": [
          "A few clouds"
        ],
        "temperature": {
          "value": "13",
          "units": "C",
          "unitType": "metric"
        },
        "chanceOfPrecip": {
          "value": "0",
          "units": "%"
        },
        "windChill": {
          "unitType": "metric"
        },
        "humidex": {
          "unitType": "metric"
        },
        "wind": {
          "speed": {
            "value": "5",
            "units": "km/h",
            "unitType": "metric"
          },
          "gust": {
            "units": "km/h",
            "unitType": "metric"
          },
          "direction": {
            "direction": "VR",
            "directionText": "Variable direction"
          }
        }
      },
      "201905300500": {
        "condition": [
          "A few clouds"
        ],
        "temperature": {
          "value": "12",
          "units": "C",
          "unitType": "metric"
        },
        "chanceOfPrecip": {
          "value": "0",
          "units": "%"
        },
        "windChill": {
          "unitType": "metric"
        },
        "humidex": {
          "unitType": "metric"
        },
        "wind": {
          "speed": {
            "value": "5",
            "units": "km/h",
            "unitType": "metric"
          },
          "gust": {
            "units": "km/h",
            "unitType": "metric"
          },
          "direction": {
            "direction": "VR",
            "directionText": "Variable direction"
          }
        }
      },
      "201905300600": {
        "condition": [
          "A few clouds"
        ],
        "temperature": {
          "value": "11",
          "units": "C",
          "unitType": "metric"
        },
        "chanceOfPrecip": {
          "value": "0",
          "units": "%"
        },
        "windChill": {
          "unitType": "metric"
        },
        "humidex": {
          "unitType": "metric"
        },
        "wind": {
          "speed": {
            "value": "5",
            "units": "km/h",
            "unitType": "metric"
          },
          "gust": {
            "units": "km/h",
            "unitType": "metric"
          },
          "direction": {
            "direction": "VR",
            "directionText": "Variable direction"
          }
        }
      }
    }
  },
  "forecast": [
    {
      "period": {
        "name": "Tuesday night",
        "forecastName": "Tonight"
      },
      "textSummary": "Cloudy. Low 9.",
      "simpleSummary": "Cloudy",
      "cloudSummary": "Cloudy.",
      "iconCode": "10",
      "pop": {
        "units": "%"
      },
      "temperature": {
        "textSummary": "Low 9.",
        "temperature": {
          "value": "9",
          "units": "C",
          "unitType": "metric",
          "class": "low"
        }
      },
      "precipitation": {
        "textSummary": "",
        "precipType": {
          "type": "drizzle",
          "start": "-5",
          "end": "1"
        }
      },
      "humidex": {
        "unitType": "metric"
      },
      "relativeHumidity": {
        "value": "100",
        "units": "%"
      },
      "wind": {},
      "uv": {}
    },
    {
      "period": {
        "name": "Wednesday",
        "forecastName": "Wednesday"
      },
      "textSummary": "Mainly cloudy. High 16. UV index 7 or high.",
      "simpleSummary": "Mainly cloudy",
      "cloudSummary": "Mainly cloudy.",
      "iconCode": "03",
      "pop": {
        "units": "%"
      },
      "temperature": {
        "textSummary": "High 16.",
        "temperature": {
          "value": "16",
          "units": "C",
          "unitType": "metric",
          "class": "high"
        }
      },
      "precipitation": {
        "textSummary": "",
        "precipType": {
          "start": "",
          "end": ""
        }
      },
      "humidex": {
        "unitType": "metric"
      },
      "relativeHumidity": {
        "value": "80",
        "units": "%"
      },
      "wind": {},
      "uv": {
        "value": "7",
        "category": "high",
        "textSummary": "UV index 7 or high."
      }
    },
    {
      "period": {
        "name": "Wednesday night",
        "forecastName": "Wednesday night"
      },
      "textSummary": "Clearing early in the evening. Low 10.",
      "simpleSummary": "A few clouds",
      "cloudSummary": "Clearing early in the evening.",
      "iconCode": "31",
      "pop": {
        "units": "%"
      },
      "temperature": {
        "textSummary": "Low 10.",
        "temperature": {
          "value": "10",
          "units": "C",
          "unitType": "metric",
          "class": "low"
        }
      },
      "precipitation": {
        "textSummary": "",
        "precipType": {
          "start": "",
          "end": ""
        }
      },
      "humidex": {
        "unitType": "metric"
      },
      "relativeHumidity": {
        "value": "95",
        "units": "%"
      },
      "wind": {},
      "uv": {}
    },
    {
      "period": {
        "name": "Thursday",
        "forecastName": "Thursday"
      },
      "textSummary": "Increasing cloudiness. High 22.",
      "simpleSummary": "Cloudy",
      "cloudSummary": "Increasing cloudiness.",
      "iconCode": "10",
      "pop": {
        "units": "%"
      },
      "temperature": {
        "textSummary": "High 22.",
        "temperature": {
          "value": "22",
          "units": "C",
          "unitType": "metric",
          "class": "high"
        }
      },
      "precipitation": {
        "textSummary": "",
        "precipType": {
          "start": "",
          "end": ""
        }
      },
      "humidex": {
        "unitType": "metric"
      },
      "relativeHumidity": {
        "value": "70",
        "units": "%"
      },
      "wind": {},
      "uv": {}
    },
    {
      "period": {
        "name": "Thursday night",
        "forecastName": "Thursday night"
      },
      "textSummary": "Cloudy periods. Low 11.",
      "simpleSummary": "Cloudy",
      "cloudSummary": "Cloudy periods.",
      "iconCode": "10",
      "pop": {
        "units": "%"
      },
      "temperature": {
        "textSummary": "Low 11.",
        "temperature": {
          "value": "11",
          "units": "C",
          "unitType": "metric",
          "class": "low"
        }
      },
      "precipitation": {
        "textSummary": "",
        "precipType": {
          "start": "",
          "end": ""
        }
      },
      "humidex": {
        "unitType": "metric"
      },
      "relativeHumidity": {
        "value": "80",
        "units": "%"
      },
      "wind": {},
      "uv": {}
    },
    {
      "period": {
        "name": "Friday",
        "forecastName": "Friday"
      },
      "textSummary": "Sunny. High 20.",
      "simpleSummary": "Sunny",
      "cloudSummary": "Sunny.",
      "iconCode": "00",
      "pop": {
        "units": "%"
      },
      "temperature": {
        "textSummary": "High 20.",
        "temperature": {
          "value": "20",
          "units": "C",
          "unitType": "metric",
          "class": "high"
        }
      },
      "precipitation": {
        "textSummary": "",
        "precipType": {
          "start": "",
          "end": ""
        }
      },
      "humidex": {
        "unitType": "metric"
      },
      "relativeHumidity": {
        "value": "45",
        "units": "%"
      },
      "wind": {},
      "uv": {}
    },
    {
      "period": {
        "name": "Friday night",
        "forecastName": "Friday night"
      },
      "textSummary": "Clear. Low 9.",
      "simpleSummary": "Clear",
      "cloudSummary": "Clear.",
      "iconCode": "30",
      "pop": {
        "units": "%"
      },
      "temperature": {
        "textSummary": "Low 9.",
        "temperature": {
          "value": "9",
          "units": "C",
          "unitType": "metric",
          "class": "low"
        }
      },
      "precipitation": {
        "textSummary": "",
        "precipType": {
          "start": "",
          "end": ""
        }
      },
      "humidex": {
        "unitType": "metric"
      },
      "relativeHumidity": {
        "value": "70",
        "units": "%"
      },
      "wind": {},
      "uv": {}
    },
    {
      "period": {
        "name": "Saturday",
        "forecastName": "Saturday"
      },
      "textSummary": "Increasing cloudiness. High 19.",
      "simpleSummary": "A mix of sun and cloud",
      "cloudSummary": "Increasing cloudiness.",
      "iconCode": "02",
      "pop": {
        "units": "%"
      },
      "temperature": {
        "textSummary": "High 19.",
        "temperature": {
          "value": "19",
          "units": "C",
          "unitType": "metric",
          "class": "high"
        }
      },
      "precipitation": {
        "textSummary": "",
        "precipType": {
          "start": "",
          "end": ""
        }
      },
      "humidex": {
        "unitType": "metric"
      },
      "relativeHumidity": {
        "value": "60",
        "units": "%"
      },
      "wind": {},
      "uv": {}
    },
    {
      "period": {
        "name": "Saturday night",
        "forecastName": "Saturday night"
      },
      "textSummary": "Cloudy with 60 percent chance of showers. Low 12.",
      "simpleSummary": "Chance of showers",
      "cloudSummary": "Cloudy with 60 percent chance of showers.",
      "iconCode": "12",
      "pop": {
        "value": "60",
        "units": "%"
      },
      "temperature": {
        "textSummary": "Low 12.",
        "temperature": {
          "value": "12",
          "units": "C",
          "unitType": "metric",
          "class": "low"
        }
      },
      "precipitation": {
        "textSummary": "",
        "precipType": {
          "type": "rain",
          "start": "120",
          "end": "130"
        }
      },
      "humidex": {
        "unitType": "metric"
      },
      "relativeHumidity": {
        "value": "80",
        "units": "%"
      },
      "wind": {},
      "uv": {}
    },
    {
      "period": {
        "name": "Sunday",
        "forecastName": "Sunday"
      },
      "textSummary": "A mix of sun and cloud with 60 percent chance of showers. High 20.",
      "simpleSummary": "Chance of showers",
      "cloudSummary": "A mix of sun and cloud with 60 percent chance of showers.",
      "iconCode": "06",
      "pop": {
        "value": "60",
        "units": "%"
      },
      "temperature": {
        "textSummary": "High 20.",
        "temperature": {
          "value": "20",
          "units": "C",
          "unitType": "metric",
          "class": "high"
        }
      },
      "precipitation": {
        "textSummary": "",
        "precipType": {
          "type": "rain",
          "start": "130",
          "end": "132"
        }
      },
      "humidex": {
        "unitType": "metric"
      },
      "relativeHumidity": {
        "value": "50",
        "units": "%"
      },
      "wind": {},
      "uv": {}
    },
    {
      "period": {
        "name": "Sunday night",
        "forecastName": "Sunday night"
      },
      "textSummary": "Cloudy periods. Low 10.",
      "simpleSummary": "Cloudy periods",
      "cloudSummary": "Cloudy periods.",
      "iconCode": "32",
      "pop": {
        "units": "%"
      },
      "temperature": {
        "textSummary": "Low 10.",
        "temperature": {
          "value": "10",
          "units": "C",
          "unitType": "metric",
          "class": "low"
        }
      },
      "precipitation": {
        "textSummary": "",
        "precipType": {
          "start": "",
          "end": ""
        }
      },
      "humidex": {
        "unitType": "metric"
      },
      "relativeHumidity": {
        "value": "70",
        "units": "%"
      },
      "wind": {},
      "uv": {}
    },
    {
      "period": {
        "name": "Monday",
        "forecastName": "Monday"
      },
      "textSummary": "A mix of sun and cloud. High 20.",
      "simpleSummary": "A mix of sun and cloud",
      "cloudSummary": "A mix of sun and cloud.",
      "iconCode": "02",
      "pop": {
        "units": "%"
      },
      "temperature": {
        "textSummary": "High 20.",
        "temperature": {
          "value": "20",
          "units": "C",
          "unitType": "metric",
          "class": "high"
        }
      },
      "precipitation": {
        "textSummary": "",
        "precipType": {
          "start": "",
          "end": ""
        }
      },
      "humidex": {
        "unitType": "metric"
      },
      "relativeHumidity": {
        "value": "50",
        "units": "%"
      },
      "wind": {},
      "uv": {}
    }
  ],
  "normals": {
    "summary": "Low 12. High 22.",
    "high": {
      "value": "22",
      "units": "C",
      "unitType": "metric"
    },
    "low": {
      "value": "12",
      "units": "C",
      "unitType": "metric"
    }
  },
  "sun": {
    "sunrise": {
      "utc": {
        "offset": {
          "action": "sunrise",
          "zone": "UTC",
          "utcOffset": "0"
        },
        "minute": "41",
        "hour": "09",
        "timestamp": "20190529094100",
        "day": {
          "value": "29",
          "name": "Wednesday"
        },
        "month": {
          "value": "05",
          "name": "May"
        },
        "year": "2019",
        "textSummary": "Wednesday May 29, 2019 at 09:41 UTC"
      },
      "local": {
        "offset": {
          "action": "sunrise",
          "zone": "EDT",
          "utcOffset": "-4"
        },
        "minute": "41",
        "hour": "05",
        "timestamp": "20190529054100",
        "day": {
          "value": "29",
          "name": "Wednesday"
        },
        "month": {
          "value": "05",
          "name": "May"
        },
        "year": "2019",
        "textSummary": "Wednesday May 29, 2019 at 05:41 EDT"
      }
    },
    "sunset": {
      "utc": {
        "offset": {
          "action": "sunset",
          "zone": "UTC",
          "utcOffset": "0"
        },
        "minute": "49",
        "hour": "00",
        "timestamp": "20190530004900",
        "day": {
          "value": "30",
          "name": "Thursday"
        },
        "month": {
          "value": "05",
          "name": "May"
        },
        "year": "2019",
        "textSummary": "Thursday May 30, 2019 at 00:49 UTC"
      },
      "local": {
        "offset": {
          "action": "sunset",
          "zone": "EDT",
          "utcOffset": "-4"
        },
        "minute": "49",
        "hour": "20",
        "timestamp": "20190529204900",
        "day": {
          "value": "29",
          "name": "Wednesday"
        },
        "month": {
          "value": "05",
          "name": "May"
        },
        "year": "2019",
        "textSummary": "Wednesday May 29, 2019 at 20:49 EDT"
      }
    }
  },
  "yesterday": {
    "temperature": {
      "high": {
        "value": "13.0",
        "units": "C",
        "unitType": "metric"
      },
      "low": {
        "value": "9.5",
        "units": "C",
        "unitType": "metric"
      }
    },
    "precipitation": {
      "value": "4.6",
      "units": "mm",
      "unitType": "metric"
    }
  },
  "almanac": {
    "temperature": {
      "extremeMax": {
        "record": "34.1",
        "units": "C",
        "unitType": "metric",
        "period": "1938-2013",
        "year": "2006"
      },
      "extremeMin": {
        "record": "1.7",
        "units": "C",
        "unitType": "metric",
        "period": "1938-2013",
        "year": "1966"
      },
      "normalMax": {
        "record": "21.2",
        "units": "C",
        "unitType": "metric"
      },
      "normalMin": {
        "record": "9.2",
        "units": "C",
        "unitType": "metric"
      },
      "normalMean": {
        "record": "15.2",
        "units": "C",
        "unitType": "metric"
      }
    },
    "precipitation": {
      "extremeRainfall": {
        "record": "21.2",
        "units": "mm",
        "unitType": "metric",
        "period": "1938-2013",
        "year": "1991"
      },
      "extremeSnowfall": {
        "record": "0.0",
        "units": "cm",
        "unitType": "metric",
        "period": "1938-2013",
        "year": "1938"
      },
      "extremePrecipitation": {
        "record": "21.2",
        "units": "mm",
        "unitType": "metric",
        "period": "1938-2013",
        "year": "1991"
      },
      "extremeSnowOnGround": {
        "record": "0.0",
        "units": "cm",
        "unitType": "metric",
        "period": "1955-2013",
        "year": "1955"
      }
    }
  }
}
```
</p>
</details>

All requests are cached for 5 minutes.