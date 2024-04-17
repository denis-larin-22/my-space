interface IProps {
    progressValue: number,
    theme?: 'blue' | 'white'
}

export default function ProgressBar({ progressValue, theme = 'white' }: IProps) {
    const currentProgress = `${progressValue}%`;
    const isFull = progressValue === 100;
    const themeValue = theme === 'white';

    return (
        <div className="w-fit flex flex-col gap-2 text-base">
            <p className=""> {isFull && '✔'}  Progress: {currentProgress}</p>
            <div className={`relative h-2 rounded-2xl w-[200px] ${themeValue ? 'bg-white' : 'bg-t-blue'} bg-opacity-50 overflow-hidden ring-2 ring-t-blue ring-offset-1`}>
                <div className={`h-full rounded-full ${themeValue ? 'bg-white' : 'bg-t-blue'}`} style={{ width: currentProgress }}></div>
            </div>
        </div>
    )
};