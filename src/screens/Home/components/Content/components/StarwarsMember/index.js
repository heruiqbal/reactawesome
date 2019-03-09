import React, { Component } from 'react'

class StarwarsMember extends Component {

    render() {
        return (
            <div>
                <div className='flex-row'>
                    <h1>Starwars Member</h1>
                    <h3>See all</h3>
                </div>
                <div className='place-viewEvent'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <td>Nomor</td>
                                <td>Nama</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.starwars.length ? this.props.starwars.map((data, nomor) => {
                                return (
                                    <tr key={nomor}>
                                        <td>{nomor + 1}</td>
                                        <td>{data}</td>
                                    </tr>)
                            }) : (
                            <tr>
                                <td></td>
                                <td>'No Data'</td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default StarwarsMember;