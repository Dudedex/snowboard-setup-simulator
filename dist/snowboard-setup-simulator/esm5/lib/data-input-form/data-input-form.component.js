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
    /**
     * @param {?} type
     * @return {?}
     */
    DataInputFormComponent.prototype.setMarkPart = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this.boardData.markPart = type;
    };
    DataInputFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-data-input-form',
                    template: "<div class=\"container-fluid\" *ngIf=\"boardData\">\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">{{'page.snowboardSetup.length' | translate}}:</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.length\"  step=\"3\" (focus)=\"setMarkPart('length')\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">{{'page.snowboardSetup.waist' | translate}}:</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.waist\" step=\"0.1\" (focus)=\"setMarkPart('waist')\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">{{'page.snowboardSetup.sidecutRadius' | translate}}:</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.sidecutInM\" step=\"0.1\" max=\"10\" min=\"6\" (focus)=\"setMarkPart('sidecut')\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">{{'page.snowboardSetup.sidecutSetback' | translate}}:</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.sidecutSetbackInInches\" step=\"0.1\" (focus)=\"setMarkPart('sidecut')\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">{{'page.snowboardSetup.stanceSetback' | translate}}:</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.setBackInInches\"  step=\"0.1\" (focus)=\"setMarkPart('bindings')\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">{{'page.snowboardSetup.stanceWidth' | translate}}:</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.stance\" (focus)=\"setMarkPart('bindings')\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">{{'page.snowboardSetup.angleLeft' | translate}}:</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.leftAngle\" step=\"3\" (focus)=\"setMarkPart('leftBinding')\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">{{'page.snowboardSetup.angleRight' | translate}}:</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.rightAngle\" step=\"3\" (focus)=\"setMarkPart('rightBinding')\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">{{'page.snowboardSetup.bootProfile' | translate}}:</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.bootSize\" step=\"0.5\" (focus)=\"setMarkPart('boots')\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">{{'page.snowboardSetup.bindingOffsetLeft' | translate}}:</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.bindingOffsetLeft\" step=\"0.1\" (focus)=\"setMarkPart('bindingsBootPlateLeft')\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">{{'page.snowboardSetup.bindingOffsetRight' | translate}}:</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.bindingOffsetRight\" step=\"0.1\" (focus)=\"setMarkPart('bindingsBootPlateRight')\">\r\n  </div>\r\n</div>\r\n",
                    styles: [".row{margin-bottom:.5rem;padding-left:3rem;padding-right:3rem}.container-fluid{margin-bottom:3rem}.plate-active{background-color:rgba(255,11,0,.5)}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1pbnB1dC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nub3dib2FyZC1zZXR1cC1zaW11bGF0b3IvIiwic291cmNlcyI6WyJsaWIvZGF0YS1pbnB1dC1mb3JtL2RhdGEtaW5wdXQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUV2RDtJQVVFO0lBQWdCLENBQUM7Ozs7SUFFakIseUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Ozs7SUFFTSw0Q0FBVzs7OztJQUFsQixVQUFtQixJQUFZO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNqQyxDQUFDOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLGsrRkFBK0M7O2lCQUVoRDs7Ozs7NEJBR0UsS0FBSzs7SUFZUiw2QkFBQztDQUFBLEFBbkJELElBbUJDO1NBZFksc0JBQXNCOzs7SUFFakMsMkNBQytCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0JvYXJkRGF0YUR0b30gZnJvbSAnLi4vY2xhc3Nlcy9ib2FyZC1kYXRhLWR0byc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1kYXRhLWlucHV0LWZvcm0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLWlucHV0LWZvcm0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RhdGEtaW5wdXQtZm9ybS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGFJbnB1dEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBib2FyZERhdGE6IEJvYXJkRGF0YUR0bztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0TWFya1BhcnQodHlwZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmJvYXJkRGF0YS5tYXJrUGFydCA9IHR5cGU7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=