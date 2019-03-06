/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { BoardDataDto } from '../classes/board-data-dto';
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
        { type: Component, args: [{
                    selector: 'app-board',
                    template: "<div *ngIf=\"boardData\">\r\n  <app-overhang-panel [boardData]=\"boardData\" [placement]=\"'top'\" [leftOverhang]=\"currentLeftToeOverhang\" [rightOverhang]=\"currentRightToeOverhang\"></app-overhang-panel>\r\n  <div class=\"board\"  [style.width.px]=\"boardData.length * cmInPixelFactor + 6\">\r\n    <div class=\"binding--right\" [style.right.px]=\"boardData.length + 6 - (cmInPixelFactor + boardData.stance + boardData.setBackInInches * inchesInCm * cmInPixelFactor )\">\r\n      <app-binding [angle]=\"boardData.rightAngle\" [bootSize]=\"boardData.bootSize\" [boardWidth]=\"boardData.waist * cmInPixelFactor + boardData.sidecutInM\" [bindingOffset]=\"boardData.bindingOffsetRight\"></app-binding>\r\n    </div>\r\n    <div class=\"binding--left\" [style.left.px]=\"boardData.length + 6 - boardData.stance + boardData.setBackInInches * inchesInCm * cmInPixelFactor\">\r\n      <app-binding [angle]=\"boardData.leftAngle\" [bootSize]=\"boardData.bootSize\" [boardWidth]=\"boardData.waist * cmInPixelFactor + boardData.sidecutInM\" [bindingOffset]=\"boardData.bindingOffsetLeft\"></app-binding>\r\n    </div>\r\n    <div class=\"board-container\" [style.width.px]=\"boardData.length * cmInPixelFactor + 6\" [style.height.px]=\"boardData.waist * cmInPixelFactor + boardData.sidecutInM\" #boardContainer>\r\n      <div class=\"board-boarder\" [style.width.px]=\"boardData.length * cmInPixelFactor + 6\" [style.height.px]=\"boardData.waist * cmInPixelFactor + boardData.sidecutInM\">\r\n        <div class=\"sidecut sidecut-top\"\r\n             [style.width.px]=\"boardData.sidecutInM * mInPixelFactor * 2\"\r\n             [style.height.px]=\"boardData.sidecutInM * mInPixelFactor * 2\"\r\n             [style.margin-left.px]=\" - boardData.sidecutInM * 200 + cmInPixelFactor + boardData.length + boardData.sidecutSetbackInInches * inchesInCm\"\r\n             [style.margin-top.px]=\"-boardData.sidecutInM * mInPixelFactor * 2 + getContainerHeight() - boardData.waist * cmInPixelFactor - getSidecutMargin()\"\r\n        ></div>\r\n        <div class=\"waist\" [style.right.px]=\"boardData.length - boardData.sidecutSetbackInInches * inchesInCm * cmInPixelFactor\"></div>\r\n        <div class=\"sidecut sidecut-bot\"\r\n             [style.width.px]=\"boardData.sidecutInM * mInPixelFactor * 2\"\r\n             [style.height.px]=\"boardData.sidecutInM * mInPixelFactor * 2\"\r\n             [style.margin-left.px]=\" - boardData.sidecutInM * 200 + cmInPixelFactor + boardData.length + boardData.sidecutSetbackInInches * inchesInCm\"\r\n             [style.margin-top.px]=\"boardData.waist * cmInPixelFactor + getSidecutMargin()\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-overhang-panel [boardData]=\"boardData\" [placement]=\"'bot'\" [leftOverhang]=\"currentLeftHeelOverhang\" [rightOverhang]=\"currentRightHeelOverhang\"></app-overhang-panel>\r\n</div>\r\n",
                    styles: [".board-container{position:relative;overflow:hidden;margin:0 auto}.board-boarder{border-radius:50px;border:1px solid #000;position:relative}.board{position:relative;margin:0 auto}.sidecut{position:absolute;border:1px solid #000;border-radius:100%;z-index:5;background:#fff;margin:0 auto}.waist{min-width:0;min-height:100%;z-index:8;position:absolute;border:1px dashed #000}.binding--left,.binding--right{position:absolute}"]
                }] }
    ];
    /** @nocollapse */
    BoardComponent.ctorParameters = function () { return []; };
    BoardComponent.propDecorators = {
        boardData: [{ type: Input }]
    };
    return BoardComponent;
}());
export { BoardComponent };
if (false) {
    /** @type {?} */
    BoardComponent.prototype.boardData;
    /** @type {?} */
    BoardComponent.prototype.cmInPixelFactor;
    /** @type {?} */
    BoardComponent.prototype.inchesInCm;
    /** @type {?} */
    BoardComponent.prototype.mInPixelFactor;
    /** @type {?} */
    BoardComponent.prototype.currentRightToeOverhang;
    /** @type {?} */
    BoardComponent.prototype.currentLeftToeOverhang;
    /** @type {?} */
    BoardComponent.prototype.currentRightHeelOverhang;
    /** @type {?} */
    BoardComponent.prototype.currentLeftHeelOverhang;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc25vd2JvYXJkLXNldHVwLXNpbXVsYXRvci8iLCJzb3VyY2VzIjpbImxpYi9ib2FyZC9ib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUt2RDtJQW1CRTtRQVRPLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsbUJBQWMsR0FBRyxHQUFHLENBQUM7SUFRNUIsQ0FBQzs7OztJQUVELGlDQUFROzs7SUFBUjtJQUVBLENBQUM7Ozs7SUFFRCxrQ0FBUzs7O0lBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7U0FDOUI7SUFDSCxDQUFDOzs7O0lBRU0sMkNBQWtCOzs7SUFBekI7UUFDRSxzQ0FBc0M7UUFDdEMsSUFBSSxDQUFDLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUN6QixPQUFPLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMzQztRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7OztJQUVNLHlDQUFnQjs7O0lBQXZCO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxHQUFHLEVBQUU7WUFDbkMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNYO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxHQUFHLEVBQUU7WUFDbkMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNYO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxD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QUMsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQy9FLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7Z0JBdEhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIseTBGQUFxQzs7aUJBRXRDOzs7Ozs0QkFHRSxLQUFLOztJQWdIUixxQkFBQztDQUFBLEFBdkhELElBdUhDO1NBbEhZLGNBQWM7OztJQUV6QixtQ0FDK0I7O0lBRS9CLHlDQUEyQjs7SUFDM0Isb0NBQXlCOztJQUN6Qix3Q0FBNEI7O0lBRTVCLGlEQUF1Qzs7SUFDdkMsZ0RBQXNDOztJQUN0QyxrREFBd0M7O0lBQ3hDLGlEQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtCb2FyZERhdGFEdG99IGZyb20gJy4uL2NsYXNzZXMvYm9hcmQtZGF0YS1kdG8nO1xyXG5pbXBvcnQge0RvQ2hlY2t9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvc3JjL21ldGFkYXRhL2xpZmVjeWNsZV9ob29rcyc7XHJcblxyXG5kZWNsYXJlIGZ1bmN0aW9uICQoZWxlbWVudDogc3RyaW5nKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWJvYXJkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2JvYXJkLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIERvQ2hlY2sge1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBib2FyZERhdGE6IEJvYXJkRGF0YUR0bztcclxuXHJcbiAgcHVibGljIGNtSW5QaXhlbEZhY3RvciA9IDI7XHJcbiAgcHVibGljIGluY2hlc0luQ20gPSAyLjU0O1xyXG4gIHB1YmxpYyBtSW5QaXhlbEZhY3RvciA9IDIwMDtcclxuXHJcbiAgcHVibGljIGN1cnJlbnRSaWdodFRvZU92ZXJoYW5nOiBudW1iZXI7XHJcbiAgcHVibGljIGN1cnJlbnRMZWZ0VG9lT3Zlcmhhbmc6IG51bWJlcjtcclxuICBwdWJsaWMgY3VycmVudFJpZ2h0SGVlbE92ZXJoYW5nOiBudW1iZXI7XHJcbiAgcHVibGljIGN1cnJlbnRMZWZ0SGVlbE92ZXJoYW5nOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdEb0NoZWNrKCkge1xyXG4gICAgaWYgKHRoaXMuYm9hcmREYXRhKSB7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlUmlnaHRPdmVyaGFuZygpO1xyXG4gICAgICB0aGlzLmNhbGN1bGF0ZUxlZnRPdmVyaGFuZygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENvbnRhaW5lckhlaWdodCgpIHtcclxuICAgIC8vIENvbnRhaW5lciBoZWlnaHQgbWludXMgYm9yZGVyIHdpZHRoXHJcbiAgICBpZiAoJCgnLmJvYXJkLWNvbnRhaW5lcicpKSB7XHJcbiAgICAgIHJldHVybiAkKCcuYm9hcmQtY29udGFpbmVyJykuaGVpZ2h0KCkgLSAyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0U2lkZWN1dE1hcmdpbigpIHtcclxuICAgIGlmICh0aGlzLmJvYXJkRGF0YS5zaWRlY3V0SW5NIDwgNi4zKSB7XHJcbiAgICAgIHJldHVybiAtMjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJvYXJkRGF0YS5zaWRlY3V0SW5NIDwgNi43KSB7XHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJvYXJkRGF0YS5zaWRlY3V0SW5NIDwgNy4yKSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYm9hcmREYXRhLnNpZGVjdXRJbk0gPCA3LjYpIHtcclxuICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ib2FyZERhdGEuc2lkZWN1dEluTSA8IDguNSkge1xyXG4gICAgICByZXR1cm4gMjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJvYXJkRGF0YS5zaWRlY3V0SW5NIDwgOSkge1xyXG4gICAgICByZXR1cm4gMztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJvYXJkRGF0YS5zaWRlY3V0SW5NIDwgOS40KSB7XHJcbiAgICAgIHJldHVybiA0O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYm9hcmREYXRhLnNpZGVjdXRJbk0gPD0gMTApIHtcclxuICAgICAgcmV0dXJuIDU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gNjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlUmlnaHRPdmVyaGFuZygpIHtcclxuICAgIGNvbnN0IHdpZHRoQXRJbnNlcnQgPSB0aGlzLmNhbGN1bGF0ZVdpZHRoQXRJbnNlcnRzKHRoaXMuYm9hcmREYXRhLnN0YW5jZSAvIDIgKyB0aGlzLmJvYXJkRGF0YS5zZXRCYWNrSW5JbmNoZXMgKiAyLjU0IC0gdGhpcy5ib2FyZERhdGEuc2lkZWN1dFNldGJhY2tJbkluY2hlcyAqIDIuNTQpO1xyXG4gICAgY29uc3QgYWJzV2lkdGhBdEluc2VydCA9IHRoaXMuY2FsY3VsYXRlQWJzQm9hcmRXaWR0aEF0SW5zZXJ0cyh0aGlzLmJvYXJkRGF0YS5yaWdodEFuZ2xlLCB3aWR0aEF0SW5zZXJ0KTtcclxuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuY2FsY3VsYXRlQWJzQm9hcmRXaWR0aEF0SW5zZXJ0cyh0aGlzLmJvYXJkRGF0YS5yaWdodEFuZ2xlLCAxKTtcclxuICAgIHRoaXMuY3VycmVudFJpZ2h0SGVlbE92ZXJoYW5nID0gTWF0aC5mbG9vcigoKHRoaXMuYm9hcmREYXRhLmJvb3RTaXplIC0gYWJzV2lkdGhBdEluc2VydCkgLyAyIC0gdGhpcy5ib2FyZERhdGEuYmluZGluZ09mZnNldFJpZ2h0ICogb2Zmc2V0KSAqIDEwMCkgLyAxMDA7XHJcbiAgICB0aGlzLmN1cnJlbnRSaWdodFRvZU92ZXJoYW5nID0gTWF0aC5mbG9vcigoKHRoaXMuYm9hcmREYXRhLmJvb3RTaXplIC0gYWJzV2lkdGhBdEluc2VydCkgLyAyICsgdGhpcy5ib2FyZERhdGEuYmluZGluZ09mZnNldFJpZ2h0ICogb2Zmc2V0KSAqIDEwMCkgLyAxMDA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZUxlZnRPdmVyaGFuZygpIHtcclxuICAgIGNvbnN0IHdpZHRoQXRJbnNlcnQgPSB0aGlzLmNhbGN1bGF0ZVdpZHRoQXRJbnNlcnRzKHRoaXMuYm9hcmREYXRhLnN0YW5jZSAvIDIgLSB0aGlzLmJvYXJkRGF0YS5zZXRCYWNrSW5JbmNoZXMgKiAyLjU0ICsgdGhpcy5ib2FyZERhdGEuc2lkZWN1dFNldGJhY2tJbkluY2hlcyAqIDIuNTQpO1xyXG4gICAgY29uc3QgYWJzV2lkdGhBdEluc2VydCA9IHRoaXMuY2FsY3VsYXRlQWJzQm9hcmRXaWR0aEF0SW5zZXJ0cyh0aGlzLmJvYXJkRGF0YS5sZWZ0QW5nbGUsIHdpZHRoQXRJbnNlcnQpO1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5jYWxjdWxhdGVBYnNCb2FyZFdpZHRoQXRJbnNlcnRzKHRoaXMuYm9hcmREYXRhLmxlZnRBbmdsZSwgMSk7XHJcbiAgICB0aGlzLmN1cnJlbnRMZWZ0VG9lT3ZlcmhhbmcgPSBNYXRoLmZsb29yKCgodGhpcy5ib2FyZERhdGEuYm9vdFNpemUgLSBhYnNXaWR0aEF0SW5zZXJ0KSAvIDIgKyB0aGlzLmJvYXJkRGF0YS5iaW5kaW5nT2Zmc2V0TGVmdCAqIG9mZnNldCkgKiAxMDApIC8gMTAwO1xyXG4gICAgdGhpcy5jdXJyZW50TGVmdEhlZWxPdmVyaGFuZyA9IE1hdGguZmxvb3IoKCh0aGlzLmJvYXJkRGF0YS5ib290U2l6ZSAtIGFic1dpZHRoQXRJbnNlcnQpIC8gMiAtIHRoaXMuYm9hcmREYXRhLmJpbmRpbmdPZmZzZXRMZWZ0ICogb2Zmc2V0KSAqIDEwMCkgLyAxMDA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZVdpZHRoQXRJbnNlcnRzKHN0YW5jZVBsYWNlbWVudCkge1xyXG4gICAgY29uc3QgaHlwb0luQ20gPSB0aGlzLmJvYXJkRGF0YS5zaWRlY3V0SW5NICogMTAwO1xyXG4gICAgY29uc3Qga2F0MSA9IHN0YW5jZVBsYWNlbWVudDtcclxuICAgIGNvbnN0IGh5cG9Qb3cgPSBNYXRoLnBvdyhoeXBvSW5DbSwgMik7XHJcbiAgICBjb25zdCBrYXQxUG93ID0gTWF0aC5wb3coa2F0MSwgMik7XHJcbiAgICBjb25zdCBrYXQyUG93ID0gaHlwb1BvdyAtIGthdDFQb3c7XHJcbiAgICBjb25zdCBrYXQyID0gTWF0aC5zcXJ0KGthdDJQb3cpO1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmREYXRhLndhaXN0ICsgKGh5cG9JbkNtIC0ga2F0MikgKiAyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVBYnNCb2FyZFdpZHRoQXRJbnNlcnRzKGFuZ2xlVmFsdWU6IG51bWJlciwgd2lkdGhBdEluc2VydHM6IG51bWJlcikge1xyXG4gICAgLyoqXHJcbiAgICAgKiByaWdodCB0cmlhbmdsZSB3aXRoXHJcbiAgICAgKiBhID0gd2lkdGhBdEluc2VydHNcclxuICAgICAqIGFuZ2xlIGEvYiA9IDkwwrBcclxuICAgICAqIGFuZ2xlIGEvYyA9IGFuZ2xlVmFsdWVcclxuICAgICAqL1xyXG4gICAgbGV0IGFscGhhO1xyXG4gICAgbGV0IGJldGE7XHJcbiAgICBjb25zdCBnYW1tYSA9IDkwO1xyXG4gICAgaWYgKGFuZ2xlVmFsdWUgPj0gMCkge1xyXG4gICAgICBiZXRhID0gYW5nbGVWYWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJldGEgPSAtYW5nbGVWYWx1ZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGEgPSB3aWR0aEF0SW5zZXJ0cztcclxuICAgIGlmIChiZXRhID09PSAwIHx8IGEgPT09IDApIHtcclxuICAgICAgcmV0dXJuIGE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbHBoYSA9IDkwIC0gYmV0YTtcclxuICAgIH1cclxuICAgIGNvbnN0IGMgPSBhICogTWF0aC5zaW4oZ2FtbWEgKiBNYXRoLlBJIC8gMTgwKSAvIE1hdGguc2luKGFscGhhICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICByZXR1cm4gYztcclxuICB9XHJcbn1cclxuIl19