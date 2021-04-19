import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'landing-page-content',
  templateUrl: './landing-page-content.component.html',
  styleUrls: ['./landing-page-content.component.scss']
})
export class LandingPageContentComponent implements OnInit, OnDestroy {


  calcLoanForm: any;
  monthlyIncomeVal: number = 0;
  monthlyExpenseVal: number = 0;
  subscription = new Subscription();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.onFormUpdate();
  }

  initForm() {
    this.calcLoanForm = new FormGroup({
      monthlyIncome: new FormControl(),
      monthlyExpense: new FormControl(),
      tenure: new FormControl(),
      existingLoan: new FormControl(),
      emiOption: new FormControl()
    });
    this.calcLoanForm = this.fb.group({
      monthlyIncome: [0],
      monthlyExpense: [0],
      tenure: [''],
      existingLoan: [false],
      emiOption: ['']
    });
  }


  onFormUpdate() {
    this.subscription.add(
      this.calcLoanForm.valueChanges.subscribe(selectedValue  => {
        this.monthlyExpenseVal = selectedValue.monthlyExpense;
        this.monthlyIncomeVal = selectedValue.monthlyIncome;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
