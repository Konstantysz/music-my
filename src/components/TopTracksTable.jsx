import React, { Component } from 'react'
import { TopTrack } from './TopTrack'
import { Container, Row, Col, Table, Card } from 'react-bootstrap'

import logo from '../img/lastfmlogo.png'

export default class TopTrackTable extends Component {

    constructor(props) {
        super(props)
        this.state = {data: this.props.weeklytrackchart}
        console.log(this.state.data)
    }

    trackToTrackTable = track => {
        const track_name = track.name;
        const rank = track['@attr'].rank;
        const album_cover = track.image[0]['#text'];
        const artist = track.artist['#text'];
        const playcount = track.playcount;
        const key = track.mbid;
        return <TopTrack key={key} rank={rank} playcount={playcount} artist={artist} album_cover={album_cover} track_name={track_name} />;
    };

    render() {
        if (typeof this.state.data!="undefined") {
            return (
                <div>
                    <br /><br />
                    <Container fluid={false}>
                        <Col lg={16}>
                            {(typeof this.state.data !='undefined') ? (
                                <Row className="justify-content-md-center">
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Track</th>
                                                <th>Artist</th>
                                                <th>Played</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.data.weeklytrackchart.track.map(this.trackToTrackTable)}
                                        </tbody>
                                    </Table>
                                </Row>
                            ) : ('')}
                        </Col>
                    </Container>
                </div>
            )
        } else {
            return (
                <Container>
                    <Row>
                        <Col>
                            <Card className="mx-auto my-5 text-center py-5">
                                <Card.Img src={logo} className="w-50 rounded mx-auto d-block"/>
                                <Card.Body>
                                    Loading...
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            )
        }
    }
}





