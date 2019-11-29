import React from 'react';
import Renderer from 'react-test-renderer/shallow';
import SingleDayDetail from './SingleDayDetail';
import SingleDaySummary from './SingleDaySummary';
import { SingleDayData } from '../../helpers/ApiDataCall';

describe("Single Day Summary Component", () => {
    it("Should render without errors", () => {
        const testData: SingleDayData = {  
            id:1,
            marsSolDate: '344',
            earthSolDate: '14th',
            averageTemp: -67.108,
            minTemp: -99.926,
            maxTemp: -23.287,
            averageWindSpeed: 5.3,
            windDirection: 'SSE',
            averagePressure: 681.448,
            weekdayName: 'Monday' // TODO calc via function
        }

        const renderer = new Renderer();
        const component = renderer.render(
            <SingleDaySummary data = {testData}/>
        );
        
        expect(component).toMatchSnapshot();
    });
});

describe("Single Day Detail Component", () => {
    it("Should render without errors", () => {
        const testData: SingleDayData = {  
            id:1,
            marsSolDate: '344',
            earthSolDate: '14th',
            averageTemp: -67.108,
            minTemp: -99.926,
            maxTemp: -23.287,
            averageWindSpeed: 5.3,
            windDirection: 'SSE',
            averagePressure: 681.448,
            weekdayName: 'Monday' // TODO calc via function
        }

        const renderer = new Renderer();
        const component = renderer.render(
            <SingleDayDetail data = {testData}/>
        );
        
        expect(component).toMatchSnapshot();
    });
});