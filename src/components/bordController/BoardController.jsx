import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import LogoPaperNote from "../logopapernote/LogoPaperNote";
import { useState } from "react";
import "./BoardController.css";

const BoardController = ({ createNote, colorNote, onAddColorNotes, colorText, onAddColorText }) => {

  const handleClick = () => {
    createNote();
  };

  return (
    <div className='board_controller'>
      <LogoPaperNote />

      <button
        className='btn_create_note'
        onClick={() => {
          handleClick();
        }}
      >
        <AiFillPlusCircle id='icon_create_note' />
      </button>

      <div className='colors_container'>
        <div
          className={`circle peach ${colorNote === 'peach' ? 'selected' : ''}`}
          onClick={() => onAddColorNotes('peach')}>
        </div>
        <div
          className={`circle mint_green ${colorNote === 'mint_green' ? 'selected' : ''}`}
          onClick={() => onAddColorNotes('mint_green')}>
        </div>
        <div
          className={`circle pale_yellow ${colorNote === 'pale_yellow' ? 'selected' : ''}`}
          onClick={() => onAddColorNotes('pale_yellow')}>
        </div>
        <div
          className={`circle light_sky_blue ${colorNote === 'light_sky_blue' ? 'selected' : ''}`}
          onClick={() => onAddColorNotes('light_sky_blue')}>
        </div>
        <div
          className={`circle light_coral ${colorNote === 'light_coral' ? 'selected' : ''}`}
          onClick={() => onAddColorNotes('light_coral')}>
        </div>
        <div
          className={`circle lavender_pink ${colorNote === 'lavender_pink' ? 'selected' : ''}`}
          onClick={() => onAddColorNotes('lavender_pink')}>
        </div>
      </div>
      <div className="pencil_container">
        <BsFillPencilFill className={`pincel black_pencil ${colorText === 'black_pencil' ? 'selected_shadow' : ''} `}
          onClick={() => onAddColorText('black_pencil')}
        />
        <BsFillPencilFill className={`pincel light_blue_pencil ${colorText === 'pincel light_blue_pencil' ? 'selected_shadow' : ''} `}
          onClick={() => onAddColorText('pincel light_blue_pencil')}
        />
        <BsFillPencilFill className={`pincel red_pencil ${colorText === 'red_pencil' ? 'selected_shadow' : ''} `}
          onClick={() => onAddColorText('red_pencil')}
        />
      </div>
    </div >
  );
};

export default BoardController;