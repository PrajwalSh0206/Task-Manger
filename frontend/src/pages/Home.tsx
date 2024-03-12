import AddButton from '../components/Button/AddButton'
import Card from '../components/Cards/Card'
import './Home.scss'

const Home = () => {
    return (

        <div id="home">

            <p>
                All Tasks
            </p>

            <div className='cardlist'>
                <Card date={"13/10/2023"} title={"update password"} description={"review online accounts and update passwords for better security. Use a password manager to keep track."} completedTag={true}></Card>
                <AddButton></AddButton>
            </div>
        </div>
    )
}

export default Home
