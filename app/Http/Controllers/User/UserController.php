<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Vista pantalla pricipal despues del iniciar sesion
     */
    public function dashboardView () {
        return Inertia::render('Dashboard');
    }

    /**
     * Vista de todos los usuarios (Solo de Administrador)
     */
    public function usersView() {
        return Inertia::render('UsersInfo',[
            'users' => User::with('roles')->take(15)->get()
        ]
        );
    }

    /**
     * Visa de la informacion del usuario
     */
    public function perfilView () {
        return Inertia::render('Perfil',[
            'user' => User::with('roles')->find(auth()->user()->id)
        ]
        );
    }
}
