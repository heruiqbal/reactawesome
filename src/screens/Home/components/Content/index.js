import React, { Component } from 'react';
import H8Meetup from './components/H8meetup';
import PastMeetUp from './components/PastMeetup';
import moment from 'moment';
import './styles.css';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pastMeetups: [{
                date: moment().format('lll'),
                hashtag: '#39 Jakarta April Meetup with kumparan',
                participant: 139,
                link: 'https://www.google.com'
            },
            {
                date: moment().format('lll'),
                hashtag: '#38 JakartaJS Maret Meetup with blibli',
                participant: 113,
                link: 'https://www.facebook.com'
            },
            {
                date: moment().format('lll'),
                hashtag: '#37 Jakarta February Meetup with tokped',
                participant: 139,
                link: 'https://www.detik.com'
            },
            {
                date: moment().format('lll'),
                hashtag: '#38 JakartaJS Maret Meetup with blibli',
                participant: 113,
                link: 'https://www.facebook.com'
            },
            {
                date: moment().format('lll'),
                hashtag: '#37 Jakarta February Meetup with tokped',
                participant: 139,
                link: 'https://www.detik.com'
            }
        ],
        };
    }
    render() {
        return (
            <div className='container-content'>
                <H8Meetup />
                <div>
                    <h1>Next Meetup</h1>
                    <div className='width-inherit'>
                        <div className='nm-content'>
                            <h3>Awesome meetup and events</h3>
                            <h3 className='gray-text'>25 January 2019</h3>
                            <h3>Hello, Javascript and NodeJS Ninjas! <br/>
                            Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018! <br/>
                            The meetup format will have contain short stories and technical talks <br/>
                            If you have a short announcement you'd like to share with the audience, you may do so during open mic announcement.</h3>
                            <h3>Remember to bring a photo ID to get through building security</h3>
                            <h3>-----</h3>
                            <h3>See you there!</h3>
                            <h3>Best Hengky, Giovanni Sofian, Riza, Agung The JakartaJS Organizers</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>About Meetup</h1>
                    <div className='width-inherit'>
                        <div className='a-meetup'>
                            <h3>Come and meet other developers in the JavaScript and it's library in the Greater Jakarta area.</h3>
                            <h3>Twitter: @JakartaJS and we use hashtag #jakartajs</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex-row'>
                        <h1>Members</h1>
                        <h3>See all</h3>
                    </div>
                    <div className='width-inherit'>
                        <div className='nm-content '>
                            <h3>Come and meet other developers in the JavaScript and it's library in the Greater Jakarta area.</h3>
                            <h3>Twitter: @JakartaJS and we use hashtag #jakartajs</h3>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex-row'>
                        <h1>Past Meetups</h1>
                        <h3>See all</h3>
                    </div>
                    <div className='place-viewEvent'>
                        { this.state.pastMeetups.map((meetup,index) => {
                                return (
                                    <PastMeetUp key={index} meetup={meetup}/>
                                )
                        }) }
                    </div>
                </div>


            </div>
        );
    }
}

export default Content;