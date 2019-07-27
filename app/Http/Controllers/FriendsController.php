<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class FriendsController extends Controller
{
    public function getFriends()
    {
        $r = DB::table('friends')
            ->select('*')
            ->where('following_user_id', '=', Auth::user()->id)
            ->get();
        $res = [];
        foreach ($r as $k => $v) {
            $res[] = User::find($v->followed_user_id);
        }
        return response()->json($res);
    }

    public function getRoomIdByFriendId(string $id)
    {
        $res = DB::table('chat_rooms_users')
            ->selectRaw('room_id, count(*) AS cnt')
            ->where('user_id', '=', $id)
            ->orWhere('user_id', '=', Auth::user()->id)
            ->groupBy('room_id')
            ->having('cnt', '=', 2)
            ->get();
        return response()->json($res[0]);
    }
}
