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
                    template: "<div class=\"container-fluid\" *ngIf=\"boardData\">\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Length (in cm):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.length\"  step=\"3\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Waist (in cm):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.waist\" step=\"0.1\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Sidecut radius (in m):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.sidecutInM\" step=\"0.1\" max=\"10\" min=\"6\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Sidecut Setback (in inches):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.sidecutSetbackInInches\" step=\"0.1\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Stance Setback (in inches):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.setBackInInches\"  step=\"0.1\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Stance width (in cm):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.stance\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Angle left foot (in \u00B0):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.leftAngle\" step=\"3\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Angle right foot (in \u00B0):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.rightAngle\" step=\"3\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Boot Profile Size(in cm):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.bootSize\" step=\"0.5\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Binding offset left(in cm):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.bindingOffsetLeft\" step=\"0.1\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Binding offset right(in cm):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.bindingOffsetRight\" step=\"0.1\">\r\n  </div>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1pbnB1dC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nub3dib2FyZC1zZXR1cC1zaW11bGF0b3IvIiwic291cmNlcyI6WyJsaWIvZGF0YS1pbnB1dC1mb3JtL2RhdGEtaW5wdXQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUV2RDtJQVVFO0lBQWdCLENBQUM7Ozs7SUFFakIseUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLDB4RUFBK0M7O2lCQUVoRDs7Ozs7NEJBR0UsS0FBSzs7SUFRUiw2QkFBQztDQUFBLEFBZkQsSUFlQztTQVZZLHNCQUFzQjs7O0lBRWpDLDJDQUMrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtCb2FyZERhdGFEdG99IGZyb20gJy4uL2NsYXNzZXMvYm9hcmQtZGF0YS1kdG8nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtZGF0YS1pbnB1dC1mb3JtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS1pbnB1dC1mb3JtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kYXRhLWlucHV0LWZvcm0uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRhSW5wdXRGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgYm9hcmREYXRhOiBCb2FyZERhdGFEdG87XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19