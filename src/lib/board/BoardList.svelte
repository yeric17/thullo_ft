<script lang="ts">
    import MenuDotIcon from "$lib/icons/MenuDotIcon.svelte";
    import type { BoardTaskList } from "src/utils/types";
    import BoardTaskCard from "./BoardTaskCard.svelte";


    export let boardList:BoardTaskList = {
        id: "1",
        name: "Pending",
        boardId: "213",
        tasks: [
            {
                id:"1",
                name: "Hacer mañana",
                image: "https://picsum.photos/seed/picsum/300/200",
                description: "Esta es una tarea para hacer mañana",
                members: [
                    {
                        name: "Yeric",
                        avatar_url: "https://i.pravatar.cc/150?img=3",
                        role: "Admin"
                    },
                    {
                        name: "Yeric",
                        avatar_url: "https://i.pravatar.cc/150?img=3",
                        role: "Admin"
                    },
                    {
                        name: "Yeric",
                        avatar_url: "https://i.pravatar.cc/150?img=3",
                        role: "Admin"
                    },
                ],
                labels: [
                    'Tecnical', 'Concept' 
                ],
                comments:[{
                    author:{
                        id: "1",
                        name: "Yeric",
                        avatar_url: "https://i.pravatar.cc/150?img=3"
                    },
                    body: "Este es mi mensaje",
                    createdAt: new Date(2022,7,27)
                }],
                attachments: [
                    "an",
                    "sl"
                ],
                createdAt:new Date(2022,8,27),
            }
        ]
    };
</script>

<div class="board-list">
    <header class="board-list_header">
        <h4 class="ft-noto ft-500">{boardList.name}</h4>
        <span>
            <MenuDotIcon/>
        </span>
    </header>
    <div class="board-list_tasks">
        {#if boardList.tasks}
             {#each boardList.tasks as task}
                <BoardTaskCard task={task}/>
             {/each}
        {/if}
    </div>
</div>

<style>
    .board-list_header{
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
    }
</style>