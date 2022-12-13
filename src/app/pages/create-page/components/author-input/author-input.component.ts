import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, HostListener, Input, OnInit, Self } from '@angular/core';
import { AbstractControl, ControlValueAccessor, Form, FormControl, NgControl, ValidationErrors, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'author-input',
  templateUrl: './author-input.component.html',
  styleUrls: ['./author-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorInputComponent implements Validators {
  
}
