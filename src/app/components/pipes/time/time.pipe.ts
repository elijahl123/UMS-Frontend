import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'time'
})
export class TimePipe implements PipeTransform {

   transform(value: string): string {
      // Convert the time from the format 'hh:mm:ss' to 'hh:mm AM/PM'\
      const time = value.split(':');
      const hours = parseInt(time[0]);
      const minutes = time[1];
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const hours12 = hours % 12;
      // Check if the time is 12:00 AM or 12:00 PM
      if (hours12 === 0) {
         return `12:${minutes} ${ampm}`;
      }
      return hours12 + ':' + minutes + ' ' + ampm;
   }

}
