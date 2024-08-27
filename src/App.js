import React from "react";
import "./App.css";
import Info from "../src/components/info";
import Form from "../src/components/form";
import Weather from "../src/components/weather";

const API_KEY = "fe9666cdb9f49ed4bf52144124b403b9";

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined,
  };

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      try {
        const api_url = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await api_url.json();

        this.setState({
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
          sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
          error: "",
        });
      } catch (error) {
        this.setState({ error: "Ошибка получения данных" });
      }
    } else {
      this.setState({ error: "Введите название города" });
    }
  };

  render() {
    const { temp, city, country, sunrise, sunset, error } = this.state;

    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <Info />
            <div className="input">
              <Form weatherMethod={this.gettingWeather} />
              <Weather
                temp={temp}
                city={city}
                country={country}
                sunrise={sunrise}
                sunset={sunset}
                error={error}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
