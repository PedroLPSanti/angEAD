import { Component } from '@angular/core';
import { Tarefa, TarefasService } from './tarefas.service';

@Component({
  selector: 'tarefas',
  template: `
    <ul>
      <li *ngFor="let t of tarefas">
        {{t.tarefa}}
        (Projeto {{t.codigo}} - {{t.data|date:'dd/MM'}} - Prioridade {{t.prioridade}})
    </li>
    </ul>
  `
})
export class TarefasComponent { 

  tarefas: Tarefa[] = [];

  constructor(public ts: TarefasService) {
    this.tarefas = ts.getTarefas();
  }

}