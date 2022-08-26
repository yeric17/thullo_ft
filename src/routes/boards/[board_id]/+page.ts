
import { getBoardById } from "$lib/stores/boards";
import type { Load } from "@sveltejs/kit";


export const load:Load = function({params}){
    const board_id = params.board_id
    if(board_id == undefined) return
    let board = getBoardById(board_id)

    return {
        board
    }
}
