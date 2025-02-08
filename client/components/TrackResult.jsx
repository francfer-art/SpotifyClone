import React from 'react'

export const TrackResult = ({track, chooseTrack}) => {

  const handleClick = () => {
    chooseTrack(track);
  }
  
  return (
    <div className='d-flex m-2 align-items-center track' onClick={handleClick}>
      <img src={track.albumUrl} style={{height: '64px', width: '64px'}} alt="Song image" />
      <div className='d-flex flex-column p-3'>
        <span className='fw-bold'>{track.title}</span>
        <span>{track.artist}</span>
      </div>
    </div>
  )
}
