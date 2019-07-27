<?php

namespace App\Http\Controllers;

use App\ChatRoom;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class ChatRoomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $rooms = ChatRoom::all();

        return response()->json($rooms);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  string  $id
     * @return \Illuminate\Http\Response
     */
    public function show(string $id)
    {
        $room = ChatRoom::find($id);

        return response()->json($room);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ChatRoom  $chatRoom
     * @return \Illuminate\Http\Response
     */
    public function edit(ChatRoom $chatRoom)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ChatRoom  $chatRoom
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ChatRoom $chatRoom)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ChatRoom  $chatRoom
     * @return \Illuminate\Http\Response
     */
    public function destroy(ChatRoom $chatRoom)
    {
        //
    }
}
