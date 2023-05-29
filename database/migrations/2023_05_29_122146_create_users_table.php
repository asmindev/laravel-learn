<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            // use uuid and auto incerement with default value
            $table->id()->unique();
            $table->string('name');
            $table->string('username')->unique();
            $table->string('phone_number')->unique();
            $table->string('email')->unique();
            $table->enum('role', ['admin', 'provider', 'tenant'])->default('tenant');
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
