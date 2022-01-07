<?php

namespace App\Http\Controllers;

use App\Models\Produtos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProdutosController extends Controller
{
    public function GetAllProducts()
    {
        return json_encode(Produtos::paginate(10));
    }
    public function GetProductById($id)
    {
        header('Access-Control-Allow-Origin: *'); 
        return json_encode(Produtos::where('id', $id)->first());
    }
    public function createProduct(Request $request)
    {
        return Produtos::create([
            'nome' => $request->nome,
            'valor' => $request->valor,
            'descricao' => $request->descricao
        ]);
    }
    public function deleteProduct($id)
    {
    }
}
