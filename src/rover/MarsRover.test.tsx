import React from 'react';
import renderer from 'react-test-renderer';
import { MarsRover } from './marsRover';

describe("MarsRover Component", () => {
    it("Should render without errors", () => {
        const component = renderer.create(
            <MarsRover/>
        );
        
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});