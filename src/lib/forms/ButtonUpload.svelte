

<div class="input-file">
    <label class="btn input-file_button" >
        <input type="file" name="file" id="myFile">

        <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M20,5A2,2 0 0,1 22,7V17A2,2 0 0,1 20,19H4C2.89,19 2,18.1 2,17V7C2,5.89 2.89,5 4,5H20M5,16H19L14.5,10L11,14.5L8.5,11.5L5,16Z" />
        </svg>

        <slot></slot>
    </label>
</div>

<style>
    .input-file input{
        display: none;
    }
    .input-file_button{
        height: 32px;
        display: grid;
        grid-template-columns: auto 1fr;
        align-content: center;
        justify-items: start;
        gap: .5rem;
        padding-inline: 1rem;
        background-color: #f2f2f2;
        font-size: 12px;
        color: #828282;
        width: 100%;
        border-radius: 8px;
    }
    .input-file_button svg{
        width: 1rem;
        height: 1rem;
    }
</style>