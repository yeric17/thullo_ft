
export interface Board {
    id:string,
    name:string,
    image:string,
    members:Member[],
    tasksLink?:string,
    JoinMember(memberId:string):void,
    LeaveMember(memberId:string):void,
}

export type Member = {
    name:string,
    avatar_url: string,
    role:string,
}


export interface Task{
    id:string,
    name:string,
    description:string,
    labels:string[],
    comments:Comment[],
    attachments:string[],
    members:Member[],
    createdAt:Date,
    AddMember(memberId:string):void,
    RemoveMember(memberId:string):void
}

export type Author = {
    name: string,
    avatar_url: string
}

export interface Comment{
    author:Author,
    body:string,
    createdAt: Date,
}

export interface BoardTaskList {
    id: string,
    name: string,
    board: string,
    tasks: Task[],
    AddTask(taskId:string):void,
    RemoveTask(taskId:string):void
}