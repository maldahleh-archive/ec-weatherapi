# Environment Canada Weather API
Environment Canada Weather API is a Node.JS Express App that provides simple endpoints for retrieving JSON weather data
from Environment Canada.

### Endpoints
/cities - Return city ID, province code and english/french names of all cities which Environment Canada provides 
forecasts for.

/forecast?cityId={city ID}&province={province code}&language={language, e for english, f for french} - Return's 
Environment Canada's Forecast as JSON for the given city.

All responses are cached for 5 minutes.