import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatCheckboxModule,
    MatToolbarModule, MatCardModule,
    MatInputModule, MatFormFieldModule
} from '@angular/material';

@NgModule({
    imports: [MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule],
    exports: [MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule],
})
export class MaterialModule { }
