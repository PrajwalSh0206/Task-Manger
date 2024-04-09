import React from 'react';
import './Home.scss';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import CardList from '../components/CardList/CardList';

const Home: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.task.all);

  return (
    <div id="home">
      <p>All Tasks</p>
      <CardList displayButton={true} tasks={tasks}></CardList>
    </div>
  );
};

export default Home;
