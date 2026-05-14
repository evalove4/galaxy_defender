/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import Layout from './components/Layout';
import Home from './views/Home';
import Ranks from './views/Ranks';
import Armory from './views/Armory';
import Game from './views/Game';

export default function App() {
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/ranks" element={<Ranks />} />
            <Route path="/armory" element={<Armory />} />
            <Route path="/game" element={<Game />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </GameProvider>
  );
}

