import React from "react";
import { FaTimes } from "react-icons/fa";

const Ticket = ({ ticket, deleteTicket }) => {
	return (
		<div className="ticket">
			<h3>
				{ticket.text}
				<FaTimes
					style={{ color: "red", cursor: "pointer" }}
					onClick={() => deleteTicket(ticket.id)}
				/>
			</h3>
			<p>{ticket.day}</p>
		</div>
	);
};

export default Ticket;
