import { Component, inject, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInputService } from '../services/user-input.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestmentInput = signal('')
  annualInvestmentInput = signal('')
  expectedReturnInput = signal('')
  durationInput = signal('')

  _userInputService = inject(UserInputService)
  data: any
  minZero(input: any) {
    if (input < 0) {
      input.set(0)
    }
  }

  onSubmit() {
    this.data = this._userInputService.calculateInvestmentResults(
      this.initialInvestmentInput(),
      this.annualInvestmentInput(),
      this.expectedReturnInput(),
      this.durationInput()
    )

  }
}
