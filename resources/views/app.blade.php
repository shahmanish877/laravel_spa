<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name') }}</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">

    </head>
    <body id="app">
        <div class="w-full bg-indigo-500 absolute top-0 bottom-0 flex justify-center items-center">
            <div class="rounded-3xl animate-spin ease duration-300 w-12 h-12 border-2 border-t-0 border-white"></div>
        </div>
    <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
