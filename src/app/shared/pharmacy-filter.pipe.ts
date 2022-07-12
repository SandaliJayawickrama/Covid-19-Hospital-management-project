import { Pipe, PipeTransform } from '@angular/core';
import { Pnameorder } from './pnameorder.model';

@Pipe({
   name: 'pharmacyFilter'
})
export class PharmacyFilterPipe implements PipeTransform {
  transform(pnameorders: Pnameorder[], searchText: string): Pnameorder[] {
   if (!pnameorders || searchText) {
        return pnameorders;
   }
     return pnameorders.filter(Pnameorder => Pnameorder.pname.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);

  }
}
