export interface ITaskItem {
    id: string,
    name: string,
    desk: string,
    date: string,
    isDone: boolean
}

export type TaskListArray = Array<ITaskItem> | [];