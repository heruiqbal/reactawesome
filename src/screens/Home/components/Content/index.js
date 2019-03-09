import React, { Component } from 'react';
import H8Meetup from './components/H8meetup';
import NextMeetUp from './components/NextMeetUp';
import AboutMeetUp from './components/AboutMeetUp';
import Member from './components/Member';
import StarwarsMember from './components/StarwarsMember';
import moment from 'moment';
import './styles.css';
import { connect } from 'react-redux';
import actions from '../../../../actions';


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
        };
        this.checkInterval = null;
        this.getDataFromSwapi = this.getDataFromSwapi.bind(this);
    }

    getDataFromSwapi() {
        this.props.fetchSwapiAPI(null,
            (res) => {
                console.log(res);
            },
            (err) => {
                console.log(err);
            }
        )
    }

    componentDidMount() {
        this.getDataFromSwapi();
        this.checkInterval = setInterval(() => {this.getDataFromSwapi()},10000);
    }

    componentWillUnmount() {
        clearInterval(this.checkInterval);
    }

    render() {
        return (
            <div className='container-content'>
                <H8Meetup />
                <NextMeetUp />
                <AboutMeetUp />
                <Member />
                <StarwarsMember starwars={this.props.starwars} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    starwars: state.swapi.starwars
});

const mapDispatchToProps = (dispatch) => ({
    fetchSwapiAPI: (req,res,err) => dispatch(actions.swapi.api.fetchSwapiAPI(req,res,err))
});

export default connect(mapStateToProps,mapDispatchToProps)(Konten);