import React, { useState } from "react";

const AddTicket = ({ addTask, len }) => {
	const [text, setText] = useState("");
	const [dayTime, setDayTime] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		if (!text.length || !dayTime.length) {
			alert("Please add text & dayTime");
			return;
		}

		addTask({
			id: len,
			text,
			day: dayTime
		});

		// Resetting state
		setText("");
		setDayTime("");
	};

	return (
		<form className="add-form" onSubmit={submitHandler}>
			<div className="form-control">
				<label htmlFor="ticket">Ticket</label>
				<input
					type="text"
					placeholder="Add ticket"
					id="ticket"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
			</div>
			<div className="form-control">
				<label htmlFor="day-time">Day & Time</label>
				<input
					type="text"
					placeholder="Add Day & Time"
					id="day-time"
					value={dayTime}
					onChange={(e) => setDayTime(e.target.value)}
				/>
			</div>
			<input type="submit" value="Save Task" className="btn btn-block" />
		</form>
	);
};

export default AddTicket;
