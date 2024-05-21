<?php

namespace App\Http\Controllers;
use App\Models\Book;

use App\Models\Rental;
use App\Http\Requests\StoreRentalRequest;
use App\Http\Requests\UpdateRentalRequest;

class RentalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function rent($id)
    {
        $book= Book::find($id);
        if(is_null($book))
        {
            return response()->json(["message"=> "nincs ilyen $id -val könyv"],404);
        }
        $rentals= Rental::Where([
            ["book_id", $id],
            ["start_date", "<=", date( "Y-m-d")],
            ["end_date", ">=", date( "Y-m-d")]
        ])->get();
            if(!$rentals->isEmpty())
            {
                return response()->json(["message"=> "A könyv már foglalva van"],409);
            }
            $rental=new Rental();
            $rental ->book_id=$id;
            $rental->start_date=date("Y-m-d");
            $rental -> end_date= date("Y-m-d", strtotime("+1 week"));
            $rental->save();

            return response()->json($rental,201);
    }
}
