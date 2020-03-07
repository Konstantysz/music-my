import React from 'react'
import { Card } from 'react-bootstrap'

export const AlbumCard = ({ rank, artist, album_name, cover, playcount }) => {
    return (
        <Card style={{ width: '18rem' }} body={true} bg={'dark'} text={'light'} border={'light'} >
            <Card.Img variant="top" src={cover} />
            <Card.Body>
                <Card.Title>#{rank} {album_name}</Card.Title>
                <Card.Subtitle>{artist}</Card.Subtitle>
                <Card.Text>Played: {playcount}</Card.Text>
            </Card.Body>
        </Card>
    );
}