<?php

use App\Http\Controllers\PacienteController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\AdminAuthController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Ruta principal pública
Route::get('/', function () {
  return Inertia::render('Welcome', [
    'canLogin' => Route::has('login'),
    'canRegister' => Route::has('register'),
    'laravelVersion' => Application::VERSION,
    'phpVersion' => PHP_VERSION,
  ]);
});

// Rutas de autenticación normal
Route::middleware('guest')->group(function () {
  Route::get('login', [AuthenticatedSessionController::class, 'create'])->name('login');
  Route::post('login', [AuthenticatedSessionController::class, 'store']);
  Route::get('register', [RegisteredUserController::class, 'create'])->name('register');
  Route::post('register', [RegisteredUserController::class, 'store']);
});

// Rutas de autenticación administrativa
Route::middleware('guest')->group(function () {
  Route::get('admin/login', [AdminAuthController::class, 'create'])->name('admin.login');
  Route::post('admin/login', [AdminAuthController::class, 'store'])->name('admin.login.store');
});

// Rutas protegidas
Route::middleware('auth')->group(function () {

  Route::get('/dashboard', [PacienteController::class, 'index'])->name('dashboard');

  // Ruta home para usuarios normales
  Route::get('/home', function () {
    return Inertia::render('Home');
  })->name('home');

  // Rutas CRUD para pacientes (solo admin)
  // Route::middleware('admin')->group(function () {
  Route::get('/pacientes/create', [PacienteController::class, 'create'])->name('pacientes.create');
  Route::post('/pacientes', [PacienteController::class, 'store'])->name('pacientes.store');
  Route::get('/pacientes/{paciente_id}/edit', [PacienteController::class, 'edit'])->name('pacientes.edit');
  Route::put('/pacientes/{paciente}', [PacienteController::class, 'update'])->name('pacientes.update');
  Route::delete('/pacientes/{paciente}', [PacienteController::class, 'destroy'])->name('pacientes.destroy');
  // });

  // Rutas de perfil
  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

  // Ruta de logout
  Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
});

require __DIR__ . '/auth.php';
