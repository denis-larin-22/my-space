'use client'
import React, { useState, useEffect } from 'react';

type ButtonState = 'Start' | 'Pause';
type TimerType = 'Work' | 'Break' | 'Big break';

export default function PomodoroTimer() {
    const [processButton, setProcessButton] = useState<ButtonState>('Start');
    const [timeLeft, setTimeLeft] = useState<number>(25 * 60); // 0.05 hours in seconds (25 minutes)
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [timerType, setTimerType] = useState<TimerType>('Break');
    const [cycleCount, setCycleCount] = useState<number>(0);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (isRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0 && timerType === 'Work') {
            playTransitionSound();
            if (cycleCount % 4 === 3) {
                setTimerType('Big break');
                setTimeLeft(30 * 60); // seconds (30 minutes) for a big break
            } else {
                setTimerType('Break');
                setTimeLeft(5 * 60); // seconds (5 minutes) for a regular break
            }
            setCycleCount((prevCount) => prevCount + 1);
        } else if (timeLeft === 0 && (timerType === 'Break' || timerType === 'Big break')) {
            playTransitionSound();
            setTimerType('Work');
            setTimeLeft(25 * 60); // seconds (25 minutes) for a work session
        }
        return () => clearInterval(timer);
    }, [isRunning, timeLeft, timerType, cycleCount]);

    const toggleTimer = () => {
        setTimerType('Work');
        setIsRunning((prevIsRunning) => !prevIsRunning);
        setProcessButton((prevButton) => (prevButton === 'Start' ? 'Pause' : 'Start'));
    };

    const resetTimer = () => {
        setTimeLeft(25 * 60); // seconds (25 minutes) for initial timer
        setIsRunning(false);
        setProcessButton('Start');
        setTimerType('Break');
        setCycleCount(0);
    };

    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60).toString().padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    const playTransitionSound = () => {
        const audio = new Audio('/assets/audio/ring.mp3');
        audio.play();
    };

    return (
        <section className={`w-full h-full ${timerType === 'Work' ? 'bg-transparent text-t-dark-text' : 'bg-t-purple/60 text-white'} border-2 border-t-purple rounded-3xl duration-150`}>
            <h2 className="p-5 w-80 text-2xl text-white text-center bg-t-purple rounded-tl-2xl rounded-br-2xl">POMODORO</h2>
            <div className="w-full h-3/4 flex flex-col items-center justify-center gap-6">
                <p className="text-5xl">{timerType}</p>
                <div className="text-9xl">{formatTime(timeLeft)}</div>
                <div className="flex gap-6 text-white">
                    <button
                        className="px-4 py-2 text-lg bg-t-purple rounded-xl active:scale-95 duration-150"
                        onClick={toggleTimer}
                    >
                        {processButton}
                    </button>
                    <button className="px-4 py-2 text-lg bg-t-purple/50 border-2 border-t-purple rounded-xl active:scale-95 duration-150" onClick={resetTimer}>
                        Reset
                    </button>
                </div>
            </div>
        </section>
    )
}