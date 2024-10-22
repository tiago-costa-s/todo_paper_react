import { CiSearch } from "react-icons/ci";
import Note from "../note/Note";
import { useEffect, useState } from "react";
import BoardController from "../bordController/BoardController";
import "./Board.css";

const Board = ({ createNote, noteList, onRemoveNote, colorNote, onAddColorNotes, colorText, onAddColorText, onFixedNote }) => {

  return (
    <div className='board'>
      <div className='board_nav'>
        <BoardController
          createNote={createNote}
          colorNote={colorNote}
          onAddColorNotes={onAddColorNotes}
          colorText={colorText}
          onAddColorText={onAddColorText}
        />
      </div>
      <div className='board_container'>
        <header className='board_header'>
          <h2 className='board_title'>Notes</h2>
          <div className='search_container'>
            <CiSearch className='search_icon' />
            <input className="search_note" type='text' placeholder='Buscar' />
          </div>
        </header>
        {
          noteList.length !== 0 ?
            <ul className='board_list'>
              {noteList.map((item) => (
                <li key={item.id}>
                  <Note
                    id={item.id}
                    text={item.text}
                    date={item.createDate}
                    colorNote={item.colorNote}
                    colorText={item.colorText}
                    onRemoveNote={onRemoveNote}
                    onFixedNote={onFixedNote}
                  />
                </li>
              ))}
            </ul>
            :
            <div className='board_text_alert'>
              <p className='text_alert'>Você não possui notas criadas</p>
            </div>
        }
      </div>
    </div>
  );
};

export default Board;