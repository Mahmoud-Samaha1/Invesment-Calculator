import { Component, inject, OnInit } from '@angular/core';
import { UserInputService } from '../services/user-input.service';
import { annualDataModel } from '../models/annualData.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent implements OnInit {


  items = [1, 2, 2, 2, 2]
  _userInputService = inject(UserInputService)
  // annualData: annualDataModel[] = this._userInputService.results
  results = this._userInputService.results.asReadonly();
  ngOnInit(): void {
    // this._userInputService.results.subscribe((data) => {
    //   this.results = data;
    // });

  }
}
