<?php

use App\Http\Controllers\ProdutosController;
use App\Http\Controllers\UserController;
use App\Http\Resources\ProdutosResource;
use App\Http\Resources\User;
use App\Http\Resources\UserResource;
use App\Models\Produtos;
use App\Models\User as ModelsUser;
use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpKernel\Exception\HttpException;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

header('Access-Control-Allow-Origin: *');
Route::get('/users', function () {
    return UserResource::collection(ModelsUser::all());
});
Route::get('/users/{id}', function ($id) {
    try{
        return new UserResource(ModelsUser::findOrFail($id));
    }
    catch(\Exception $e){
        throw new HttpException(500, $e->getMessage());
    }
});

Route::post('/users', [UserController::class, 'postUser']);

Route::get('/produtos/{id}', [ProdutosController::class, 'GetProductById']);
Route::get('/produtos', [ProdutosController::class, 'GetAllProducts']);
Route::post('/produtos', [ProdutosController::class, 'createProduct']);




