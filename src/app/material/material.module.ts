import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [],
  imports: [CommonModule, DragDropModule],
  exports: [DragDropModule],
})
export class MaterialModule {}
