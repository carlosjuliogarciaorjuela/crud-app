<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
  public function index(Request $request)
  {
    // Lógica para mostrar la página de inicio del usuario
    return Inertia::render('home'); // Ejemplo: Renderizando un componente Inertia llamado User/Home
  }
}
