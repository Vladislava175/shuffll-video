import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from 'src/app/components/list/list.component';
import { TimelineComponent } from 'src/app/components/timeline/timeline.component';

@NgModule({
  declarations: [TimelineComponent, ListComponent],
  imports: [CommonModule],
  exports: [TimelineComponent, ListComponent],
})
export class UtilsModule {}
