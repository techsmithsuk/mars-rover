export default function formatTemperature (temperature?: number) : string{
    if(!temperature){
        return "N/A";
    }
    return Math.round(temperature) + ' °C';
}