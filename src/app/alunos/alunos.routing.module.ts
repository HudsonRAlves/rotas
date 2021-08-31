import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunosFormComponent } from "./alunos-form/alunos-form.component";
import { AlunosComponent } from "./alunos.component";

const alunosRoutes = [
  {path: 'alunos', component: AlunosComponent,
    children : [
      {path: 'novo', component: AlunosFormComponent},
      {path: ':id', component: AlunoDetalheComponent},
      {path: ':id/edit', component: AlunosFormComponent},
    ]}
];

@NgModule({
  imports:[
    RouterModule.forChild(alunosRoutes)
  ],
  exports : [
    RouterModule
  ]
})
export class AlunosRoutingModule{

}
