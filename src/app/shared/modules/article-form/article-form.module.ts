import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlFormComponent } from './components/article-form/article-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backend-error-messages/backend-error-messages.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, BackendErrorMessagesModule],
  declarations: [ArticlFormComponent],
  exports: [ArticlFormComponent],
})
export class ArticleFormModule {}
