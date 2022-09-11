import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './component/settings/settings.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { ReactiveFormsModule } from '@angular/forms';
import { BackendErrorMessagesModule } from '../shared/modules/backend-error-messages/backend-error-messages.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';

const routes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent,
  },
];

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('settings', reducers),
    ReactiveFormsModule,
    BackendErrorMessagesModule,
    LoadingModule,
  ],
})
export class SettingsModule {}
