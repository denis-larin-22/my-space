export interface ITaskItem {
    id: string,
    name: string,
    desk: string,
    date: string,
    isDone: boolean
};

export type TaskListArray = Array<ITaskItem> | [];

// Reminder
export interface IReminerItem {
    id: string,
    text: string
};

export type ReminderListArray = Array<IReminerItem> | [];