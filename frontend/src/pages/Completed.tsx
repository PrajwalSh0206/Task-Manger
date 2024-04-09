import React from "react"
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import CardList from "../components/CardList/CardList";

const Completed:React.FC = () => {
    const tasks = useSelector((state: RootState) => state.task.completed);

    return (
        <div id="home">
        <p>Completed</p>
        <CardList displayButton={false} tasks={tasks}></CardList>
      </div>
    )
}

export default Completed
