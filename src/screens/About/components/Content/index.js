import React, { Component } from 'react';
import H8Meetup from './components/H8meetup';
import moment from 'moment';
import './styles.css';
import axios from 'axios';

class Konten extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pastMeetups: [{
                date: moment().format('lll'),
                hashtag: '#39 Jakarta April Meetup with kumparan',
                participant: 139,
                link: 'https://www.google.com',
                button: 'Klik A'
            },
            {
                date: moment().format('lll'),
                hashtag: '#38 JakartaJS Maret Meetup with blibli',
                participant: 113,
                link: 'https://www.facebook.com',
                button: 'Klik B'
            },
            {
                date: moment().format('lll'),
                hashtag: '#37 Jakarta February Meetup with tokped',
                participant: 139,
                link: 'https://www.detik.com',
                button: 'Klik C'
            },
            {
                date: moment().format('lll'),
                hashtag: '#38 JakartaJS Maret Meetup with blibli',
                participant: 113,
                link: 'https://www.facebook.com',
                button: 'Klik D'
            },
            {
                date: moment().format('lll'),
                hashtag: '#37 Jakarta February Meetup with tokped',
                participant: 139,
                link: 'https://www.detik.com',
                button: 'Klik E'
            }
            ],
            starwars: []
        };
    }

    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://swapi.co/api/people`)
            .then(res => {
                this.setState({ starwars: res.data.results });
                console.log(res.data.results);
            })
            .catch(err => {
                console.log(err)
            });
    }

    render() {

        return (
            <div className='container-content'>
                <H8Meetup />
                <div>
                    <h1>{this.state.starwars !== null ? this.state.starwars.name : 'LUKE'}</h1>
                    <h1>About</h1>
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
                        <table className='table'>
                            <thead>
                                <tr>
                                    <td>Nomor</td>
                                    <td>Nama</td>
                                    <td>Massa</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.starwars.map((data, nomor) => {
                                    return (
                                        <tr key={nomor}>
                                            <td>{nomor + 1}</td>
                                            <td>{data.name}</td>
                                            <td>{data.mass}</td>
                                        </tr>)
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        );
    }
}

export default Konten;