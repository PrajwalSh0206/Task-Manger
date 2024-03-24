import React, { useEffect, useState } from 'react';
import AddButton from '../components/Button/AddButton';
import Card from '../components/Cards/Card';
import './Home.scss';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';

const Home: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.task.all);
  const [size, setSize] = useState(0);
  useEffect(() => {
    setSize(tasks.length / 4);
  }, [tasks]);

  return (
    <div id="home">
      <p>All Tasks</p>

      <div className="cardlist">
        {tasks.map((value, index) => {
          return (
            <Card
              key={index}
              date={value.date}
              title={value.title}
              description={value.description}
              completedTag={value.completed}
            ></Card>
          );
        })}

        <AddButton></AddButton>
      </div>
    </div>
  );
};

export default Home;
