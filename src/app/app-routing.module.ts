import {NgModule } from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import { TarefasComponent } from './tarefas.component';
import { SobreComponent } from './sobre.component';

const rotas: Routes = [
    {path: 'tarefas', component: TarefasComponent},
    {path: 'sobre', component: SobreComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]
})

export class AppRoutingModule {}