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
                avatar_url: "https://i.pravatar.cc/150?img=3",
                role: "Admin"
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
                avatar_url: "https://i.pravatar.cc/150?img=2",
                role: "Admin"
            },
            {
                name: "Daniel",
                avatar_url: "https://i.pravatar.cc/150?img=6",
                role: "User"
            },
            {
                name: "Manuel",
                avatar_url: "https://i.pravatar.cc/150?img=2",
                role: "Admin"
            },
            {
                name: "Daniel",
                avatar_url: "https://i.pravatar.cc/150?img=6",
                role: "User"
            },
            {
                name: "Manuel",
                avatar_url: "https://i.pravatar.cc/150?img=2",
                role: "Admin"
            },
            {
                name: "Daniel",
                avatar_url: "https://i.pravatar.cc/150?img=6",
                role: "User"
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
                avatar_url: "https://i.pravatar.cc/150?img=3",
                role: "Admin"
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
                avatar_url: "https://i.pravatar.cc/150?img=2",
                role: "Admin"
            },
        ]
    },
    
]

export const boards = writable(initBoards)

/**
 * Return a board passing its id
 * @param boardId id of board
 */
export const getBoardById = function(boardId:string):Board|undefined {
    let board:Board|undefined = undefined
    boards.update(value => {
        board =  value.find(b => b.id === boardId)
        return value
    })
    return board
}