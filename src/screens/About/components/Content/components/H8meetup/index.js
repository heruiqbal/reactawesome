import React, { Component } from 'react';
import Styled from 'styled-components';
import './styles.css';

const MeetupRow = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 300px;
`

const styles = {
    h4Text: {
        marginTop: '10px',
        marginBottom: '10px'
    },
    fontCustom: {
        fontSize: '14px'
    }
}

class H8Meetup extends Component {

    render() {
        return (
            <div className='h8meetup'>
                <div className='h8meetup_image'>
                    <img src='https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/1879/s300/hactiv8-logo.jpg' alt='h8meetup-gambar' className='hacktiv-image' />
                </div>
                <div>
                    <h1>Hacktiv8 Meetup</h1>
                    <MeetupRow>
                        <h4 style={styles.h4Text}>Location</h4>
                        <h4 style={styles.h4Text}>Jakarta, Indonesia</h4>
                    </MeetupRow>
                    <MeetupRow>
                        <h4 style={styles.h4Text}>Members</h4>
                        <h4 style={styles.h4Text}>1,078</h4>
                    </MeetupRow>
                    <MeetupRow>
                        <h4 style={styles.h4Text}>Organizers</h4>
                        <h4 style={styles.h4Text}>Fadli Al Baihaqi</h4>
                    </MeetupRow>
                    <div className='button-joinus' onClick={() => alert('join yuks')}>
                        <h3>Join Us</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default H8Meetup;