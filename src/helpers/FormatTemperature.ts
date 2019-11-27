export default function formatTemperature (temperature?: number) : string{
    return temperature ? Math.round(temperature) + ' °C' : "N/A";
}

