import React from "react";
import { FaTimes } from "react-icons/fa";
import { statuses } from "../constants";

const Ticket = ({ ticket, deleteTicket }) => {
	let statusColor;

	if (ticket.status === statuses.COMPLETE) {
		statusColor = "green";
	} else if (ticket.status === statuses.IN_PROGRESS) {
		statusColor = "orange";
	} else if (ticket.status === statuses.NOT_STARTED) {
		statusColor = "red";
	}

	return (
		<div className="ticket">
			<h3>
				{ticket.subject}
				<FaTimes
					style={{ color: "red", cursor: "pointer" }}
					onClick={() => deleteTicket(ticket.id)}
				/>
			</h3>
			<span className="status">
				Status: <span style={{ color: statusColor }}>{ticket.status}</span>
			</span>
			<span className="priority">Priority: {ticket.priority}</span>
			<p className="description">Description: {ticket.description}</p>
		</div>
	);
};

export default Ticket;
