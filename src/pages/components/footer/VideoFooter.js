import React from "react";
import "./VideoFooter.css";
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@Paulo Ebac</h3>
        <p>Descrição do Video</p>
        <div className="videoFooter_music">
        < MusicNoteOutlinedIcon className="videoFooter_icon"/>
        <div className="videocFooterMusic_text">
        <p>Titulo da música</p>
        </div>
        </div>
        
      </div>
      <img 
      className="videoFooter_record"
      alt="imagem de um vinil girando"
      src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"

      />
    </div>
  );
}

export default VideoFooter;
