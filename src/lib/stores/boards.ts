import type { Board } from "src/utils/types";
import { writable } from "svelte/store";

let initBoards:Board[] = [
    {
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