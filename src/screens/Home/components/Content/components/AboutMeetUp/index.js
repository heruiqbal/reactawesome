import React, { Component } from 'react'

class AboutMeetUp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <h1>About Meetup</h1>
                <div className='width-inherit'>
                    <div className='a-meetup'>
                        <h3>Come and meet other developers in the JavaScript and it's library in the Greater Jakarta area.</h3>
                        <h3>Twitter: @JakartaJS and we use hashtag #jakartajs</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMeetUp;