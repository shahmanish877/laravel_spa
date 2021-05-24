<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request){
        /*$request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        return $user->createToken('authToken')->plainTextToken;*/

        try {
            $request->validate([
                'email' => 'email|required',
                'password' => 'required'
            ]);

            $credentials = request(['email', 'password']);
            /*if (!Auth::attempt($credentials)) {
                return response()->json([
                    'status_code' => 500,
                    'message' => 'Unauthorized'
                ]);
            }*/

            $usermail = $request->get('email');
            $password = $request->get('password');
            $remember = $request->get('remember_me');

            if(filter_var($usermail, FILTER_VALIDATE_EMAIL)) {
                $isEmailExist = User::where('email',$usermail)->first();
                if($isEmailExist != null){
                    if(Auth::attempt([
                        'email' => $usermail,
                        'password'  => $password
                    ],$remember)){
                        $user = Auth::user();
                        $tokenResult = $user->createToken('authToken')->plainTextToken;
                        return response()->json([
                            'status_code' => 200,
                            'access_token' => $tokenResult,
                            'token_type' => 'Bearer',
                        ]);
                    }else{
                        return response()->json([
                            'message'   => "The password you entered is incorrect."
                        ],401);
                    }
                }else{
                    return response([
                        'message' => "Invalid email address."
                    ], 401);
                }
            }

        } catch (Exception $error) {
            return response()->json([
                'status_code' => 500,
                'message' => 'Error in Login',
                'error' => $error,
            ]);
        }
    }
}
