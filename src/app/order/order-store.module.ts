import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { OrderEffects } from './order.effect';
import { name, reducer } from './order.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(name, reducer),
    EffectsModule.forFeature([OrderEffects]),
  ],
})
export class OrderStoreModule {}
