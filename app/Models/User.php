<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;
    protected $username = 'username';

    protected $fillable = [
        'name',
        'email',
        'username',
        'password',
        'role',
        'phone_number',
    ];

    protected $hidden = [
        'password',
        'remember_token',
        'role',
        'phone_number',
    ];
}
