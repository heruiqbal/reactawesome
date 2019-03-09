import React, { Component } from 'react'

class NextMeetUp extends Component {
    
    render() {
        return (
            <div>
                <h1>Next Meetup</h1>
                <div className='width-inherit'>
                    <div className='nm-content'>
                        <h3>Awesome meetup and events</h3>
                        <h3 className='gray-text'>25 January 2019</h3>
                        <h3>Hello, Javascript and NodeJS Ninjas! <br />
                            Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018! <br />
                            The meetup format will have contain short stories and technical talks <br />
                            If you have a short announcement you'd like to share with the audience, you may do so during open mic announcement.</h3>
                        <h3>Remember to bring a photo ID to get through building security</h3>
                        <h3>-----</h3>
                        <h3>See you there!</h3>
                        <h3>Best Hengky, Giovanni Sofian, Riza, Agung The JakartaJS Organizers</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default NextMeetUp;