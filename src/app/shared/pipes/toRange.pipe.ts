import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'toRangeFrom'})
export class ToRangePipe implements PipeTransform {
  transform(endValue: number, startValue: number, step: number = 1): number[] {
    return Array.from({length: Math.ceil((endValue - startValue) / step)})
      .map((_, i)=>i * step + startValue);
  }
}
