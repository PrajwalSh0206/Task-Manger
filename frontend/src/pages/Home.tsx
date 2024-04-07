import React, { useEffect, useState } from 'react';
import AddButton from '../components/Button/AddButton';
import Card from '../components/Cards/Card';
import './Home.scss';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import { taskDto } from '../../dto/task.dto';

const Home: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.task.all);
  const [size, setSize] = useState<Array<number>>([]);
  let [cards, setCards] = useState<Array<Array<taskDto>>>([]);

  function splitArrayIntoPartitions(arr: Array<any>, partitions: number) {
    const result: Array<Array<any>> = [];
    const len = arr.length;
    for (let i = 0; i < len; i += partitions) {
      result.push(arr.slice(i, i + partitions));
    }
    return result;
  }

  useEffect(() => {
    const partition = Math.ceil(tasks.length / 4);
    let array = new Array(partition).fill(0);
    setSize(array);
    let splitArray = splitArrayIntoPartitions(tasks, 4);
    setCards(splitArray);
  }, [tasks]);

  return (
    <div id="home">
      <p>All Tasks</p>

      <div className="cardlist">
        {size.map((value, index) => {
          return (
            <div className="row" key={value}>
              {cards[index].map((value) => (
                <Card
                  key={value.id}
                  date={value.date}
                  title={value.title}
                  description={value.description}
                  completedTag={value.completed}
                ></Card>
              ))}
              {cards[index].length != 4 && <AddButton></AddButton>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
