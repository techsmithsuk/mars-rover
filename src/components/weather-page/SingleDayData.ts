export type SingleDayData = {
    marsSolDate?: string; // Whole array name
    earthSolDate?: string; // First_UTC
    averageTemp?: number; // AT: av: 
    minTemp?: number; // AT: mn:
    maxTemp?: number; // AT: mx: 
    averageWindSpeed?: number; // HWS: av:
    windDirection?: string; // most_common: compass_point:
    averagePressure?: number; // PRE: av: 
    weekdayName: string; // Calculated via function 
}