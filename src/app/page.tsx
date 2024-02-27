"use client";
import Navbar from "./components/Navbar";
import { useQuery } from "react-query";
import axios from "axios";


interface WeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherEntry[];
  city: CityInfo;
}

interface WeatherEntry {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

interface CityInfo {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}
export default function Home() {
  const { isLoading, error, data } = useQuery<WeatherData>(
    "repoData",
    async () => {

      const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=chicago&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&cnt=56`)

      return data;
      // fetch(url).then((res) =>
      //   res.json(),
      // ),

  })

  console.log('data', data)
  console.log('===>',process.env.NEXT_PUBLIC_WEATHER_KEY)
  if (isLoading) return 'Loading...';


  return (
    <div className="bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-screen">
      <Navbar />
    </div>
  );
}
