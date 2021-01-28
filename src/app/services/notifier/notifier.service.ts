import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotifierService {
  constructor(public toastr: ToastrService) {}

  showSuccess(message: string): void {
    this.toastr.show(message);
  }

  showError(message: string): void {
    this.toastr.error(message, 'X');
  }
}
