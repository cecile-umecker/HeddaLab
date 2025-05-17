import { Pipe, PipeTransform } from '@angular/core';
import { getCategoryLabel } from '../shared/category-labels';

@Pipe({
  name: 'categoryLabel'
})
export class CategoryLabelPipe implements PipeTransform {

  transform(value: string): string {
    return getCategoryLabel(value);
  }

}
