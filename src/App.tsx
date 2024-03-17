import React from 'react';
import './App.scss';
import PopupCard from './components/PopupCard/PopupCard';
import Sidebar from './components/Sidebars/Sidebars';
import Completed from './pages/Completed';
import Home from './pages/Home';
import Important from './pages/Important';
import Now from './pages/Now';
import './scss/common.scss';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/store';

const App: React.FC = () => {
  const popupState = useSelector((state: RootState) => state.popup.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      {popupState && <PopupCard></PopupCard>}
      <div className="container">
        <Sidebar></Sidebar>

        <main className="w-10/12">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/important" component={Important} />
            <Route path="/completed" component={Completed} />
            <Route path="/now" component={Now} />
          </Switch>
        </main>
      </div>
    </>
  );
};

export default App;
