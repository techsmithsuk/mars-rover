import React from 'react';
import renderer from 'react-test-renderer';
import { HomePage } from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

describe("Home Component", () => {
    it("Should render without errors", () => {
        const component = renderer.create(

            <Router>  
                <HomePage/>
            </Router>
        );
        
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});