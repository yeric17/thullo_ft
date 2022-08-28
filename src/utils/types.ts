
export interface Board {
    id:string,
    name:string,
    image:string,
    members:Member[],
    listLink?:string,
}

export type Member = {
    name:string,
    avatar_url: string,
    role:string,
}

/**
 * Task interface
 */
export interface BoardTask{
    id:string,
    name:string,
    image?:string,
    description?:string,
    labels?:string[],
    comments?:Comment[],
    attachments?:string[],
    members:Member[],
    createdAt:Date,
}

export type Author = {
    id: string,
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
    boardId: string,
    tasks: BoardTask[],
}

// Color type
export interface HSLColor {
    h: string,
    l: string,
    s: string
}

