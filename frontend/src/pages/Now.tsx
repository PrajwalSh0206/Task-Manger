import React from "react"
import CardList from "../components/CardList/CardList"
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Now: React.FC = () => {
    const tasks = useSelector((state: RootState) => state.task.pending);

    return (
        <div id="home">
        <p>Now</p>
        <CardList displayButton={false} tasks={tasks}></CardList>
      </div>
    )
}

export default Now
