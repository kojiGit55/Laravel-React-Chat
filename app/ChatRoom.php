<?php
var_dump("");
namespace App;

use Illuminate\Database\Eloquent\Model;

class ChatRoom extends Model
{
    //
    public function users() {
        return $this->belongsToMany('App\User');
    }
}
