import React from 'react';
import { Text, View, ScrollView, Alert, Pressable } from 'react-native'
import * as Location from 'expo-location';
import axios from 'axios';
import Form from './Form'
import Loading from './Loading';
import 'react-native-gesture-handler';
import { city_info } from './CityChoice';



const API_KEY = 'e38eef16d70128130cea30aa45605f68';


class CityScreen extends React.Component { 
    
    state = {
        isLoading: true
      }
    
    
      getWeather = async (latitude, longitude) => { 
        console.log(latitude, longitude)
        console.log(city_info)
    
        //Запросы
        var {data: {main: {temp, temp_max, temp_min, feels_like, pressure, humidity}, weather, name, visibility, wind: {speed}, sys: {sunrise, sunset}}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        //Текущая погода
        const {data: {current: {wind_gust}}} = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly&appid=${API_KEY}&units=metric`);
        //Запрос по дням
        const data1 = JSON.parse(JSON.stringify(await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly&appid=${API_KEY}&units=metric`)));
        //почасовой запрос
        const data2 = JSON.parse(JSON.stringify(await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=daily&appid=${API_KEY}&units=metric`)))
    
        //Высчитываем мм. рт. ст.
        pressure = Math.round((pressure * (760/101325))*100)
    
        //почасовой прогноз погоды на 48 часов
        var hourly_forecast_temp = []
        var hourly_forecast_time = []
        var hourly_forecast_weather_main = []
        var time_data
        var object_data
        var i = 0
        while (i<48) {
          hourly_forecast_temp[i] = Math.round(data2.data.hourly[i].temp);
          time_data = (data2.data.hourly[i].dt)*1000;
          object_data = new Date(time_data);
          hourly_forecast_time[i] = String(object_data).substring(16,18);
          hourly_forecast_weather_main[i] = data2.data.hourly[i].weather[0].main;
          i++
        }
    
        //прогноз погоды на 7 дней
        var daily_forecast_temp_max = []
        var daily_forecast_temp_min = []
        var daily_forecast_weather_main = []
        var daily_forecast_date = []
        i = 0
        while (i<8) {
          daily_forecast_temp_max[i] = Math.round(data1.data.daily[i].temp.max)
          daily_forecast_temp_min[i] = Math.round(data1.data.daily[i].temp.min)
          daily_forecast_weather_main[i] = data1.data.daily[i].weather[0].main
          time_data = (data1.data.daily[i].dt)* 1000
          object_data = new Date (time_data)
          daily_forecast_date[i] = String(object_data).substring(4,10);
          i++
        }
    
        //Находим время Восхода и Заката Солнца
        const unixTimestamp = sunrise
        const unixTimestamp2 = sunset
    
        const milliseconds = unixTimestamp * 1000 
        const milliseconds2 = unixTimestamp2 * 1000 
    
        const dateObject = new Date(milliseconds)
        const dateObject2 = new Date(milliseconds2)
        
        const sunrise_hour = String(dateObject).substring(16,18)
        const sunrise_minute = String(dateObject).substring(19,21)
        const sunset_hour = String(dateObject2).substring(16,18)
        const sunset_minute = String(dateObject2).substring(19,21)
    
        //Находим время Восхода и Заката Луны
        const object_data_moon_rise = new Date ((data1.data.daily[0].moonrise)*1000)
        const object_data_moon_set = new Date ((data1.data.daily[0].moonset)*1000)
        const moon_time= []
        moon_time[0] = String(object_data_moon_rise).substring(16,18)
        moon_time[1] = String(object_data_moon_rise).substring(19,21)
        moon_time[2] = String(object_data_moon_set).substring(16,18)
        moon_time[3] = String(object_data_moon_set).substring(19,21)
    
    
    
        this.setState({isLoading: false, temp, temp_max, temp_min, feels_like, pressure, humidity, visibility, sunrise_hour, sunrise_minute,
                                  sunset_hour, sunset_minute, condition: weather[0].main, name, speed, wind_gust, 
                                  hourly_forecast_temp,
                                  hourly_forecast_time,
                                  hourly_forecast_weather_main,
                                  daily_forecast_temp_max,
                                  daily_forecast_temp_min,
                                  daily_forecast_weather_main,
                                  daily_forecast_date,
                                  moon_time
    
                                    }); 
      } 
    
      getLocation = async () => {
        const data_city = JSON.parse(JSON.stringify(await axios.get(`https://nominatim.openstreetmap.org/?addressdetails=1&q=${city_info}&format=json&limit=1`)))
        const latitude = data_city.data[0].lat
        const longitude = data_city.data[0].lon
        this.getWeather(latitude, longitude);
      }
      
      componentDidMount() {
        this.getLocation();
      }
    
      render () {
        const {isLoading, temp, condition, temp_max, temp_min, feels_like, pressure, name, humidity, visibility, sunrise_hour, 
                sunrise_minute, sunset_hour, sunset_minute, speed, wind_gust, 
                hourly_forecast_temp,
                hourly_forecast_time,
                hourly_forecast_weather_main,
                daily_forecast_temp_max,
                daily_forecast_temp_min,
                daily_forecast_weather_main,
                daily_forecast_date,
                moon_time
                } = this.state;
    
        return (
          isLoading ? <Loading /> : 
          <View style = {{flex:1}}>
          <Form temp_min={Math.round(temp_min)} temp={Math.round(temp)} 
          feels_like={Math.round(feels_like)} name={name} pressure ={pressure} humidity={humidity} 
          condition={condition} visibility={Math.round(visibility)/1000} sunrise_hour={sunrise_hour} 
          sunrise_minute = {sunrise_minute} sunset_hour={sunset_hour} sunset_minute={sunset_minute}
          wind_gust={Math.round(wind_gust)} speed = {Math.round(speed)} 
          hourly_forecast_temp = {hourly_forecast_temp}
          hourly_forecast_time = {hourly_forecast_time}
          hourly_forecast_weather_main = {hourly_forecast_weather_main}
          daily_forecast_temp_max = {daily_forecast_temp_max}
          daily_forecast_temp_min ={daily_forecast_temp_min}
          daily_forecast_weather_main ={daily_forecast_weather_main}
          daily_forecast_date = {daily_forecast_date}
          moon_time={moon_time}
          temp_max={Math.round(temp_max)}
          />
          </View>
        );
      }
    }


export default CityScreen;








