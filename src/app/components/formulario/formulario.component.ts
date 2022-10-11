import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  @Input() nomeForm = '';

  form: FormGroup;
  @Output() onSubmit = new EventEmitter();

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      filme: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onFormSubmit() {
    this.onSubmit.emit(this.form.value);
  }
}
