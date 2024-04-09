import React, { useEffect, useState } from 'react'
import './CardList.scss'
import { getTaskDto } from '../../../dto/task.dto';
import Card from '../Cards/Card';
import AddButton from '../Button/AddButton';


interface CardDetailsDto {
    tasks:Array<getTaskDto>,
    displayButton:boolean
}

const CardList:React.FC<CardDetailsDto> = ({ tasks,displayButton }) => {

    const [size, setSize] = useState<Array<number>>([]);
    let [cards, setCards] = useState<Array<Array<getTaskDto>>>([]);

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
        <div className="cardlist scrollbar">
        {size.map((value, index) => {
          return (
            <div className="row" key={value}>
              {cards[index].map((value) => (
                <Card
                  key={value.id}
                  id={value.id}
                  date={value.date}
                  title={value.title}
                  description={value.description}
                  completedTag={value.completed}
                ></Card>
              ))}
              {cards[index].length != 4 && displayButton && <AddButton></AddButton>}
            </div>
          );
        })}
        {((cards[size.length - 1]?.length == 4 || cards.length == 0)&&displayButton) && (
          <div className="row">
            <AddButton></AddButton>
          </div>
        )}
      </div>
    )
}

export default CardList
