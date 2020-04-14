import React, { useState, useEffect } from 'react'; // it's like a life cycle event. when we use functional components we 
import { v1 as uuidv1 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([ //songs - the data itself, setSongs - a function that changes the data
    { title: 'memories bring back memories', id: 1 },
    { title: 'Code the way you are', id: 2 },
    { title: 'Highway to legacy', id: 3 },
  ]); //this whole const is the state in this component

  const [age, setAge] = useState(20); // for demonstration purposes only. useEffect will render everytime the component changes.

  const addSong = (title) => {
    setSongs([...songs, { title: title, id: uuidv1() }])
  }

  useEffect(() => {
    console.log('use effect ran', songs);
  }, [songs]) //second parameter gives info when to update

  useEffect(() => {
    console.log('use effect ran', age);
  }, [age]) //second parameter gives info when to update

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
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
}

export default SongList;