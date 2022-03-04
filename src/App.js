import { useEffect, useState } from "react";
import AddTicket from "./components/AddTicket";
import Button from "./components/Button";
import Header from "./components/Header";
import Tickets from "./components/Tickets";
import { ticketsData } from "./mock/data";

function App() {
	const [edge, setEdge] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [tickets, setTickets] = useState([]);
	const [showAddTicket, setShowAddTicket] = useState(false);

	useEffect(() => {
		// As if data from a server
		setIsLoading(true);
		setTimeout(() => {
			setTickets(ticketsData.slice(0, 3));
			setEdge(edge + 3);
			setIsLoading(false);
		}, 2000);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const deleteTicket = (id) => {
		setTickets((prevTickets) => {
			return prevTickets.filter((ticket) => ticket.id !== id);
		});
	};

	const addTicket = (ticket) => {
		setTickets((prevTickets) => {
			return [ticket, ...prevTickets];
		});
	};

	const addBtnClickHandler = () => {
		setShowAddTicket(!showAddTicket);
	};

	const showMoreClickHandler = () => {
		setIsLoading(true);
		setTimeout(() => {
			setTickets((oldTickets) => [
				...oldTickets,
				...ticketsData.slice(edge, edge + 3)
			]);
			setEdge(edge + 3);
			setIsLoading(false);
		}, 2000);
	};

	return (
		<div className="container">
			<Header
				title="Ticket Tracker"
				showAddTicket={showAddTicket}
				addBtnClickHandler={addBtnClickHandler}
			/>
			{showAddTicket && <AddTicket addTask={addTicket} len={tickets.length} />}
			{isLoading && tickets.length === 0 ? (
				"Loading..."
			) : (
				<Tickets tickets={tickets} deleteTicket={deleteTicket} />
			)}
			{tickets.length !== 0 && tickets.length < ticketsData.length ? (
				<Button
					isDisabled={isLoading}
					isLoading={isLoading}
					color="gray"
					text="Show more"
					btnClickHandler={showMoreClickHandler}
				/>
			) : (
				""
			)}
		</div>
	);
}

export default App;
