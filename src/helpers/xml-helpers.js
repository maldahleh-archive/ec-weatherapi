const parseCreation = (object) => {
    const creation = {};

    object.forEach(time => {
        const dateObject = parseDateTime(time);
        if (dateObject['offset']['zone'] === 'UTC') {
            creation['utc'] = dateObject;
        } else {
            creation['local'] = dateObject;
        }
    });

    return creation;
};

const parseDateTime = (object) => {
    return {
        'offset': {
            'action': object['$']['name'],
            'zone': object['$']['zone'],
            'utcOffset': object['$']['UTCOffset'],
        },
        'minute': object['minute'][0],
        'hour': object['hour'][0],
        'timestamp': object['timeStamp'][0],
        'day': {
            'value': object['day'][0]['_'],
            'name': object['day'][0]['$']['name']
        },
        'month': {
            'value': object['month'][0]['_'],
            'name': object['month'][0]['$']['name']
        },
        'year': object['year'][0],
        'textSummary': object['textSummary'][0]
    };
};

const parseLocation = (object) => {
    return {
        'continent': object['continent'][0],
        'country': {
            'name': object['country'][0]['_'],
            'code': object['country'][0]['$']['code'].toUpperCase()
        },
        'province': {
            'name': object['province'][0]['_'],
            'code': object['province'][0]['$']['code'].toUpperCase()
        },
        'region': object['region'][0],
        'city': {
            'name': object['name'][0]['_'],
            'code': object['name'][0]['$']['code'],
            'lat': object['name'][0]['$']['lat'],
            'lon': object['name'][0]['$']['lon']
        }
    }
};

const parseWarnings = (object) => {
    const eventBlock = object['event'];
    if (typeof eventBlock === 'undefined') {
        return {};
    }

    const events = [];
    eventBlock.forEach(event => {
        const dateTime = {
            'type': event['$']['type'],
            'priority': event['$']['priority'],
            'description': event['$']['description']
        };

        event['dateTime'].forEach(date => {
            const dateObject = parseDateTime(date);
            if (dateObject['offset']['zone'] === 'UTC') {
                dateTime['utc'] = dateObject;
            } else {
                dateTime['local'] = dateObject;
            }
        });

        events.push(dateTime);
    });

    return {
        'url': object['$']['url'],
        'events': events
    };
};

const parseCurrent = (object) => {
    if (object === "") {
        return {};
    }

    return {
        'station': {
            'name': object['station'][0]['_'],
            'code': object['station'][0]['$']['code'].toUpperCase(),
            'lat': object['station'][0]['$']['lat'],
            'lon': object['station'][0]['$']['lon']
        },
        'time': {
            'utc': parseDateTime(object['dateTime'][0]),
            'local': parseDateTime(object['dateTime'][1])
        },
        'condition': object['condition'],
        'iconCode': object['iconCode'][0]['_'],
        'temperature': parseMeasurement(object['temperature'][0]),
        'dewpoint': parseMeasurement(object['dewpoint'][0]),
        'pressure': {
            'value': object['pressure'][0]['_'],
            'units': object['pressure'][0]['$']['units'],
            'unitType': object['pressure'][0]['$']['unitType'],
            'change': object['pressure'][0]['$']['change'],
            'tendency': object['pressure'][0]['$']['tendency']
        },
        'visibility': parseMeasurement(object['visibility'][0]),
        'relativeHumidity': parseMeasurement(object['relativeHumidity'][0]),
        'wind': {
            'speed': parseMeasurement(object['wind'][0]['speed'][0]),
            'gust': parseMeasurement(object['wind'][0]['gust'][0]),
            'direction': object['wind'][0]['direction'][0],
            'bearing': {
                'value': object['wind'][0]['bearing'][0]['_'],
                'units': object['wind'][0]['bearing'][0]['$']['units']
            }
        }
    };
};

const parseForecast = (object) => {
    if (typeof object === 'undefined') {
        return [];
    }

    const forecastObject = [];

    object.forEach(forecast => {
        const modelledForecast = {
            'period': {
                'name': forecast['period'][0]['_'],
                'forecastName': forecast['period'][0]['$']['textForecastName']
            },
            'textSummary': forecast['textSummary'][0],
            'simpleSummary': forecast['abbreviatedForecast'][0]['textSummary'][0],
            'cloudSummary': forecast['cloudPrecip'][0]['textSummary'][0],
            'iconCode': forecast['abbreviatedForecast'][0]['iconCode'][0]['_'],
            'pop': parseMeasurement(forecast['abbreviatedForecast'][0]['pop'][0]),
            'temperature': {
                'textSummary': forecast['temperatures'][0]['textSummary'][0],
                'temperature': {
                    'value': forecast['temperatures'][0]['temperature'][0]['_'],
                    'units': forecast['temperatures'][0]['temperature'][0]['$']['units'],
                    'unitType': forecast['temperatures'][0]['temperature'][0]['$']['unitType'],
                    'class': forecast['temperatures'][0]['temperature'][0]['$']['class']
                }
            },
            'precipitation': {
                'textSummary': forecast['precipitation'][0]['textSummary'][0],
                'precipType': {
                    'type': forecast['precipitation'][0]['precipType'][0]['_'],
                    'start': forecast['precipitation'][0]['precipType'][0]['$']['start'],
                    'end': forecast['precipitation'][0]['precipType'][0]['$']['end']
                }
            },
            'humidex': parseMeasurement(forecast['humidex'][0]),
            'relativeHumidity': parseMeasurement(forecast['relativeHumidity'][0])
        };

        const windPath = forecast['winds'];
        if (typeof windPath !== 'undefined' && windPath.findIndex(e => e === "") === -1) {
            modelledForecast['wind'] = {
                'textSummary': forecast['winds'][0]['textSummary'][0],
                'wind': {
                    'speed': {
                        'value': forecast['winds'][0]['wind'][0]['speed'][0]['_'],
                        'units': forecast['winds'][0]['wind'][0]['speed'][0]['$']['units'],
                        'unitType': forecast['winds'][0]['wind'][0]['speed'][0]['$']['unitType']
                    },
                    'gust': {
                        'value': forecast['winds'][0]['wind'][0]['gust'][0]['_'],
                        'units': forecast['winds'][0]['wind'][0]['gust'][0]['$']['units'],
                        'unitType': forecast['winds'][0]['wind'][0]['gust'][0]['$']['unitType']
                    },
                    'direction': forecast['winds'][0]['wind'][0]['direction'][0],
                    'bearing': {
                        'value': forecast['winds'][0]['wind'][0]['bearing'][0]['_'],
                        'units': forecast['winds'][0]['wind'][0]['bearing'][0]['$']['units']
                    }
                }
            }
        } else {
            modelledForecast['wind'] = {}
        }

        const uvPath = forecast['uv'];
        if (typeof uvPath !== 'undefined') {
            modelledForecast['uv'] = {
                'value': uvPath[0]['index'][0],
                'category': uvPath[0]['$']['category'],
                'textSummary': uvPath[0]['textSummary'][0]
            };
        } else {
            modelledForecast['uv'] = {};
        }

        forecastObject.push(modelledForecast);
    });

    return forecastObject;
};

const parseHourly = (object) => {
    const dateTimeObject = object['dateTime'];
    if (typeof dateTimeObject === 'undefined') {
        return {};
    }

    const hourly = {
        'issue': {},
        'forecast': {}
    };

    dateTimeObject.forEach(time => {
        const dateObject = parseDateTime(time);
        if (dateObject['offset']['zone'] === 'UTC') {
            hourly['issue']['utc'] = dateObject;
        } else {
            hourly['issue']['local'] = dateObject;
        }
    });

    object['hourlyForecast'].forEach(hour => {
        hourly['forecast'][hour['$']['dateTimeUTC']] = {
            'condition': hour['condition'],
            'iconCode': hour['iconCode']['_'],
            'temperature': parseMeasurement(hour['temperature'][0]),
            'chanceOfPrecip': parseMeasurement(hour['lop'][0]),
            'windChill': parseMeasurement(hour['windChill'][0]),
            'humidex': parseMeasurement(hour['humidex'][0]),
            'wind': {
                'speed': parseMeasurement(hour['wind'][0]['speed'][0]),
                'gust': parseMeasurement(hour['wind'][0]['gust'][0]),
                'direction': {
                    'direction': hour['wind'][0]['direction'][0]['_'],
                    'directionText': hour['wind'][0]['direction'][0]['$']['windDirFull']
                }
            }
        };
    });

    return hourly;
};

const parseNormals = (object) => {
    const normals = {
        'summary': object['textSummary'][0]
    };

    object['temperature'].forEach(temp => {
        normals[temp['$']['class']] = parseMeasurement(temp);
    });

    return normals;
};

const parseSunInfo = (object) => {
    const sunBlock = object['dateTime'];
    if (typeof sunBlock === 'undefined') {
        return {};
    }

    const sunInfo = {};
    sunBlock.forEach(sun => {
        const dateObject = parseDateTime(sun);
        if (typeof sunInfo[dateObject['offset']['action']] === 'undefined') {
            sunInfo[dateObject['offset']['action']] = {};
        }

        if (dateObject['offset']['zone'] === 'UTC') {
            sunInfo[dateObject['offset']['action']]['utc'] = dateObject;
        } else {
            sunInfo[dateObject['offset']['action']]['local'] = dateObject;
        }
    });

    return sunInfo;
};

const parseYesterday = (object) => {
    const yesterdayBlock = object['temperature'];
    if (typeof yesterdayBlock === 'undefined') {
        return {};
    }

    const tempObject = {};
    yesterdayBlock.forEach(temp => {
        tempObject[temp['$']['class']] = parseMeasurement(temp);
    });

    return {
        'temperature': tempObject,
        'precipitation': parseMeasurement(object['precip'][0])
    };
};

const parseAlmanac = (object) => {
    const tempRecords = {};
    object['temperature'].forEach(r => {
        tempRecords[r['$']['class']] = {
            'record': r['_'],
            'units': r['$']['units'],
            'unitType': r['$']['unitType'],
            'period': r['$']['period'],
            'year': r['$']['year']
        };
    });

    const precipRecords = {};
    object['precipitation'].forEach(r => {
        precipRecords[r['$']['class']] = {
            'record': r['_'],
            'units': r['$']['units'],
            'unitType': r['$']['unitType'],
            'period': r['$']['period'],
            'year': r['$']['year']
        };
    });

    return {
        'temperature': tempRecords,
        'precipitation': precipRecords
    };
};

const parseMeasurement = (object) => {
    return {
        'value': object['_'],
        'units': object['$']['units'],
        'unitType': object['$']['unitType']
    };
};

export { parseCreation, parseWarnings, parseCurrent, parseForecast, parseHourly, parseNormals, parseLocation,
    parseSunInfo, parseYesterday, parseAlmanac }