<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\Member;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function payMember($member)
    {
        $clubMember= Member::find($member);
        if (is_null($clubMember))
        {
            return response()->json(['error'=>"A clubtag nem található"],404);
        }
        $currentMonthPayments= Payment::where('member_id', $member)
                                      ->where('paid_at',now()->month)
                                      ->where('paid_at',now()->year)
                                      ->count();

        if ($currentMonthPayments > 0)
        {
            return response()->json(["error"=> "A clubtag már fizetett ebben a hónapban"],409);
        }
        $payment=new Payment();
        $payment->member_id = $member;
        $payment->amount =5000;
        $payment->paid_at = now();
        $payment->save();

        return response()->json([
            'id'=>$payment->id,
            'member_id'=>$payment->member_id,
            'amount'=>$payment->amount,
            "paid_at"=>$payment->paid_at],201);
    }
}
