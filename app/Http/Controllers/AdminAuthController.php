<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class AdminAuthController extends Controller
{
    public function create()
    {
        return Inertia::render('Auth/AdminLogin');
    }

    public function store(Request $request)
    {
        $request->validate([
            'document_number' => 'required|string',
            'password' => 'required|string',
        ]);

        $credentials = $request->only('document_number', 'password');
        $user = \App\Models\User::where('document_number', $credentials['document_number'])->first();

        if (!$user || !$user->is_admin) {
            throw ValidationException::withMessages([
                'document_number' => 'Las credenciales proporcionadas no corresponden a un usuario administrador.',
            ]);
        }
        
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->intended(route('dashboard'));
        }

        throw ValidationException::withMessages([
            'document_number' => 'Las credenciales proporcionadas son incorrectas.',
        ]);
    }
}
