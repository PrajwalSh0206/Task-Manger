import React from "react"
import CardList from "../components/CardList/CardList"
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Important:React.FC = () => {

    const tasks = useSelector((state: RootState) => state.task.important);

    return (
        <div id="home">
        <p>Important</p>
        <CardList displayButton={false} tasks={tasks}></CardList>
      </div>
    )
}

export default Important
