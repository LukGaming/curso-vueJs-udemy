<?php

namespace App\Http\Controllers;

use App\Models\User;
use Error;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function createUser(Request $request)
    {
        return User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);
    }
    public function loggingUser(Request $request)
    {
        $usuario = User::where('email', $request->email)->first();
        if(count($usuario) == 0){
           abort(500);
        }
        if($usuario){
            if($usuario->password == $request->password){
                 return response()->json(['response' => 'success', 'id' => $usuario->id, 'nome'=>$usuario->name, 'email'=>$usuario->email]);
            }
            else{
                return response()->json(['response' => 'error_password']);
            }
            
        }
        // return $usuario;
    }
}
