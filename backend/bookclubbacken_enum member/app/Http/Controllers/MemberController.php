<?php

namespace App\Http\Controllers;

use App\Models\Member;
use App\Http\Requests\StoreMemberRequest;

use Illuminate\Support\Facades\Validator;


class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $members= Member::all();
        return response()->json($members);
    }

    public function store(StoreMemberRequest $request)
    {
        $validator=Validator::make($request->all(), (new StoreMemberRequest())->rules());
        if($validator->fails())
        {
            $errormsg="";
            foreach ($validator->errors()->all() as $error)
            {
                $errormsg .=$error."";
            }
            $errormsg=trim($errormsg);
            return response()->json(["message"=>$errormsg],400);
        }
        $member=new Member();
        $member->fill($request->all());
        $member->save();
        return response()->json($member,201);
    }
}
