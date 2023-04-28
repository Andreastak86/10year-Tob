import React, { useEffect, useState } from "react";

const Countdown = () => {
    const eventDate = new Date("2023-05-12T17:00:00Z"); // set the event date
    const [countdownDate, setCountdownDate] = useState(eventDate.getTime()); // calculate the countdown initially

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime(); // get the current time
            const distance = eventDate.getTime() - now; // calculate the distance between event date and current date
            setCountdownDate(distance); // update the countdown
        }, 1000);

        return () => clearInterval(interval); // clear the interval when the countdown is done
    }, [eventDate]);

    // calculate the remaining time in days, hours, minutes, and seconds
    const days = Math.floor(countdownDate / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (countdownDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (countdownDate % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((countdownDate % (1000 * 60)) / 1000);

    return (
        <div>
            <p>
                {days} dager, {hours} timer, {minutes} minutter, {seconds}{" "}
                sekunder
            </p>
        </div>
    );
};

export default Countdown;
