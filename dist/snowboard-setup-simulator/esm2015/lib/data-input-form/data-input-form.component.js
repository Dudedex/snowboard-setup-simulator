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
                template: "<div class=\"container-fluid\" *ngIf=\"boardData\">\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Length (in cm):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.length\"  step=\"3\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Waist (in cm):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.waist\" step=\"0.1\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Sidecut radius (in m):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.sidecutInM\" step=\"0.1\" max=\"10\" min=\"6\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Sidecut Setback (in inches):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.sidecutSetbackInInches\" step=\"0.1\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Stance Setback (in inches):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.setBackInInches\"  step=\"0.1\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Stance width (in cm):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.stance\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Angle left foot (in \u00B0):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.leftAngle\" step=\"3\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Angle right foot (in \u00B0):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.rightAngle\" step=\"3\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Boot Profile Size(in cm):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.bootSize\" step=\"0.5\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Binding offset left(in cm):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.bindingOffsetLeft\" step=\"0.1\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Binding offset right(in cm):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.bindingOffsetRight\" step=\"0.1\">\r\n  </div>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1pbnB1dC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nub3dib2FyZC1zZXR1cC1zaW11bGF0b3IvIiwic291cmNlcyI6WyJsaWIvZGF0YS1pbnB1dC1mb3JtL2RhdGEtaW5wdXQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQU92RCxNQUFNLE9BQU8sc0JBQXNCO0lBS2pDLGdCQUFnQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFiRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsMHhFQUErQzs7YUFFaEQ7Ozs7O3dCQUdFLEtBQUs7Ozs7SUFBTiwyQ0FDK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Qm9hcmREYXRhRHRvfSBmcm9tICcuLi9jbGFzc2VzL2JvYXJkLWRhdGEtZHRvJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWRhdGEtaW5wdXQtZm9ybScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtaW5wdXQtZm9ybS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS1pbnB1dC1mb3JtLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0YUlucHV0Rm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGJvYXJkRGF0YTogQm9hcmREYXRhRHRvO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==