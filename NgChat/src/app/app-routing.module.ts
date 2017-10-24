import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './auth/services/auth-guard.service';
import { PageNotFoundComponent } from './core/containers/page-not-found';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: '/chat', pathMatch: 'full' },
            {
                path: 'chat',
                canActivate: [AuthGuard],
                loadChildren: './chat/chat.module#ChatModule'
            },
            { path: '**', component: PageNotFoundComponent }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
