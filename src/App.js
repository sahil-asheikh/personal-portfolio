import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './screens/Homepage';
import ProjectInfo from './screens/ProjectInfo';
import Work from './screens/Work';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/ProjectInfo/:projectIndex" element={<ProjectInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
