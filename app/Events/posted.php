<?php
/**
 * Created by IntelliJ IDEA.
 * User: nakajimakouji
 * Date: 2019/03/31
 * Time: 8:40
 */
namespace App\Events;

use App\ChatMessage;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class Posted implements ShouldBroadcast
{
    use SerializesModels;

    public $chatMessage;

    public function __construct(ChatMessage $chatMessage)
    {
        $this->chatMessage = $chatMessage;
    }

    public function broadcastOn()
    {
        return new Channel('chatMessage');
    }
}
