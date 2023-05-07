import AddButton from '../../components/AddButton';
import SideBar from '../../containers/SideBar';
import ToDoList from '../../containers/ToDoList';

const Home = () => (
	<>
		<SideBar />
		<ToDoList />
		<AddButton />
	</>
);

export default Home;
