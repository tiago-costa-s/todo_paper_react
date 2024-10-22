import { IoIosCloseCircle } from "react-icons/io";
import { BsFillPinAngleFill } from "react-icons/bs";

import "./Note.css";

const Note = ({ id, text, date, colorNote, colorText, onRemoveNote, onFixedNote }) => {

  return (
    <div className={`note ${colorNote}`}>
      <div className="note_body">
        <IoIosCloseCircle
          className="icon_closed"
          onClick={() => onRemoveNote(id)}
        />
        <textarea
          className={`${colorText}`}
          maxLength={135}
          placeholder="Adicione um texto..."
        // value={text}
        ></textarea>
      </div>
      <div className="note_footer">
        <p className="note_date">
          <span>{date}</span>
        </p>
        <BsFillPinAngleFill
          className="icon_pin"
          onClick={() => onFixedNote(id)}
        />
      </div>
    </div>
  );
};

export default Note;
