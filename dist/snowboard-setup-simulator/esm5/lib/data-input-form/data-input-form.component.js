/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { BoardDataDto } from '../classes/board-data-dto';
var DataInputFormComponent = /** @class */ (function () {
    function DataInputFormComponent() {
    }
    /**
     * @return {?}
     */
    DataInputFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    DataInputFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-data-input-form',
                    template: "<div class=\"container-fluid\" *ngIf=\"boardData\">\n  <div class=\"row\">\n    <label class=\"col-xs-8\">Length (in cm):</label>\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.length\"  step=\"3\">\n  </div>\n  <div class=\"row\">\n    <label class=\"col-xs-8\">Waist (in cm):</label>\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.waist\" step=\"0.1\">\n  </div>\n  <div class=\"row\">\n    <label class=\"col-xs-8\">Sidecut radius (in m):</label>\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.sidecutInM\" step=\"0.1\" max=\"10\" min=\"6\">\n  </div>\n  <div class=\"row\">\n    <label class=\"col-xs-8\">Sidecut Setback (in inches):</label>\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.sidecutSetbackInInches\" step=\"0.1\">\n  </div>\n  <div class=\"row\">\n    <label class=\"col-xs-8\">Stance Setback (in inches):</label>\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.setBackInInches\"  step=\"0.1\">\n  </div>\n  <div class=\"row\">\n    <label class=\"col-xs-8\">Stance width (in cm):</label>\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.stance\">\n  </div>\n  <div class=\"row\">\n    <label class=\"col-xs-8\">Angle left foot (in \u00B0):</label>\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.leftAngle\" step=\"3\">\n  </div>\n  <div class=\"row\">\n    <label class=\"col-xs-8\">Angle right foot (in \u00B0):</label>\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.rightAngle\" step=\"3\">\n  </div>\n  <div class=\"row\">\n    <label class=\"col-xs-8\">Boot Profile Size(in cm):</label>\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.bootSize\" step=\"0.5\">\n  </div>\n  <div class=\"row\">\n    <label class=\"col-xs-8\">Binding offset left(in cm):</label>\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.bindingOffsetLeft\" step=\"0.1\">\n  </div>\n  <div class=\"row\">\n    <label class=\"col-xs-8\">Binding offset right(in cm):</label>\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.bindingOffsetRight\" step=\"0.1\">\n  </div>\n</div>\n",
                    styles: [".row{margin-bottom:.5rem;padding-left:3rem;padding-right:3rem}.container-fluid{margin-bottom:3rem}"]
                }] }
    ];
    /** @nocollapse */
    DataInputFormComponent.ctorParameters = function () { return []; };
    DataInputFormComponent.propDecorators = {
        boardData: [{ type: Input }]
    };
    return DataInputFormComponent;
}());
export { DataInputFormComponent };
if (false) {
    /** @type {?} */
    DataInputFormComponent.prototype.boardData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1pbnB1dC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nub3dib2FyZC1zZXR1cC1zaW11bGF0b3IvIiwic291cmNlcyI6WyJsaWIvZGF0YS1pbnB1dC1mb3JtL2RhdGEtaW5wdXQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUV2RDtJQVVFO0lBQWdCLENBQUM7Ozs7SUFFakIseUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLDhyRUFBK0M7O2lCQUVoRDs7Ozs7NEJBR0UsS0FBSzs7SUFRUiw2QkFBQztDQUFBLEFBZkQsSUFlQztTQVZZLHNCQUFzQjs7O0lBRWpDLDJDQUMrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Qm9hcmREYXRhRHRvfSBmcm9tICcuLi9jbGFzc2VzL2JvYXJkLWRhdGEtZHRvJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWRhdGEtaW5wdXQtZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLWlucHV0LWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXRhLWlucHV0LWZvcm0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGFJbnB1dEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBib2FyZERhdGE6IEJvYXJkRGF0YUR0bztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==