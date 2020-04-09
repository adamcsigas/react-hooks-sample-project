import React, { useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([ //songs - the data itself, setSongs - a function that changes the data
    { title: 'memories bring back memories', id: 1 },
    { title: 'Code the way you are', id: 2 },
    { title: 'Highway to legacy', id: 3 },
  ]); //this whole const is the state in this component

  const addSong = (title) => {
    setSongs([...songs, { title: title, id: uuidv1() }])
  }

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return (
            <li key={song.id}>{song.title}</li>
          )
        })}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
}

export default SongList;