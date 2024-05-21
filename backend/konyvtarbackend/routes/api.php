<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\RentalController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/books', [BookController::class, "index"]);
Route::post('/books', [BookController::class, "store"]);
Route::post('/books/{id}/rent',[RentalController::class, "rent"]);
