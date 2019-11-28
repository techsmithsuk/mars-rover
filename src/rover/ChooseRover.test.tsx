import React from 'react';
import renderer from 'react-test-renderer';
import { ChooseRover } from './chooseRover';

describe("ChooseRover Component", () => {
    it("Should render without errors", () => {
        const component = renderer.create(
            <ChooseRover/>
        );
        
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});