import React from 'react';
import renderer from 'react-test-renderer';
import { SingleDayDetail, SingleDaySummary } from './SingleDay';
import { SingleDayData } from './SingleDayData';

describe("Single Day Summary Component", () => {
    it("Should render without errors", () => {
        const testData: SingleDayData = {  
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

        const component = renderer.create(
            <SingleDaySummary {...testData}/>
        );
        
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe("Single Day Detail Component", () => {
    it("Should render without errors", () => {
        const testData: SingleDayData = {  
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

        const component = renderer.create(
            <SingleDayDetail {...testData}/>
        );
        
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});