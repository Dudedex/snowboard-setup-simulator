/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { BoardDataDto } from '../classes/board-data-dto';
export class DataInputFormComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DataInputFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-data-input-form',
                template: "<div class=\"container-fluid\" *ngIf=\"boardData\">\n  <div class=\"row\">\n    <label class=\"col-xs-8\">Length (in cm):</label>\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.length\"  step=\"3\">\n  </div>\n  <div class=\"row\">\n    <label class=\"col-xs-8\">Waist (in cm):</label>\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.waist\" step=\"0.1\">\n  </div>\n  <div class=\"row\">\n    <label class=\"col-xs-8\">Sidecut radius (in m):</label>\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.sidecutInM\" step=\"0.1\" max=\"10\" min=\"6\">\n  </div>\n  <div class=\"row\">\n    <label class=\"col-xs-8\">Sidecut Setback (in inches):</label>\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.sidecutSetbackInInches\" step=\"0.1\">\n  </div>\n  <div class=\"row\">\n    <label class=\"col-xs-8\">Stance Setback (in inches):</label>\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.setBackInInches\"  step=\"0.1\">\n  </div>\n  <div class=\"row\">\n    <label class=\"col-xs-8\">Stance width (in cm):</label>\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.stance\">\n  </div>\n  <div class=\"row\">\n    <label class=\"col-xs-8\">Angle left foot (in \u00B0):</label>\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.leftAngle\" step=\"3\">\n  </div>\n  <div class=\"row\">\n    <label class=\"col-xs-8\">Angle right foot (in \u00B0):</label>\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.rightAngle\" step=\"3\">\n  </div>\n  <div class=\"row\">\n    <label class=\"col-xs-8\">Boot Profile Size(in cm):</label>\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.bootSize\" step=\"0.5\">\n  </div>\n  <div class=\"row\">\n    <label class=\"col-xs-8\">Binding offset left(in cm):</label>\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.bindingOffsetLeft\" step=\"0.1\">\n  </div>\n  <div class=\"row\">\n    <label class=\"col-xs-8\">Binding offset right(in cm):</label>\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.bindingOffsetRight\" step=\"0.1\">\n  </div>\n</div>\n",
                styles: [".row{margin-bottom:.5rem;padding-left:3rem;padding-right:3rem}.container-fluid{margin-bottom:3rem}"]
            }] }
];
/** @nocollapse */
DataInputFormComponent.ctorParameters = () => [];
DataInputFormComponent.propDecorators = {
    boardData: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DataInputFormComponent.prototype.boardData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1pbnB1dC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nub3dib2FyZC1zZXR1cC1zaW11bGF0b3IvIiwic291cmNlcyI6WyJsaWIvZGF0YS1pbnB1dC1mb3JtL2RhdGEtaW5wdXQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQU92RCxNQUFNLE9BQU8sc0JBQXNCO0lBS2pDLGdCQUFnQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFiRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsOHJFQUErQzs7YUFFaEQ7Ozs7O3dCQUdFLEtBQUs7Ozs7SUFBTiwyQ0FDK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JvYXJkRGF0YUR0b30gZnJvbSAnLi4vY2xhc3Nlcy9ib2FyZC1kYXRhLWR0byc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1kYXRhLWlucHV0LWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS1pbnB1dC1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS1pbnB1dC1mb3JtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhSW5wdXRGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgYm9hcmREYXRhOiBCb2FyZERhdGFEdG87XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=