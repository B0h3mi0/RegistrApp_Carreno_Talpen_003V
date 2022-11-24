import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [

  
  {
    path: 'inicio',
    loadChildren: () =>
      import('./pages/inicio/inicio.module').then((m) => m.InicioPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'registrar-asistencia',
    loadChildren: () => import('./pages/registrar-asistencia/registrar-asistencia.module').then( m => m.RegistrarAsistenciaPageModule)
  },
  {
    path: 'registro-usuario',
    loadChildren: () => import('./pages/registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'crear-qr',
    loadChildren: () => import('./pages/crear-qr/crear-qr.module').then( m => m.CrearQrPageModule)
  },
  {
    path: 'generar-qr',
    loadChildren: () => import('./pages/generar-qr/generar-qr.module').then( m => m.GenerarQrPageModule)
  },
  {
    path: 'toma-asistencia',
    loadChildren: () => import('./pages/toma-asistencia/toma-asistencia.module').then( m => m.TomaAsistenciaPageModule)
  },
  {
    path: 'ajustes',
    loadChildren: () => import('./backend/ajustes/ajustes.module').then( m => m.AjustesPageModule)
  },
  {
    path: 'registro-p',
    loadChildren: () => import('./pages/registro-p/registro-p.module').then( m => m.RegistroPPageModule)
  },
  {
    path: 'cam-qr',
    loadChildren: () => import('./pages/cam-qr/cam-qr.module').then( m => m.CamQrPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'crearcuenta',
    loadChildren: () => import('./pages/crearcuenta/crearcuenta.module').then( m => m.CrearcuentaPageModule)
  },
  {
    path: 'entretenimiento',
    loadChildren: () => import('./pages/entretenimiento/entretenimiento.module').then( m => m.EntretenimientoPageModule)
  },
  {
    path: 'alumno',
    loadChildren: () => import('./pages/alumno/alumno.module').then( m => m.AlumnoPageModule)
  },
  {
    path: 'profesor',
    loadChildren: () => import('./pages/profesor/profesor.module').then( m => m.ProfesorPageModule)
  },
  {
    path: 'logalumno',
    loadChildren: () => import('./pages/logalumno/logalumno.module').then( m => m.LogalumnoPageModule)
  },
  {
    path: 'logprofesor',
    loadChildren: () => import('./pages/logprofesor/logprofesor.module').then( m => m.LogprofesorPageModule)
  },
  {
    path: 'crearalum',
    loadChildren: () => import('./pages/crearalum/crearalum.module').then( m => m.CrearalumPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
