import { Injectable, signal } from '@angular/core';
import { userInputModel } from '../models/userInput.model';
import { annualDataModel } from '../models/annualData.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInputService {
  // private resultsSubject = new BehaviorSubject<annualDataModel[]>([])
  //   results = this.resultsSubject.asObservable();
  results = signal<annualDataModel[] | undefined>(undefined)
  constructor() { }
  calculateInvestmentResults(initialInvestment: string, annualInvestment: string
    , expectedReturn: string, duration: string
  ) {
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < Number(duration); i++) {
      const year = i + 1;
      const interestEarnedInYear = Number(investmentValue) * (Number(expectedReturn) / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        Number(investmentValue) - Number(annualInvestment) * year - Number(initialInvestment);
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + Number(annualInvestment) * year,
      });
    }
    // this.results = annualData;

    // this.resultsSubject.next(annualData);
    this.results.set(annualData)
  }

}
