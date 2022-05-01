import React from 'react';
import propTypes from 'prop-types';
import { Image, StyleSheet, Text, View, ScrollView , StatusBar, Button, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import 'react-native-gesture-handler';



//https://api.openweathermap.org/data/2.5/weather?lat=55.589602422020945&lon=38.52021569389712&appid=e38eef16d70128130cea30aa45605f68&units=metric

//ежедневный прогноз
//https://api.openweathermap.org/data/2.5/onecall?lat=55.68316165842715&lon=37.923443615597904&exclude=hourly,current&appid=e38eef16d70128130cea30aa45605f68&units=metric
const weather_options = {
    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#20002c', '#0575E6'],
        color: 'white',
        statBar: 'light-content',
        text: 'Rain',
    },
    Snow: {
        iconName: 'weather-snowy-heavy',
        gradient: ['#4CA1AF', '#004e92'],
        color: 'white',
        statBar: 'light-content',
        text: 'Snow',
    },
    Clouds: {
        iconName: 'cloud',
        gradient: ['#3a7bd5', '#3f4c6b'],
        color: 'white',
        statBar: 'light-content',
        text: 'Clouds',
    },
    Thunderstorm: {
        iconName: 'weather-lightning-rainy',
        gradient: ['#536976', '#292E49'],
        color: 'white',
        statBar: 'light-content',
        text: 'Thunderstorm',
    },
    Drizzle: {
        iconName: 'weather-partly-rainy',
        gradient: ['#7F7FD5', '#1f4037'],
        color: 'white',
        statBar: 'light-content',
        text: 'Drizzle',
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#334d50', '#000000'],
        color: 'white',
        statBar: 'light-content',
        text: 'Mist',
    },
    Smoke: {
        iconName: 'weather-windy-variant',
        gradient: ['#076585', '#093637'],
        color: 'white',
        statBar: 'light-content',
        text: 'Smoke',
    },
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#0f0c29', '#302b63', '#24243e'],
        color: 'white',
        statBar: 'light-content',
        text: 'Haze',
    },
    Clear: {
        iconName: 'white-balance-sunny',
        gradient: ['#00d2ff', '#3a7bd5'],
        color: 'yellow',
        statBar: 'light-content',
        text: 'Sun'
    },
    Fog: {
        iconName: 'weather-fog',
        gradient: ['#bdc3c7', '#2c3e50'],
        color: 'white',
        statBar: 'light-content',
        text: 'Fog',

    },
    Tornado: {
        iconName: 'weather-tornado',
        gradient: ['#f83600', '#cb2d3e'],
        color: 'white',
        statBar: 'light-content',
        text: 'Tornado',
    },
    Squall: {
        iconName: 'weather-windy',
        gradient: ['#237A57', '#434343'],
        color: 'white',
        statBar: 'light-content',
        text: 'Squall'
    },


};



export default function Weather({temp, condition, temp_max, temp_min, feels_like, pressure, humidity,
    name,visibility, sunrise_hour, sunrise_minute, sunset_hour, sunset_minute, speed, wind_gust, 
    hourly_forecast_temp,
    hourly_forecast_time,
    hourly_forecast_weather_main,
    daily_forecast_temp_max,
    daily_forecast_temp_min,
    daily_forecast_weather_main,
    daily_forecast_date,
    moon_time, navigation
    }){

    return (
            <View style = {{flex:1}}>
                <LinearGradient colors={weather_options[condition].gradient} style = {styles.container_view}>
                    <ScrollView style={styles.MainScrollView} showsVerticalScrollIndicator={false}>
                    <StatusBar hidden={false} barStyle={weather_options[condition].statBar}/>
                    <View style = {styles.top_of_screen}> 
                        <Text style = {styles.text_name}>{name}</Text>        
                        <MaterialCommunityIcons name = {weather_options[condition].iconName} size={96} color={weather_options[condition].color} />
                        <Text style = {styles.temp}>{weather_options[condition].text}</Text>
                        <Text style = {styles.temp}><FontAwesome name="thermometer-half" size={50} color="white" /> {temp}°</Text>
                    </View>
                    
                    <View style = {styles.Transparent_zone} >

                        <View>
                            <Text style = {styles.Text_heading_top_transparent} >Forecast for 24 hours</Text>
                        </View>

                        <ScrollView style = {styles.ScrollView_left_right} horizontal={true} showsHorizontalScrollIndicator={false}>

                        <View style = {styles.View_left_right}>
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_time[1]}</Text>
                            <MaterialCommunityIcons name = {weather_options[hourly_forecast_weather_main[1]].iconName} size={32} color={weather_options[hourly_forecast_weather_main[1]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_temp[1]}°</Text>
                        </View>

                        <View style = {styles.View_left_right}>
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_time[2]}</Text>
                            <MaterialCommunityIcons name = {weather_options[hourly_forecast_weather_main[2]].iconName} size={32} color={weather_options[hourly_forecast_weather_main[2]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_temp[2]}°</Text>
                        </View>

                        <View style = {styles.View_left_right}>
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_time[3]}</Text>
                            <MaterialCommunityIcons name = {weather_options[hourly_forecast_weather_main[3]].iconName} size={32} color={weather_options[hourly_forecast_weather_main[3]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_temp[3]}°</Text>
                        </View>

                        <View style = {styles.View_left_right}>
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_time[4]}</Text>
                            <MaterialCommunityIcons name = {weather_options[hourly_forecast_weather_main[4]].iconName} size={32} color={weather_options[hourly_forecast_weather_main[4]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_temp[4]}°</Text>
                        </View>
                        <View style = {styles.View_left_right}>
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_time[5]}</Text>
                            <MaterialCommunityIcons name = {weather_options[hourly_forecast_weather_main[5]].iconName} size={32} color={weather_options[hourly_forecast_weather_main[5]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_temp[5]}°</Text>
                        </View>
                        <View style = {styles.View_left_right}>
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_time[6]}</Text>
                            <MaterialCommunityIcons name = {weather_options[hourly_forecast_weather_main[6]].iconName} size={32} color={weather_options[hourly_forecast_weather_main[6]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_temp[6]}°</Text>
                        </View>
                        <View style = {styles.View_left_right}>
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_time[7]}</Text>
                            <MaterialCommunityIcons name = {weather_options[hourly_forecast_weather_main[7]].iconName} size={32} color={weather_options[hourly_forecast_weather_main[7]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_temp[7]}°</Text>
                        </View>
                        <View style = {styles.View_left_right}>
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_time[8]}</Text>
                            <MaterialCommunityIcons name = {weather_options[hourly_forecast_weather_main[8]].iconName} size={32} color={weather_options[hourly_forecast_weather_main[8]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_temp[8]}°</Text>
                        </View>
                        <View style = {styles.View_left_right}>
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_time[9]}</Text>
                            <MaterialCommunityIcons name = {weather_options[hourly_forecast_weather_main[9]].iconName} size={32} color={weather_options[hourly_forecast_weather_main[9]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_temp[9]}°</Text>
                        </View>
                        <View style = {styles.View_left_right}>
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_time[10]}</Text>
                            <MaterialCommunityIcons name = {weather_options[hourly_forecast_weather_main[10]].iconName} size={32} color={weather_options[hourly_forecast_weather_main[10]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_temp[10]}°</Text>
                        </View>
                        <View style = {styles.View_left_right}>
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_time[11]}</Text>
                            <MaterialCommunityIcons name = {weather_options[hourly_forecast_weather_main[11]].iconName} size={32} color={weather_options[hourly_forecast_weather_main[11]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_temp[11]}°</Text>
                        </View>
                        <View style = {styles.View_left_right}>
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_time[12]}</Text>
                            <MaterialCommunityIcons name = {weather_options[hourly_forecast_weather_main[12]].iconName} size={32} color={weather_options[hourly_forecast_weather_main[12]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_temp[12]}°</Text>
                        </View>
                        <View style = {styles.View_left_right}>
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_time[13]}</Text>
                            <MaterialCommunityIcons name = {weather_options[hourly_forecast_weather_main[13]].iconName} size={32} color={weather_options[hourly_forecast_weather_main[13]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_temp[13]}°</Text>
                        </View>
                        <View style = {styles.View_left_right}>
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_time[14]}</Text>
                            <MaterialCommunityIcons name = {weather_options[hourly_forecast_weather_main[14]].iconName} size={32} color={weather_options[hourly_forecast_weather_main[14]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_temp[14]}°</Text>
                        </View>
                        <View style = {styles.View_left_right}>
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_time[15]}</Text>
                            <MaterialCommunityIcons name = {weather_options[hourly_forecast_weather_main[15]].iconName} size={32} color={weather_options[hourly_forecast_weather_main[15]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_temp[15]}°</Text>
                        </View>
                        <View style = {styles.View_left_right}>
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_time[16]}</Text>
                            <MaterialCommunityIcons name = {weather_options[hourly_forecast_weather_main[16]].iconName} size={32} color={weather_options[hourly_forecast_weather_main[16]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_temp[16]}°</Text>
                        </View>
                        <View style = {styles.View_left_right}>
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_time[17]}</Text>
                            <MaterialCommunityIcons name = {weather_options[hourly_forecast_weather_main[17]].iconName} size={32} color={weather_options[hourly_forecast_weather_main[17]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_temp[17]}°</Text>
                        </View>
                        <View style = {styles.View_left_right}>
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_time[18]}</Text>
                            <MaterialCommunityIcons name = {weather_options[hourly_forecast_weather_main[18]].iconName} size={32} color={weather_options[hourly_forecast_weather_main[18]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_temp[18]}°</Text>
                        </View>
                        <View style = {styles.View_left_right}>
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_time[19]}</Text>
                            <MaterialCommunityIcons name = {weather_options[hourly_forecast_weather_main[19]].iconName} size={32} color={weather_options[hourly_forecast_weather_main[19]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_temp[19]}°</Text>
                        </View>
                        <View style = {styles.View_left_right}>
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_time[20]}</Text>
                            <MaterialCommunityIcons name = {weather_options[hourly_forecast_weather_main[20]].iconName} size={32} color={weather_options[hourly_forecast_weather_main[20]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_temp[20]}°</Text>
                        </View>
                        <View style = {styles.View_left_right}>
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_time[21]}</Text>
                            <MaterialCommunityIcons name = {weather_options[hourly_forecast_weather_main[21]].iconName} size={32} color={weather_options[hourly_forecast_weather_main[21]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_temp[21]}°</Text>
                        </View>
                        <View style = {styles.View_left_right}>
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_time[22]}</Text>
                            <MaterialCommunityIcons name = {weather_options[hourly_forecast_weather_main[22]].iconName} size={32} color={weather_options[hourly_forecast_weather_main[22]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_temp[22]}°</Text>
                        </View>
                        <View style = {styles.View_left_right}>
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_time[23]}</Text>
                            <MaterialCommunityIcons name = {weather_options[hourly_forecast_weather_main[23]].iconName} size={32} color={weather_options[hourly_forecast_weather_main[23]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_temp[23]}°</Text>
                        </View>
                        <View style = {styles.View_left_right}>
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_time[24]}</Text>
                            <MaterialCommunityIcons name = {weather_options[hourly_forecast_weather_main[24]].iconName} size={32} color={weather_options[hourly_forecast_weather_main[24]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_temp[24]}°</Text>
                        </View>
                        <View style = {styles.View_left_right}>
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_time[25]}</Text>
                            <MaterialCommunityIcons name = {weather_options[hourly_forecast_weather_main[25]].iconName} size={32} color={weather_options[hourly_forecast_weather_main[25]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{hourly_forecast_temp[25]}°</Text>
                        </View>
                        </ScrollView>
                    </View>

                    <View style = {styles.Transparent_zone}>
                    <View>
                        <Text style = {styles.Text_heading_top_transparent} >Forecast for 7 days</Text>
                    </View>

                    <ScrollView style = {styles.ScrollView_left_right} horizontal={true} showsHorizontalScrollIndicator={false} >
                        <View style = {styles.View_left_right}>
                            <Text  style = {styles.text_ScrollView_left_right}>{daily_forecast_date[1]}</Text>
                            <MaterialCommunityIcons name = {weather_options[daily_forecast_weather_main[1]].iconName} size={32} color={weather_options[daily_forecast_weather_main[1]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{daily_forecast_temp_max[1]}° / {daily_forecast_temp_min[1]}°</Text>
                        </View>
                        <View style = {styles.View_left_right}>
                            <Text  style = {styles.text_ScrollView_left_right}>{daily_forecast_date[2]}</Text>
                            <MaterialCommunityIcons name = {weather_options[daily_forecast_weather_main[2]].iconName} size={32} color={weather_options[daily_forecast_weather_main[2]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{daily_forecast_temp_max[2]}° / {daily_forecast_temp_min[2]}°</Text>
                        </View>
                        <View style = {styles.View_left_right}>
                            <Text  style = {styles.text_ScrollView_left_right}>{daily_forecast_date[3]}</Text>
                            <MaterialCommunityIcons name = {weather_options[daily_forecast_weather_main[3]].iconName} size={32} color={weather_options[daily_forecast_weather_main[3]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{daily_forecast_temp_max[3]}° / {daily_forecast_temp_min[3]}°</Text>
                        </View>
                        <View style = {styles.View_left_right}>
                            <Text  style = {styles.text_ScrollView_left_right}>{daily_forecast_date[4]}</Text>
                            <MaterialCommunityIcons name = {weather_options[daily_forecast_weather_main[4]].iconName} size={32} color={weather_options[daily_forecast_weather_main[4]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{daily_forecast_temp_max[4]}° / {daily_forecast_temp_min[4]}°</Text>
                        </View>
                        <View style = {styles.View_left_right}>
                            <Text  style = {styles.text_ScrollView_left_right}>{daily_forecast_date[5]}</Text>
                            <MaterialCommunityIcons name = {weather_options[daily_forecast_weather_main[5]].iconName} size={32} color={weather_options[daily_forecast_weather_main[5]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{daily_forecast_temp_max[5]}° / {daily_forecast_temp_min[5]}°</Text>
                        </View>
                        <View style = {styles.View_left_right}>
                            <Text  style = {styles.text_ScrollView_left_right}>{daily_forecast_date[6]}</Text>
                            <MaterialCommunityIcons name = {weather_options[daily_forecast_weather_main[6]].iconName} size={32} color={weather_options[daily_forecast_weather_main[6]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{daily_forecast_temp_max[6]}° / {daily_forecast_temp_min[6]}°</Text>
                        </View>
                        <View style = {styles.View_left_right}>
                            <Text  style = {styles.text_ScrollView_left_right}>{daily_forecast_date[7]}</Text>
                            <MaterialCommunityIcons name = {weather_options[daily_forecast_weather_main[7]].iconName} size={32} color={weather_options[daily_forecast_weather_main[7]].color} />
                            <Text style = {styles.text_ScrollView_left_right}>{daily_forecast_temp_max[7]}° / {daily_forecast_temp_min[7]}°</Text>
                        </View>
                    </ScrollView>
                    </View>

                    <View style = {styles.Transparent_zone} >

                        <View style = {styles.MiddleViewTransparent}>
                            <View style={styles.MiddleViewTransparentElement}>

                            </View>
                        </View>
                        

                        <View>
                            <Text style = {styles.Text_heading_top_transparent} >More information</Text>
                        </View>
                        <View style = {{marginBottom:10, marginLeft: 20, marginRight: 20}}>

                            <View style = {styles.Transparent_row}>
                                <View style = {styles.Transparent_column}>
                                    <View style={styles.Transparent_square}>
                                        <Text style = {styles.text_heading_square}>Max Today:</Text>
                                        <Text style = {styles.text_square}><FontAwesome5 name="thermometer-full" size={20} color="white"/> {daily_forecast_temp_max[0]}°</Text>
                                    </View>
                                    <View style={styles.Transparent_square}>
                                        <Text style = {styles.text_heading_square}>Feels: </Text>
                                        <Text style = {styles.text_square}><FontAwesome5 name="thermometer-half" size={20} color="white" /> {feels_like}°</Text>
                                    </View>
                                    <View style={styles.Transparent_square}>
                                        <Text style = {styles.text_heading_square}>Humidity: </Text>
                                        <Text style = {styles.text_square}><Ionicons name="water" size={20} color="white" />{humidity}%</Text>
                                    </View>
                                    <View style={styles.Transparent_square}>
                                        <Text style = {styles.text_heading_square}>Sunrise: </Text>
                                        <Text style = {styles.text_square}><MaterialCommunityIcons name="weather-sunset-up" size={24} color="white" /> {sunrise_hour} : {sunrise_minute}</Text>
                                    </View>
                                    <View style={styles.Transparent_square}>
                                        <Text style = {styles.text_heading_square}>Wind Speed: </Text>
                                        <Text style = {styles.text_square}><MaterialCommunityIcons name="weather-windy" size={20} color="white" />{speed} m/s</Text>
                                    </View>
                                    <View style={styles.Transparent_square}>
                                        <Text style = {styles.text_heading_square}>Moonrise: </Text>
                                        <Text style = {styles.text_square}><Ionicons name='moon' size={20} color='white' /> {moon_time[0]}: {moon_time[1]}</Text>
                                    </View>
                                </View>

                                <View style = {styles.Transparent_column}>
                                    <View style={styles.Transparent_square}>
                                        <Text style = {styles.text_heading_square}>Min Today: </Text>
                                        <Text style = {styles.text_square}><FontAwesome5 name="thermometer-quarter" size={20} color="white" /> {daily_forecast_temp_min[0]}°</Text>
                                    </View>
                                    <View style={styles.Transparent_square}>
                                        <Text style = {styles.text_heading_square}>Pressure: </Text>
                                        <Text style = {styles.text_square}><MaterialCommunityIcons name="arrow-collapse-vertical" size={20} color="white" /> {pressure} <Text style={{fontSize: 20}}>mm</Text></Text>
                                    </View>
                                    <View style={styles.Transparent_square}>
                                        <Text style = {styles.text_heading_square}>Visibility: </Text>
                                        <Text style = {styles.text_square}><Ionicons name="eye" size={20} color="white" /> {visibility} km</Text>
                                    </View>
                                    <View style={styles.Transparent_square}>
                                        <Text style = {styles.text_heading_square}>Sunset: </Text>
                                        <Text style = {styles.text_square}><MaterialCommunityIcons name="weather-sunset-down" size={24} color="white" /> {sunset_hour} : {sunset_minute}</Text>
                                    </View>
                                    <View style={styles.Transparent_square}>
                                        <Text style = {styles.text_heading_square}>Wind Gust: </Text>
                                        <Text style = {styles.text_square}><FontAwesome5 name="wind" size={20} color="white" /> {wind_gust} m/s</Text>
                                    </View>
                                    <View style={styles.Transparent_square}>
                                        <Text style = {styles.text_heading_square}>Moonset: </Text>
                                        <Text style = {styles.text_square}><Ionicons name='moon-outline' size={20} color='white' /> {moon_time[2]} : {moon_time[3]}</Text>
                                    </View>
                                    
                                </View>
                            </View>
                        </View>
                    </View>
                    </ScrollView>
                </LinearGradient>
            </View>
    );
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf(['Thunderstorm', 'Drizzle', 'Rain', 'Snow','Mist','Smoke','Haze', 'Dust', 'Fog', 'Sand', 'Dust', 'Ash', 'Squall', 'Tornado', 'Clear', 'Clouds']).isRequired
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 70,
    }, 

    container_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    top_of_screen: {
        flex: 0.7,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 30,
        marginTop: 60
    },






    ScrollView_left_right: {
        padding: 10,
        flex:0.5, 
        marginTop: 10,
        
    },

    MainScrollView: {
        flex: 1,
    },

    View_left_right: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        
    },





    Transparent_zone: {
        flex:1,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 20,
        marginBottom: 30,
        marginLeft: 20,
        marginRight: 20,
    },

    Transparent_row: {
        flex:1,
        flexDirection: 'row',

    },

    Transparent_column: {
        flex:1,
        flexDirection: 'column',
        padding:10,
    },

    Transparent_square: {
        marginTop:10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 15,
    },

    MiddleViewTransparent: {
        flex: 1,
    },












    text: {
        fontSize: 20,
        color: 'white',
    },

    text_name: {
        fontSize: 30,
        color: 'white',
    },

    text_heading_square: {
        textAlign: 'center',
        opacity: 0.6,
        marginTop: 30,
        marginBottom: 10,
        fontSize: 20,
        color: 'white',
    },
    
    text_square: {
        textAlign: 'center',
        marginBottom: 30,
        fontSize: 20,
        color: 'white',
    },

    temp:{
        fontSize: 52,
        color: 'white',
        textAlign: 'center'
    },

    text_ScrollView_left_right: {
        fontSize: 20,
        color: 'white',

    },

    Text_heading_top_transparent: {
        alignItems: 'flex-start',
        color: 'white',
        opacity: 0.6,
        fontSize: 20,
        marginLeft: 20,
        marginTop: 10,

    },
});