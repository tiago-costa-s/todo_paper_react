import { useEffect, useState } from 'react';
import Board from './components/board/Board';
import './App.css';

function App() {
  const [noteList, setNoteList] = useState([]);
  const [colorNote, setColorNote] = useState('peach');
  const [colorText, setColorText] = useState('black_pencil');
  const [fixedNote, setFixedNote] = useState(false);

  // carrega a lista do localStorage quando o componente for montado
  useEffect(() => {
    const getListLocalStorage = JSON.parse(localStorage.getItem('noteList'));
    // verifique se a lista armazenada existe antes de definir o estado
    if (getListLocalStorage) {
      setNoteList(getListLocalStorage);
    }
  }, []);

  // define a cor da nota
  const onAddColorNotes = (color) => {
    setColorNote(color);
  };

  // define a cor do texto
  const onAddColorText = (color) => {
    setColorText(color);
  };

  // cria uma nota
  const onCreateNotes = () => {
    const newNote = {
      id: onGenerateId(),
      text: '',
      createDate: onGeneratedCreationDate(),
      colorNote: colorNote,
      colorText: colorText,
      fixedNote: fixedNote
    };

    const updatedNotes = [...noteList, newNote];

    setNoteList(updatedNotes);
    localStorage.setItem('noteList', JSON.stringify(updatedNotes));

    console.log(newNote);
    console.log(noteList.length);
  };

  // gera id da nota
  const onGenerateId = () => {
    return Math.floor(Math.random() * 1000);
  };

  // gera data de criação
  const onGeneratedCreationDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  };
  // console.log(generatedCreationDate());

  // remover nota
  const onRemoveNote = (id) => {
    const updatedNotes = noteList.filter((item) => item.id !== id);
    setNoteList(updatedNotes);
    localStorage.setItem('noteList', JSON.stringify(updatedNotes));
    console.log('Remove Item')
  };

  // fixa nota no board
  const onFixedNote = (id) => {
    noteList.map((item) => {
      if (item.id == id) {
        console.log('Fixar Nota' + item.id);
        setFixedNote(true)
        console.log(item.fixedNote)
      }
    })
  };

  return (
    <div className='app'>
      <Board
        createNote={onCreateNotes}
        noteList={noteList}
        onRemoveNote={onRemoveNote}
        colorNote={colorNote}
        onAddColorNotes={onAddColorNotes}
        colorText={colorText}
        onAddColorText={onAddColorText}
        onFixedNote={onFixedNote}
      />
    </div>
  );
}
export default App;