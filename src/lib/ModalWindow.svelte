<section class="modal">
    <slot></slot>
</section>

<style>
    .modal{
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0,0,0,.1);
        z-index: 100;
    }
</style>