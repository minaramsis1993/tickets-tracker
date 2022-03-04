import React, { useState } from "react";
import { statuses } from "../constants";

const AddTicket = ({ addTask, len }) => {
	const [subject, setSubject] = useState("");
	const [description, setDescription] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		if (!subject.length || !description.length) {
			alert("Please add subject & description");
			return;
		}

		addTask({
			id: len,
			subject,
			description,
			priority: 1,
			status: statuses.NOT_STARTED
		});

		// Resetting state
		setSubject("");
		setDescription("");
	};

	return (
		<form className="add-form" onSubmit={submitHandler}>
			<div className="form-control">
				<label htmlFor="subject">Ticket</label>
				<input
					type="text"
					placeholder="Add subject"
					id="subject"
					value={subject}
					onChange={(e) => setSubject(e.target.value)}
				/>
			</div>
			<div className="form-control">
				<label htmlFor="description">Description</label>
				<textarea
					placeholder="Add description"
					id="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>
			<input type="submit" value="Save Ticket" className="btn btn-block" />
		</form>
	);
};

export default AddTicket;
