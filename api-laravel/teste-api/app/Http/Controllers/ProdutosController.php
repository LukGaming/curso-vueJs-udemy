<?php

namespace App\Http\Controllers;

use App\Models\Produtos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProdutosController extends Controller
{
    public function GetAllProducts()
    {
        return json_encode(Produtos::paginate(500));
    }
    public function GetProductById($id)
    {

        return json_encode(Produtos::where('id', $id)->first());
    }
    public function createProduct(Request $request)
    {
        return Produtos::create([
            'nome' => $request->nome,
            'valor' => $request->valor,
            'descricao' => $request->descricao,
            'id_user_criador' => $request->id_user_criador
            
        ]);
    }
    public function deleteProduct($id)
    {
        return Produtos::find($id)->delete($id);
    }
    public function editarProduto(Request $request)
    {
        return Produtos::where('id', $request->id)->update([
            'nome' => $request->nome,
            'valor' => $request->valor,
            'descricao' => $request->descricao
        ]);
           
    }
}
