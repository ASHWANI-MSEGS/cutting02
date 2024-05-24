<?php







Auth::routes();

Route::get('/logout-manual',function(){
    // request()->session()->invalidate();
  
        Auth::logout();
        Session::flush();
        return Redirect::to('/');
   


});

Route::get('/{any}', 'AppController@index')->where('any','.*');

