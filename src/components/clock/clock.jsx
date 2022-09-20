import { useEffect, useState } from "react";

const Clock = () => {
    const [time, setTime] = useState({ date: '' });

    useEffect(() => {
        setInterval(() => {
            setTime(prev => ({
                ...prev,
                date: new Date().toLocaleTimeString()
            }));
        }, 1000);
    }, [time.date]);

    return (
        <div>
            Time: {' '}{time.date}
        </div>
    );
};

export default Clock;