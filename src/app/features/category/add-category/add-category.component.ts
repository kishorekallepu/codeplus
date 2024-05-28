import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request-model';
import { CategoryService } from '../../Services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy {
  model: AddCategoryRequest;
  private addCategorySubscription?: Subscription
  constructor(private categoryService: CategoryService) {
    this.model = {
      name: '',
      urlHandle: ''
    };
  }

  onFormSubmt() {
    this.addCategorySubscription = this.categoryService.addCategory(this.model)
      .subscribe({
        next: (response) => {
          console.log('successful');
        },
        error: (error) => {

        }
      })
  }
  ngOnDestroy(): void {
    this.addCategorySubscription?.unsubscribe();
  }
}
