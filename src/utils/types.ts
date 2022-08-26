
export interface Board {
    id:string,
    name:string,
    image:string,
    members:Member[],
    tasksLink?:string
}

export type Member = {
    name:string,
    avatar_url: string,
}