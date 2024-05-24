<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Form;

class SearchFormController extends Controller
{
    public function index()
    {
        $data = request()->validate([
            'searchTerm' => 'required',
        ]);

        $form = Form::search($data['searchTerm'])->get();
        
        return ($form);
    }

    public function unindex()
    {
        $data = request()->validate([
            'searchTerm' => 'required',
        ]);

        $form = Form::search($data['searchTerm'])->where('status'==1)->get();
        
        return ($form);
    }



}
