import "./App.css";
import Video from "./pages/Video"
function App() {
  return (
    <div className="App">
      <div className="app_videos">
      <Video
       likes={111}
       messages={222}
       shares={333}
       name="Paulo"
       descripition="Brecker o goleiro"
       music="musica épica"
       url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
      />
       <Video
       likes={444}
       messages={555}
       shares={666}
       name="Pedro"
       descripition="Bird olhando para a camera"
       music="musica qualquer"
       url="https://firebasestorage.googleapis.com/v0/b/jornada2-eb156.appspot.com/o/ZqU6oFX6.mp4.mp4?alt=media&token=9839e872-2d5e-4da3-9299-17eb2949831d"
       />

      
      </div>
    </div>
  );
}

export default App;
