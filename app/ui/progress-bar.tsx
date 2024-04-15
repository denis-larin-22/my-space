interface IProps {
    progressValue: number
}

export default function ProgressBar({ progressValue }: IProps) {
    const currentProgress = `${progressValue}%`;
    const isFull = progressValue === 100;

    return (
        <div className="flex flex-col gap-2 text-base">
            <p className="text-right"> {isFull && '✔'}  Progress: {currentProgress}</p>
            <div className="relative h-2 rounded-2xl w-[200px] bg-white bg-opacity-50 overflow-hidden">
                <div className="h-full bg-white" style={{ width: currentProgress }}></div>
            </div>
        </div>
    )
};