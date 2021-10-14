
import './App.css';
import { JournalVIew } from './components/journal/JournalVIew';
import { NothingSelected } from './components/journal/NothingSelected';
import { SideBar } from './components/shared/SideBar';
import { AppRouter } from './routers/AppRouter';

function App() {
  return (
    <>
      {/* <SideBar/> */}
      {/* <NothingSelected/> */}
      {/* <JournalVIew/> */}
      <AppRouter/>
    </>
  );
}

export default App;
