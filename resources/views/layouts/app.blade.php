
<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'PWD') }}</title>
    <link rel="icon" href="{{ asset('img/icon.png') }}"

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- <script src="https://checkout.razorpay.com/v1/checkout.js"></script>  -->

   

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div id="app">


        <main class="h-screen">
            @yield('content')
        </main>
    </div>
</body>
</html>
