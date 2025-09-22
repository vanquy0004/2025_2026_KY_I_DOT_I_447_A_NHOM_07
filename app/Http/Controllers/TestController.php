<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index(Request $request)
    {   
        return response()->json([
        ['id'=>1, 'name'=>'Quý'],
        ['id'=>2, 'name'=>'Linh'],
        ['id'=>3, 'name'=>'Huy'],
        ['id'=>4, 'name'=>'Thảo'],
    ]);
    }
}
