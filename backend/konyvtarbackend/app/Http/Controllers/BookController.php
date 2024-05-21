<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use Illuminate\Support\Facades\Validator;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books=Book::all();
        return response()->json($books);
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBookRequest $request)
    {
        $validator=Validator::make($request->all(), (new StoreBookRequest())->rules());
        if($validator->fails())
        {
            $errormessage="";
            foreach($validator->errors()->all() as $error){
                $errormessage .= $error . " ";
            }
            $errormessage=trim($errormessage);
            return response()->json(["message", $errormessage],404);
        }
        $book=new Book();
        $book->fill($request->all());
        $book->save();
        return response()->json($book,201);

    }


}
