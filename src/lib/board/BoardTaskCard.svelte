<!-- BoardTaskCard represent a component for single task-->
<script lang="ts">
    import type { BoardTask } from "src/utils/types";
    import MemberList from "$lib/board/MemberList.svelte";
    import LabelTask from "$lib/board/LabelTask.svelte";
    import ClipboardIcon from "$lib/icons/ClipboardIcon.svelte";
    import CommentIcon from "$lib/icons/CommentIcon.svelte";
    export let task:BoardTask
</script>


<article class="task">
    <header>
        <!-- Image task is not required, exists task without image in banner-->
        {#if task.image}
            <div class="task_image">
                <img src={task.image} alt="task"/>
            </div>
        {/if}
        <h5 class="task_name ft-noto ft-400">{task.name}</h5>
    </header>
    {#if task.labels && task.labels.length > 0}
        <ul class="task_labels">
            {#each task.labels as label}
                 <li class="task_label ft-noto">
                    <LabelTask>
                        {label}
                    </LabelTask>
                 </li>
            {/each}
        </ul>
    {/if}
    <footer class="task_footer">
        <MemberList members={task.members} limit={2}/>
        <div class="task_interac">
            <ul>
                {#if task.comments}
                    <li class="task_interac_item"><CommentIcon/> <span>{task.comments.length}</span></li>
                {/if}
                {#if task.attachments}
                    <li class="task_interac_item"><ClipboardIcon/> <span>{task.attachments.length}</span></li>
                {/if}
            </ul>
        </div>
    </footer>
</article>

<style>
    .task{
        background-color: #ffffff;
        padding: .75rem;
        border-radius: 12px;
        width: 240px;
    }

    .task_image{
        border-radius: 12px;
        height: 130px;
        overflow: hidden;
        margin-bottom: 1rem;
    }
    .task_image img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .task_name{
        margin-bottom: 14px;
    }
    .task_labels{
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
    }
    .task_footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .task_label{
        font-size: 10px;
    }
    .task_interac ul{
        display: flex;
        gap: 8px;
    }
    .task_interac_item{
        font-size: .6rem;
        display: flex;
        align-items: center;
        gap: 4px;
        --fill: #bdbdbd;
        color: #bdbdbd;
    }
</style>