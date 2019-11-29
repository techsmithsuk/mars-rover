import moment from "moment";

export type SingleDayData = {
    id:number;
    marsSolDate?: string;
    earthSolDate?: string
    averageTemp?: number;
    minTemp?: number;
    maxTemp?: number;
    averageWindSpeed?: number;
    windDirection?: string;
    averagePressure?: number;
    weekdayName: string;
}

export async function fetchWeatherData(): Promise<SingleDayData[]> {
    const response = await fetch('https://api.nasa.gov/insight_weather/?api_key=dxcDht667Acmm4X2g4KpXub7NK5hU2S8GqL8Y067&feedtype=json&ver=1.0');
    const json = await response.json();
    return parseData(json);
} 

function parseData(apiJson: any): SingleDayData[] {
    const dayData: SingleDayData[] = [];
    const solKeys : string[] = apiJson['sol_keys'];
    let identity :number = 0;
    solKeys.forEach(key => {
        const apiData = apiJson[key];
        const data: SingleDayData = {  
            id:identity,
            marsSolDate: key,
            earthSolDate: moment(apiData.First_UTC).format("MMM Do YY"),            
            averageTemp: apiData.AT.av,
            minTemp: apiData.AT.mn,
            maxTemp: apiData.AT.mx,
            averageWindSpeed: apiData.HWS.av,
            windDirection: apiData.WD.most_common.compass_point,
            averagePressure: apiData.PRE.av,
            weekdayName: moment(apiData.First_UTC).format('dddd').substring(0,3)
        }
        dayData.push(data)
        identity++;
    })
    return dayData;
}