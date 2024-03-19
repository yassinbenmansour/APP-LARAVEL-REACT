import './App.css';
import { RouterProvider } from 'react-router-dom';
import Router from './Routes/Route';
function App() {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
