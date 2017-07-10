import {NgModule, ModuleWithProviders} from '@angular/core';
import {ToRangePipe} from './pipes/toRange.pipe';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [],
  declarations: [
    ToRangePipe
  ],
  exports: [
    ToRangePipe
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
