import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import GovernmentWork from './components/GovernmentWork';
import ImportExport from './components/ImportExport';
import InternationalTrade from './components/InternationalTrade';
import BusinessConsultancy from './components/BusinessConsultancy';

function App() {
  return (
    <>
      <BrowserRouter>
          <div className="App">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/governmentWork" element={<GovernmentWork />} />
              <Route exact path="/importExport" element={<ImportExport />} />
              <Route exact path="/internationalTrade" element={<InternationalTrade />} />
              <Route exact path="/businessConsultancy" element={<BusinessConsultancy />} />
            </Routes>
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
