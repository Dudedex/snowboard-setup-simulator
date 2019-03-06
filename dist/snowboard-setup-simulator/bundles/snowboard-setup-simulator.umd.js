(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/forms'), require('@angular/common'), require('@angular/platform-browser'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('snowboard-setup-simulator', ['exports', '@angular/forms', '@angular/common', '@angular/platform-browser', '@angular/core'], factory) :
    (factory((global['snowboard-setup-simulator'] = {}),global.ng.forms,global.ng.common,global.ng.platformBrowser,global.ng.core));
}(this, (function (exports,forms,common,platformBrowser,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SnowboardSetupSimulatorService = /** @class */ (function () {
        function SnowboardSetupSimulatorService() {
        }
        SnowboardSetupSimulatorService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SnowboardSetupSimulatorService.ctorParameters = function () { return []; };
        /** @nocollapse */ SnowboardSetupSimulatorService.ngInjectableDef = i0.defineInjectable({ factory: function SnowboardSetupSimulatorService_Factory() { return new SnowboardSetupSimulatorService(); }, token: SnowboardSetupSimulatorService, providedIn: "root" });
        return SnowboardSetupSimulatorService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SnowboardSetupSimulatorComponent = /** @class */ (function () {
        function SnowboardSetupSimulatorComponent() {
        }
        /**
         * @return {?}
         */
        SnowboardSetupSimulatorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SnowboardSetupSimulatorComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-snowboard-setup-simulator',
                        template: "\n    <app-board-panel></app-board-panel>\n  "
                    }] }
        ];
        /** @nocollapse */
        SnowboardSetupSimulatorComponent.ctorParameters = function () { return []; };
        return SnowboardSetupSimulatorComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BoardComponent = /** @class */ (function () {
        function BoardComponent() {
            this.cmInPixelFactor = 2;
            this.inchesInCm = 2.54;
            this.mInPixelFactor = 200;
        }
        /**
         * @return {?}
         */
        BoardComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        BoardComponent.prototype.ngDoCheck = /**
         * @return {?}
         */
            function () {
                if (this.boardData) {
                    this.calculateRightOverhang();
                    this.calculateLeftOverhang();
                }
            };
        /**
         * @return {?}
         */
        BoardComponent.prototype.getContainerHeight = /**
         * @return {?}
         */
            function () {
                // Container height minus border width
                if ($('.board-container')) {
                    return $('.board-container').height() - 2;
                }
                return 0;
            };
        /**
         * @return {?}
         */
        BoardComponent.prototype.getSidecutMargin = /**
         * @return {?}
         */
            function () {
                if (this.boardData.sidecutInM < 6.3) {
                    return -2;
                }
                if (this.boardData.sidecutInM < 6.7) {
                    return -1;
                }
                if (this.boardData.sidecutInM < 7.2) {
                    return 0;
                }
                if (this.boardData.sidecutInM < 7.6) {
                    return 1;
                }
                if (this.boardData.sidecutInM < 8.5) {
                    return 2;
                }
                if (this.boardData.sidecutInM < 9) {
                    return 3;
                }
                if (this.boardData.sidecutInM < 9.4) {
                    return 4;
                }
                if (this.boardData.sidecutInM <= 10) {
                    return 5;
                }
                return 6;
            };
        /**
         * @private
         * @return {?}
         */
        BoardComponent.prototype.calculateRightOverhang = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var widthAtInsert = this.calculateWidthAtInserts(this.boardData.stance / 2 + this.boardData.setBackInInches * 2.54 - this.boardData.sidecutSetbackInInches * 2.54);
                /** @type {?} */
                var absWidthAtInsert = this.calculateAbsBoardWidthAtInserts(this.boardData.rightAngle, widthAtInsert);
                /** @type {?} */
                var offset = this.calculateAbsBoardWidthAtInserts(this.boardData.rightAngle, 1);
                this.currentRightHeelOverhang = Math.floor(((this.boardData.bootSize - absWidthAtInsert) / 2 - this.boardData.bindingOffsetRight * offset) * 100) / 100;
                this.currentRightToeOverhang = Math.floor(((this.boardData.bootSize - absWidthAtInsert) / 2 + this.boardData.bindingOffsetRight * offset) * 100) / 100;
            };
        /**
         * @private
         * @return {?}
         */
        BoardComponent.prototype.calculateLeftOverhang = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var widthAtInsert = this.calculateWidthAtInserts(this.boardData.stance / 2 - this.boardData.setBackInInches * 2.54 + this.boardData.sidecutSetbackInInches * 2.54);
                /** @type {?} */
                var absWidthAtInsert = this.calculateAbsBoardWidthAtInserts(this.boardData.leftAngle, widthAtInsert);
                /** @type {?} */
                var offset = this.calculateAbsBoardWidthAtInserts(this.boardData.leftAngle, 1);
                this.currentLeftToeOverhang = Math.floor(((this.boardData.bootSize - absWidthAtInsert) / 2 + this.boardData.bindingOffsetLeft * offset) * 100) / 100;
                this.currentLeftHeelOverhang = Math.floor(((this.boardData.bootSize - absWidthAtInsert) / 2 - this.boardData.bindingOffsetLeft * offset) * 100) / 100;
            };
        /**
         * @private
         * @param {?} stancePlacement
         * @return {?}
         */
        BoardComponent.prototype.calculateWidthAtInserts = /**
         * @private
         * @param {?} stancePlacement
         * @return {?}
         */
            function (stancePlacement) {
                /** @type {?} */
                var hypoInCm = this.boardData.sidecutInM * 100;
                /** @type {?} */
                var kat1 = stancePlacement;
                /** @type {?} */
                var hypoPow = Math.pow(hypoInCm, 2);
                /** @type {?} */
                var kat1Pow = Math.pow(kat1, 2);
                /** @type {?} */
                var kat2Pow = hypoPow - kat1Pow;
                /** @type {?} */
                var kat2 = Math.sqrt(kat2Pow);
                return this.boardData.waist + (hypoInCm - kat2) * 2;
            };
        /**
         * @private
         * @param {?} angleValue
         * @param {?} widthAtInserts
         * @return {?}
         */
        BoardComponent.prototype.calculateAbsBoardWidthAtInserts = /**
         * @private
         * @param {?} angleValue
         * @param {?} widthAtInserts
         * @return {?}
         */
            function (angleValue, widthAtInserts) {
                /**
                 * right triangle with
                 * a = widthAtInserts
                 * angle a/b = 90°
                 * angle a/c = angleValue
                 * @type {?}
                 */
                var alpha;
                /** @type {?} */
                var beta;
                /** @type {?} */
                var gamma = 90;
                if (angleValue >= 0) {
                    beta = angleValue;
                }
                else {
                    beta = -angleValue;
                }
                /** @type {?} */
                var a = widthAtInserts;
                if (beta === 0 || a === 0) {
                    return a;
                }
                else {
                    alpha = 90 - beta;
                }
                /** @type {?} */
                var c = a * Math.sin(gamma * Math.PI / 180) / Math.sin(alpha * Math.PI / 180);
                return c;
            };
        BoardComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-board',
                        template: "<div *ngIf=\"boardData\">\r\n  <app-overhang-panel [boardData]=\"boardData\" [placement]=\"'top'\" [leftOverhang]=\"currentLeftToeOverhang\" [rightOverhang]=\"currentRightToeOverhang\"></app-overhang-panel>\r\n  <div class=\"board\"  [style.width.px]=\"boardData.length * cmInPixelFactor + 6\">\r\n    <div class=\"binding--right\" [style.right.px]=\"boardData.length + 6 - (cmInPixelFactor + boardData.stance + boardData.setBackInInches * inchesInCm * cmInPixelFactor )\">\r\n      <app-binding [angle]=\"boardData.rightAngle\" [bootSize]=\"boardData.bootSize\" [boardWidth]=\"boardData.waist * cmInPixelFactor + boardData.sidecutInM\" [bindingOffset]=\"boardData.bindingOffsetRight\"></app-binding>\r\n    </div>\r\n    <div class=\"binding--left\" [style.left.px]=\"boardData.length + 6 - boardData.stance + boardData.setBackInInches * inchesInCm * cmInPixelFactor\">\r\n      <app-binding [angle]=\"boardData.leftAngle\" [bootSize]=\"boardData.bootSize\" [boardWidth]=\"boardData.waist * cmInPixelFactor + boardData.sidecutInM\" [bindingOffset]=\"boardData.bindingOffsetLeft\"></app-binding>\r\n    </div>\r\n    <div class=\"board-container\" [style.width.px]=\"boardData.length * cmInPixelFactor + 6\" [style.height.px]=\"boardData.waist * cmInPixelFactor + boardData.sidecutInM\" #boardContainer>\r\n      <div class=\"board-boarder\" [style.width.px]=\"boardData.length * cmInPixelFactor + 6\" [style.height.px]=\"boardData.waist * cmInPixelFactor + boardData.sidecutInM\">\r\n        <div class=\"sidecut sidecut-top\"\r\n             [style.width.px]=\"boardData.sidecutInM * mInPixelFactor * 2\"\r\n             [style.height.px]=\"boardData.sidecutInM * mInPixelFactor * 2\"\r\n             [style.margin-left.px]=\" - boardData.sidecutInM * 200 + cmInPixelFactor + boardData.length + boardData.sidecutSetbackInInches * inchesInCm\"\r\n             [style.margin-top.px]=\"-boardData.sidecutInM * mInPixelFactor * 2 + getContainerHeight() - boardData.waist * cmInPixelFactor - getSidecutMargin()\"\r\n        ></div>\r\n        <div class=\"waist\" [style.right.px]=\"boardData.length - boardData.sidecutSetbackInInches * inchesInCm * cmInPixelFactor\"></div>\r\n        <div class=\"sidecut sidecut-bot\"\r\n             [style.width.px]=\"boardData.sidecutInM * mInPixelFactor * 2\"\r\n             [style.height.px]=\"boardData.sidecutInM * mInPixelFactor * 2\"\r\n             [style.margin-left.px]=\" - boardData.sidecutInM * 200 + cmInPixelFactor + boardData.length + boardData.sidecutSetbackInInches * inchesInCm\"\r\n             [style.margin-top.px]=\"boardData.waist * cmInPixelFactor + getSidecutMargin()\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-overhang-panel [boardData]=\"boardData\" [placement]=\"'bot'\" [leftOverhang]=\"currentLeftHeelOverhang\" [rightOverhang]=\"currentRightHeelOverhang\"></app-overhang-panel>\r\n</div>\r\n",
                        styles: [".board-container{position:relative;overflow:hidden;margin:0 auto}.board-boarder{border-radius:50px;border:1px solid #000;position:relative}.board{position:relative;margin:0 auto}.sidecut{position:absolute;border:1px solid #000;border-radius:100%;z-index:5;background:#fff;margin:0 auto}.waist{min-width:0;min-height:100%;z-index:8;position:absolute;border:1px dashed #000}.binding--left,.binding--right{position:absolute}"]
                    }] }
        ];
        /** @nocollapse */
        BoardComponent.ctorParameters = function () { return []; };
        BoardComponent.propDecorators = {
            boardData: [{ type: i0.Input }]
        };
        return BoardComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BoardDataDto = /** @class */ (function () {
        function BoardDataDto() {
        }
        return BoardDataDto;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BoardPanelComponent = /** @class */ (function () {
        function BoardPanelComponent() {
            this.boardData = new BoardDataDto();
            this.boardData.length = 155;
            this.boardData.waist = 25.5;
            this.boardData.sidecutInM = 7.6;
            this.boardData.sidecutSetbackInInches = 0;
            this.boardData.stance = 53;
            this.boardData.leftAngle = 15;
            this.boardData.rightAngle = -6;
            this.boardData.bootSize = 30.5;
            this.boardData.bindingOffsetLeft = 0;
            this.boardData.bindingOffsetRight = 0;
            this.boardData.setBackInInches = 1;
        }
        /**
         * @return {?}
         */
        BoardPanelComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        BoardPanelComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-board-panel',
                        template: "<div class=\"panel main\">\r\n  <h2>Snowboard Setup</h2>\r\n  <hr>\r\n  <div class=\"panel__bd board\">\r\n    <app-board [boardData]=\"boardData\"></app-board>\r\n  </div>\r\n  <app-data-input-form [boardData]=\"boardData\"></app-data-input-form>\r\n</div>\r\n",
                        styles: [".board{min-height:80px;margin:0 auto}.main{width:100%;min-width:300px;margin-bottom:5rem}"]
                    }] }
        ];
        /** @nocollapse */
        BoardPanelComponent.ctorParameters = function () { return []; };
        return BoardPanelComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BindingComponent = /** @class */ (function () {
        function BindingComponent() {
        }
        /**
         * @return {?}
         */
        BindingComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        BindingComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
            };
        BindingComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-binding',
                        template: "<div class=\"binding\" [style.transform]=\"'rotate(' + (360 - angle) + 'deg)'\" [style.height.px]=\"bootSize * 2\"\r\n     [style.width.px]=\"bootSize/5 * 4\" [style.margin-left.px]=\"-bootSize/5 * 2\" [style.margin-top.px]=\"(boardWidth - bootSize *2)/2  - bindingOffset*2\">\r\n  <div class=\"footbed\" [style.width.px]=\"bootSize/5 * 4 -2\" [style.height.px]=\"bootSize * 1.25\" [style.margin-top.px]=\"bootSize/5 * 1.7\">\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n  </div>\r\n</div>\r\n",
                        styles: [".binding{border-radius:40% 40% 38% 38%;border:1px solid #000;border-bottom:5px solid #000;border-top:2px solid #000;position:absolute;overflow:hidden;z-index:10;margin-top:0}.footbed{text-align:center;overflow:hidden;font-size:.6rem;background-color:gray}"]
                    }] }
        ];
        /** @nocollapse */
        BindingComponent.ctorParameters = function () { return []; };
        BindingComponent.propDecorators = {
            angle: [{ type: i0.Input }],
            bootSize: [{ type: i0.Input }],
            boardWidth: [{ type: i0.Input }],
            bindingOffset: [{ type: i0.Input }]
        };
        return BindingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OverhangPanelComponent = /** @class */ (function () {
        function OverhangPanelComponent() {
        }
        /**
         * @return {?}
         */
        OverhangPanelComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @param {?} overhang
         * @return {?}
         */
        OverhangPanelComponent.prototype.getWarningLevel = /**
         * @param {?} overhang
         * @return {?}
         */
            function (overhang) {
                if (overhang < 1.75) {
                    return '#03d800';
                }
                if (overhang < 2) {
                    return '#94ec00';
                }
                if (overhang < 2.25) {
                    return '#dddd00';
                }
                if (overhang < 2.5) {
                    return '#ed8649';
                }
                return '#da0000';
            };
        /**
         * @param {?} overhang
         * @return {?}
         */
        OverhangPanelComponent.prototype.getWarningWidth = /**
         * @param {?} overhang
         * @return {?}
         */
            function (overhang) {
                if (overhang < 2) {
                    return 2;
                }
                if (overhang < 2.5) {
                    return 3;
                }
                return 4;
            };
        OverhangPanelComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-overhang-panel',
                        template: "<div class=\"overhang\" *ngIf=\"boardData\" [style.width.px]=\"boardData.length * 2\">\r\n  <span class=\"overhang-label--{{placement}}\" [style.float]=\"'left'\" [style.left.px]=\"boardData.length - (2 + boardData.stance - boardData.setBackInInches *2.54 * 2) - 30\">{{leftOverhang}} cm</span>\r\n  <span class=\"overhang-label--{{placement}}\" [style.float]=\"'right'\" [style.right.px]=\"boardData.length  - (2 + boardData.stance + boardData.setBackInInches *2.54 * 2) - 30\">{{rightOverhang}} cm</span>\r\n  <span *ngIf=\"leftOverhang >= 1\" class=\"overhang-warning-{{placement}}\"\r\n        [style.border-color]=\"getWarningLevel(leftOverhang)\"\r\n        [style.border-width.px]=\"getWarningWidth(leftOverhang)\"\r\n        [style.float]=\"'left'\"\r\n        [style.left.px]=\"boardData.length - (2 + boardData.stance - boardData.setBackInInches *2.54 * 2) - 25\">\r\n        </span>\r\n  <span *ngIf=\"rightOverhang >= 1\" class=\"overhang-warning-{{placement}}\"\r\n        [style.border-color]=\"getWarningLevel(rightOverhang)\"\r\n        [style.border-width.px]=\"getWarningWidth(rightOverhang)\"\r\n        [style.float]=\"'right'\"\r\n        [style.right.px]=\"boardData.length  - (2 + boardData.stance + boardData.setBackInInches *2.54 * 2) - 25\">\r\n        </span>\r\n  <div class=\"overhang-{{placement}}-title\">\r\n    <ng-container *ngIf=\"placement === 'top'\">\r\n      Toe overhang:\r\n    </ng-container>\r\n    <ng-container *ngIf=\"placement === 'bot'\">\r\n      Heel overhang:\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n",
                        styles: [".overhang{position:relative;margin:10px auto;text-align:center}.overhang-label--top{position:absolute;bottom:-2.5rem}.overhang-label--bot{position:absolute;top:-2.5rem}.overhang-top-title{margin-bottom:4rem}.overhang-bot-title{margin-top:4rem}.overhang-warning-top{position:absolute;bottom:-5.2rem;z-index:20;height:1.5rem;width:5rem;border-style:dashed}.overhang-warning-bot{margin-top:-2.7rem;z-index:20;height:1.5rem;width:5rem;border-style:dashed;position:absolute;top:-2.5rem}"]
                    }] }
        ];
        /** @nocollapse */
        OverhangPanelComponent.ctorParameters = function () { return []; };
        OverhangPanelComponent.propDecorators = {
            boardData: [{ type: i0.Input }],
            leftOverhang: [{ type: i0.Input }],
            rightOverhang: [{ type: i0.Input }],
            placement: [{ type: i0.Input }]
        };
        return OverhangPanelComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: i0.Component, args: [{
                        selector: 'app-data-input-form',
                        template: "<div class=\"container-fluid\" *ngIf=\"boardData\">\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Length (in cm):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.length\"  step=\"3\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Waist (in cm):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.waist\" step=\"0.1\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Sidecut radius (in m):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.sidecutInM\" step=\"0.1\" max=\"10\" min=\"6\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Sidecut Setback (in inches):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.sidecutSetbackInInches\" step=\"0.1\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Stance Setback (in inches):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.setBackInInches\"  step=\"0.1\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Stance width (in cm):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.stance\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Angle left foot (in \u00B0):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.leftAngle\" step=\"3\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Angle right foot (in \u00B0):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.rightAngle\" step=\"3\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Boot Profile Size(in cm):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.bootSize\" step=\"0.5\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Binding offset left(in cm):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.bindingOffsetLeft\" step=\"0.1\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">Binding offset right(in cm):</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.bindingOffsetRight\" step=\"0.1\">\r\n  </div>\r\n</div>\r\n",
                        styles: [".row{margin-bottom:.5rem;padding-left:3rem;padding-right:3rem}.container-fluid{margin-bottom:3rem}"]
                    }] }
        ];
        /** @nocollapse */
        DataInputFormComponent.ctorParameters = function () { return []; };
        DataInputFormComponent.propDecorators = {
            boardData: [{ type: i0.Input }]
        };
        return DataInputFormComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SnowboardSetupSimulatorModule = /** @class */ (function () {
        function SnowboardSetupSimulatorModule() {
        }
        SnowboardSetupSimulatorModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            BoardComponent,
                            BoardPanelComponent,
                            BindingComponent,
                            OverhangPanelComponent,
                            DataInputFormComponent,
                            SnowboardSetupSimulatorComponent
                        ],
                        imports: [
                            platformBrowser.BrowserModule,
                            forms.FormsModule,
                            common.CommonModule
                        ],
                        exports: [SnowboardSetupSimulatorComponent]
                    },] }
        ];
        return SnowboardSetupSimulatorModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.SnowboardSetupSimulatorService = SnowboardSetupSimulatorService;
    exports.SnowboardSetupSimulatorComponent = SnowboardSetupSimulatorComponent;
    exports.SnowboardSetupSimulatorModule = SnowboardSetupSimulatorModule;
    exports.ɵc = BindingComponent;
    exports.ɵb = BoardPanelComponent;
    exports.ɵa = BoardComponent;
    exports.ɵe = DataInputFormComponent;
    exports.ɵd = OverhangPanelComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=snowboard-setup-simulator.umd.js.map