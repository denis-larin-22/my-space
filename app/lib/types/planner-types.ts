export interface ITaskItem {
    id: string,
    name: string,
    desk: string,
    isDone: boolean
}

export type TaskListArray = Array<ITaskItem> | [];