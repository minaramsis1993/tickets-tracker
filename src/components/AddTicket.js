import React, { useState } from "react";
import { statuses } from "../constants";

const AddTicket = ({ addTask, len }) => {
	const { NOT_STARTED, IN_PROGRESS, COMPLETE } = statuses;
	const [subject, setSubject] = useState("");
	const [description, setDescription] = useState("");
	const [status, setStatus] = useState(NOT_STARTED);

	const submitHandler = (e) => {
		e.preventDefault();
		if (!subject.length || !description.length) {
			alert("Please add subject & description");
			return;
		}

		addTask({
			id: len + 10000,
			subject,
			description,
			priority: 1,
			status
		});

		// Resetting state
		setSubject("");
		setDescription("");
		setStatus(NOT_STARTED);
	};

	return (
		<form className="add-form" onSubmit={submitHandler}>
			<div className="form-control">
				<select value={status} onChange={(e) => setStatus(e.target.value)}>
					<option value={NOT_STARTED}>{NOT_STARTED}</option>
					<option value={IN_PROGRESS}>{IN_PROGRESS}</option>
					<option value={COMPLETE}>{COMPLETE}</option>
				</select>
			</div>
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
					rows="4"
				/>
			</div>
			<input type="submit" value="Save Ticket" className="btn btn-block" />
		</form>
	);
};

export default AddTicket;
