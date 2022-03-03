import React from "react";
import Ticket from "./Ticket";

const Tickets = ({ tickets, deleteTicket }) => {
	return (
		<>
			{tickets.map((ticket) => (
				<Ticket key={ticket.id} ticket={ticket} deleteTicket={deleteTicket} />
			))}
		</>
	);
};

export default Tickets;
