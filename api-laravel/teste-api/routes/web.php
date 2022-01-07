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
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS, ANY');
header('Access-Control-Allow-Headers:   Origin, Content-Type, X-Auth-Token, Authorization');
/*Rotas de Usuários*/

/*Rotas de Usuários*/
Route::post('/users', [UserController::class, 'createUser']);//Criação de usuário
Route::any('/users/{email}',[UserController::class, 'loggingUser']);
/*Rotas de Produtos */
Route::get('/produtos/{id}', [ProdutosController::class, 'GetProductById']);
Route::get('/produtos', [ProdutosController::class, 'GetAllProducts']);
Route::post('/produtos', [ProdutosController::class, 'createProduct']);
Route::patch('/produtos/{id}', [ProdutosController::class, 'editarProduto']);
Route::delete('/produtos/{id}', [ProdutosController::class, 'deleteProduct']);

/*Rotas de Produtos */
