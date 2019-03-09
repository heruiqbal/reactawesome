import React, { Component } from 'react'

class Member extends Component {
    
    render() {
        return (
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
        );
    }
}

export default Member;