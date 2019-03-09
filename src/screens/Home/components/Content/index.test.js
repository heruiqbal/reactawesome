import React from 'react';
import ReactDOM from 'react-dom';
import H8Meetup from './components/H8meetup';
import NextMeetUp from './components/NextMeetUp';
import AboutMeetUp from './components/AboutMeetUp';
import Member from './components/Member';
import StarwarsMember from './components/StarwarsMember';

describe('it will render components without crashing', () => {
    it('renders H8Meetup without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<H8Meetup />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders NextMeetUp without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NextMeetUp />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders AboutMeetUp without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AboutMeetUp />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders Member without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Member />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders StarwarsMember without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<StarwarsMember starwars={[]} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

describe('renders the items in a list', () => {

    it('renders StarwarsMember items when item is empty', () => {
        const container = document.createElement('div')
        ReactDOM.render(<StarwarsMember starwars={[]} />, container);
        expect(container.textContent).toMatch('No Data');
    });

    it('should be error, StarwarsMember doesn\'t props starwars data', () => {
        const container = document.createElement('div');
        try {
            ReactDOM.render(<StarwarsMember  />, container);
        } catch(e) {
            expect(e.message).toMatch('Cannot read property \'length\' of undefined');
        }
    });

    it('renders StarwarsMember items in a list', () => {
        const container = document.createElement('div')
        ReactDOM.render(<StarwarsMember starwars={['Luke', 'Han']} />, container)
        expect(container.textContent).toMatch('Luke');
        expect(container.textContent).toMatch('Han');
    })
})
