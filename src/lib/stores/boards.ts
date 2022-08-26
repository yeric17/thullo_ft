import type { Board } from "src/utils/types";
import { writable } from "svelte/store";

let initBoards:Board[] = [
    {
        id:"1",
        name: "Devchallenges Board",
        image: "https://picsum.photos/seed/picsum/200/300",
        members: [
            {
                name: "Yeric",
                avatar_url: "https://i.pravatar.cc/150?img=3"
            }
        ],
    },
    {
        id:"2",
        name: "Simple Project",
        image: "https://picsum.photos/seed/picsum/200/300",
        members: [
            {
                name: "Manuel",
                avatar_url: "https://i.pravatar.cc/150?img=2"
            },
            {
                name: "Daniel",
                avatar_url: "https://i.pravatar.cc/150?img=6"
            },
        ]
    },
    {
        id:"3",
        name: "Devchallenges Board",
        image: "https://picsum.photos/seed/picsum/200/300",
        members: [
            {
                name: "Yeric",
                avatar_url: "https://i.pravatar.cc/150?img=3"
            }
        ]
    },
    {
        id:"4",
        name: "Simple Project",
        image: "https://picsum.photos/seed/picsum/200/300",
        members: [
            {
                name: "Manuel",
                avatar_url: "https://i.pravatar.cc/150?img=2"
            },
            {
                name: "Daniel",
                avatar_url: "https://i.pravatar.cc/150?img=6"
            },
            {
                name: "Manuel",
                avatar_url: "https://i.pravatar.cc/150?img=2"
            },
            {
                name: "Daniel",
                avatar_url: "https://i.pravatar.cc/150?img=6"
            },
            {
                name: "Manuel",
                avatar_url: "https://i.pravatar.cc/150?img=2"
            },
            {
                name: "Daniel",
                avatar_url: "https://i.pravatar.cc/150?img=6"
            },
        ]
    },
    {
        id:"5",
        name: "Devchallenges Board",
        image: "https://picsum.photos/seed/picsum/200/300",
        members: [
            {
                name: "Yeric",
                avatar_url: "https://i.pravatar.cc/150?img=3"
            }
        ]
    },
    {
        id:"6",
        name: "Simple Project",
        image: "https://picsum.photos/seed/picsum/200/300",
        members: [
            {
                name: "Manuel",
                avatar_url: "https://i.pravatar.cc/150?img=2"
            },
            {
                name: "Daniel",
                avatar_url: "https://i.pravatar.cc/150?img=6"
            },
            {
                name: "Manuel",
                avatar_url: "https://i.pravatar.cc/150?img=2"
            },
            {
                name: "Daniel",
                avatar_url: "https://i.pravatar.cc/150?img=6"
            },
            {
                name: "Manuel",
                avatar_url: "https://i.pravatar.cc/150?img=2"
            },
            {
                name: "Daniel",
                avatar_url: "https://i.pravatar.cc/150?img=6"
            },
            {
                name: "Manuel",
                avatar_url: "https://i.pravatar.cc/150?img=2"
            },
            {
                name: "Daniel",
                avatar_url: "https://i.pravatar.cc/150?img=6"
            },
        ]
    },
]

export const boards = writable(initBoards)


export const getBoardById = function(boardId:string):Board|undefined {
    let board:Board|undefined = undefined
    boards.update(value => {
        board =  value.find(b => b.id === boardId)
        return value
    })
    return board
}