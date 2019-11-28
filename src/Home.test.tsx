import React from 'react';
import renderer from 'react-test-renderer';
import { HomePage } from './Home';

describe("Home Component", () => {
    it("Should render without errors", () => {
        const component = renderer.create(
            <HomePage/>
        );
        
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});