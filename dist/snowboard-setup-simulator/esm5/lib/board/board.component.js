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
    BoardComponent.prototype.getBoardClass = /**
     * @return {?}
     */
    function () {
        if (this.boardData.markPart === 'length') {
            return 'red';
        }
        return '';
    };
    /**
     * @return {?}
     */
    BoardComponent.prototype.getWaistClass = /**
     * @return {?}
     */
    function () {
        if (this.boardData.markPart === 'waist') {
            return 'red';
        }
        return '';
    };
    /**
     * @return {?}
     */
    BoardComponent.prototype.getSidecutClass = /**
     * @return {?}
     */
    function () {
        if (['sidecut', 'length'].indexOf(this.boardData.markPart) >= 0) {
            return 'red';
        }
        return '';
    };
    /**
     * @param {?} binding
     * @return {?}
     */
    BoardComponent.prototype.isBindingActive = /**
     * @param {?} binding
     * @return {?}
     */
    function (binding) {
        if (['bindings', 'boots'].indexOf(this.boardData.markPart) >= 0) {
            return true;
        }
        if (binding === 'right' && ['rightBinding', 'bindingsBootPlateRight'].indexOf(this.boardData.markPart) >= 0) {
            console.log('right active');
            return true;
        }
        if (binding === 'left' && ['leftBinding', 'bindingsBootPlateLeft'].indexOf(this.boardData.markPart) >= 0) {
            console.log('left active');
            return true;
        }
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
                    template: "<div *ngIf=\"boardData\">\r\n  <app-overhang-panel [boardData]=\"boardData\" [placement]=\"'top'\" [leftOverhang]=\"currentLeftToeOverhang\" [rightOverhang]=\"currentRightToeOverhang\"></app-overhang-panel>\r\n  <div class=\"board\"  [style.width.px]=\"boardData.length * cmInPixelFactor + 6\">\r\n    <div class=\"binding--right\" [style.right.px]=\"boardData.length + 6 - (cmInPixelFactor + boardData.stance + boardData.setBackInInches * inchesInCm * cmInPixelFactor )\">\r\n      <app-binding [isActive]=\"isBindingActive('right')\" [activeType]=\"boardData.markPart\" [angle]=\"boardData.rightAngle\" [bootSize]=\"boardData.bootSize\" [boardWidth]=\"boardData.waist * cmInPixelFactor + boardData.sidecutInM\" [bindingOffset]=\"boardData.bindingOffsetRight\"></app-binding>\r\n    </div>\r\n    <div class=\"binding--left\" [style.left.px]=\"boardData.length + 6 - boardData.stance + boardData.setBackInInches * inchesInCm * cmInPixelFactor\">\r\n      <app-binding [isActive]=\"isBindingActive('left')\" [activeType]=\"boardData.markPart\" [angle]=\"boardData.leftAngle\" [bootSize]=\"boardData.bootSize\" [boardWidth]=\"boardData.waist * cmInPixelFactor + boardData.sidecutInM\" [bindingOffset]=\"boardData.bindingOffsetLeft\"></app-binding>\r\n    </div>\r\n    <div class=\"board-container\" [style.width.px]=\"boardData.length * cmInPixelFactor + 6\" [style.height.px]=\"boardData.waist * cmInPixelFactor + boardData.sidecutInM\" #boardContainer>\r\n      <div class=\"board-boarder {{getBoardClass()}}\" [style.width.px]=\"boardData.length * cmInPixelFactor + 6\" [style.height.px]=\"boardData.waist * cmInPixelFactor + boardData.sidecutInM\">\r\n        <div class=\"sidecut sidecut-top {{getSidecutClass()}}\"\r\n             [style.width.px]=\"boardData.sidecutInM * mInPixelFactor * 2\"\r\n             [style.height.px]=\"boardData.sidecutInM * mInPixelFactor * 2\"\r\n             [style.margin-left.px]=\" - boardData.sidecutInM * 200 + cmInPixelFactor + boardData.length + boardData.sidecutSetbackInInches * inchesInCm\"\r\n             [style.margin-top.px]=\"-boardData.sidecutInM * mInPixelFactor * 2 + getContainerHeight() - boardData.waist * cmInPixelFactor - getSidecutMargin()\"\r\n        ></div>\r\n        <div class=\"waist {{getWaistClass()}}\" [style.right.px]=\"boardData.length - boardData.sidecutSetbackInInches * inchesInCm * cmInPixelFactor\"></div>\r\n        <div class=\"sidecut sidecut-bot {{getSidecutClass()}}\"\r\n             [style.width.px]=\"boardData.sidecutInM * mInPixelFactor * 2\"\r\n             [style.height.px]=\"boardData.sidecutInM * mInPixelFactor * 2\"\r\n             [style.margin-left.px]=\" - boardData.sidecutInM * 200 + cmInPixelFactor + boardData.length + boardData.sidecutSetbackInInches * inchesInCm\"\r\n             [style.margin-top.px]=\"boardData.waist * cmInPixelFactor + getSidecutMargin()\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-overhang-panel [boardData]=\"boardData\" [placement]=\"'bot'\" [leftOverhang]=\"currentLeftHeelOverhang\" [rightOverhang]=\"currentRightHeelOverhang\"></app-overhang-panel>\r\n</div>\r\n",
                    styles: [".board-container{position:relative;overflow:hidden;margin:0 auto}.board-boarder{border-radius:50px;border:1px solid #000;position:relative}.board{position:relative;margin:0 auto}.sidecut{position:absolute;border:1px solid #000;border-radius:100%;z-index:5;background:#fff;margin:0 auto}.waist{min-width:0;min-height:100%;z-index:8;position:absolute;border:1px dashed #000}.binding--left,.binding--right{position:absolute}.red{border-color:red}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc25vd2JvYXJkLXNldHVwLXNpbXVsYXRvci8iLCJzb3VyY2VzIjpbImxpYi9ib2FyZC9ib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUt2RDtJQW1CRTtRQVRPLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsbUJBQWMsR0FBRyxHQUFHLENBQUM7SUFRNUIsQ0FBQzs7OztJQUVELGlDQUFROzs7SUFBUjtJQUVBLENBQUM7Ozs7SUFFRCxrQ0FBUzs7O0lBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7U0FDOUI7SUFDSCxDQUFDOzs7O0lBRU0sMkNBQWtCOzs7SUFBekI7UUFDRSxzQ0FBc0M7UUFDdEMsSUFBSSxDQUFDLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUN6QixPQUFPLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMzQztRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7OztJQUVNLHNDQUFhOzs7SUFBcEI7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUN4QyxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOzs7O0lBRU0sc0NBQWE7OztJQUFwQjtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEtBQUssT0FBTyxFQUFFO1lBQ3ZDLE9BQU8s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R0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1NBQ25COztZQUNLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUMvRSxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7O2dCQTNKRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLG9qR0FBcUM7O2lCQUV0Qzs7Ozs7NEJBR0UsS0FBSzs7SUFxSlIscUJBQUM7Q0FBQSxBQTVKRCxJQTRKQztTQXZKWSxjQUFjOzs7SUFFekIsbUNBQytCOztJQUUvQix5Q0FBMkI7O0lBQzNCLG9DQUF5Qjs7SUFDekIsd0NBQTRCOztJQUU1QixpREFBdUM7O0lBQ3ZDLGdEQUFzQzs7SUFDdEMsa0RBQXdDOztJQUN4QyxpREFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Qm9hcmREYXRhRHRvfSBmcm9tICcuLi9jbGFzc2VzL2JvYXJkLWRhdGEtZHRvJztcclxuaW1wb3J0IHtEb0NoZWNrfSBmcm9tICdAYW5ndWxhci9jb3JlL3NyYy9tZXRhZGF0YS9saWZlY3ljbGVfaG9va3MnO1xyXG5cclxuZGVjbGFyZSBmdW5jdGlvbiAkKGVsZW1lbnQ6IHN0cmluZyk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1ib2FyZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2JvYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9ib2FyZC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBEb0NoZWNrIHtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgYm9hcmREYXRhOiBCb2FyZERhdGFEdG87XHJcblxyXG4gIHB1YmxpYyBjbUluUGl4ZWxGYWN0b3IgPSAyO1xyXG4gIHB1YmxpYyBpbmNoZXNJbkNtID0gMi41NDtcclxuICBwdWJsaWMgbUluUGl4ZWxGYWN0b3IgPSAyMDA7XHJcblxyXG4gIHB1YmxpYyBjdXJyZW50UmlnaHRUb2VPdmVyaGFuZzogbnVtYmVyO1xyXG4gIHB1YmxpYyBjdXJyZW50TGVmdFRvZU92ZXJoYW5nOiBudW1iZXI7XHJcbiAgcHVibGljIGN1cnJlbnRSaWdodEhlZWxPdmVyaGFuZzogbnVtYmVyO1xyXG4gIHB1YmxpYyBjdXJyZW50TGVmdEhlZWxPdmVyaGFuZzogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpIHtcclxuICAgIGlmICh0aGlzLmJvYXJkRGF0YSkge1xyXG4gICAgICB0aGlzLmNhbGN1bGF0ZVJpZ2h0T3ZlcmhhbmcoKTtcclxuICAgICAgdGhpcy5jYWxjdWxhdGVMZWZ0T3ZlcmhhbmcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDb250YWluZXJIZWlnaHQoKSB7XHJcbiAgICAvLyBDb250YWluZXIgaGVpZ2h0IG1pbnVzIGJvcmRlciB3aWR0aFxyXG4gICAgaWYgKCQoJy5ib2FyZC1jb250YWluZXInKSkge1xyXG4gICAgICByZXR1cm4gJCgnLmJvYXJkLWNvbnRhaW5lcicpLmhlaWdodCgpIC0gMjtcclxuICAgIH1cclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEJvYXJkQ2xhc3MoKSB7XHJcbiAgICBpZiAodGhpcy5ib2FyZERhdGEubWFya1BhcnQgPT09ICdsZW5ndGgnKSB7XHJcbiAgICAgIHJldHVybiAncmVkJztcclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRXYWlzdENsYXNzKCkge1xyXG4gICAgaWYgKHRoaXMuYm9hcmREYXRhLm1hcmtQYXJ0ID09PSAnd2Fpc3QnKSB7XHJcbiAgICAgIHJldHVybiAncmVkJztcclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRTaWRlY3V0Q2xhc3MoKSB7XHJcbiAgICBpZiAoWydzaWRlY3V0JywgJ2xlbmd0aCddLmluZGV4T2YodGhpcy5ib2FyZERhdGEubWFya1BhcnQpID49IDAgKSB7XHJcbiAgICAgIHJldHVybiAncmVkJztcclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0JpbmRpbmdBY3RpdmUoYmluZGluZzogc3RyaW5nKSB7XHJcbiAgICBpZiAoWydiaW5kaW5ncycsICdib290cyddLmluZGV4T2YodGhpcy5ib2FyZERhdGEubWFya1BhcnQpID49IDApIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGJpbmRpbmcgPT09ICdyaWdodCcgJiYgWydyaWdodEJpbmRpbmcnLCAnYmluZGluZ3NCb290UGxhdGVSaWdodCddLmluZGV4T2YodGhpcy5ib2FyZERhdGEubWFya1BhcnQpID49IDApIHtcclxuICAgICAgY29uc29sZS5sb2coJ3JpZ2h0IGFjdGl2ZScpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYmluZGluZyA9PT0gJ2xlZnQnICYmIFsnbGVmdEJpbmRpbmcnLCAnYmluZGluZ3NCb290UGxhdGVMZWZ0J10uaW5kZXhPZih0aGlzLmJvYXJkRGF0YS5tYXJrUGFydCkgPj0gMCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnbGVmdCBhY3RpdmUnKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0U2lkZWN1dE1hcmdpbigpIHtcclxuICAgIGlmICh0aGlzLmJvYXJkRGF0YS5zaWRlY3V0SW5NIDwgNi4zKSB7XHJcbiAgICAgIHJldHVybiAtMjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJvYXJkRGF0YS5zaWRlY3V0SW5NIDwgNi43KSB7XHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJvYXJkRGF0YS5zaWRlY3V0SW5NIDwgNy4yKSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYm9hcmREYXRhLnNpZGVjdXRJbk0gPCA3LjYpIHtcclxuICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ib2FyZERhdGEuc2lkZWN1dEluTSA8IDguNSkge1xyXG4gICAgICByZXR1cm4gMjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJvYXJkRGF0YS5zaWRlY3V0SW5NIDwgOSkge1xyXG4gICAgICByZXR1cm4gMztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJvYXJkRGF0YS5zaWRlY3V0SW5NIDwgOS40KSB7XHJcbiAgICAgIHJldHVybiA0O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYm9hcmREYXRhLnNpZGVjdXRJbk0gPD0gMTApIHtcclxuICAgICAgcmV0dXJuIDU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gNjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlUmlnaHRPdmVyaGFuZygpIHtcclxuICAgIGNvbnN0IHdpZHRoQXRJbnNlcnQgPSB0aGlzLmNhbGN1bGF0ZVdpZHRoQXRJbnNlcnRzKHRoaXMuYm9hcmREYXRhLnN0YW5jZSAvIDIgKyB0aGlzLmJvYXJkRGF0YS5zZXRCYWNrSW5JbmNoZXMgKiAyLjU0IC0gdGhpcy5ib2FyZERhdGEuc2lkZWN1dFNldGJhY2tJbkluY2hlcyAqIDIuNTQpO1xyXG4gICAgY29uc3QgYWJzV2lkdGhBdEluc2VydCA9IHRoaXMuY2FsY3VsYXRlQWJzQm9hcmRXaWR0aEF0SW5zZXJ0cyh0aGlzLmJvYXJkRGF0YS5yaWdodEFuZ2xlLCB3aWR0aEF0SW5zZXJ0KTtcclxuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuY2FsY3VsYXRlQWJzQm9hcmRXaWR0aEF0SW5zZXJ0cyh0aGlzLmJvYXJkRGF0YS5yaWdodEFuZ2xlLCAxKTtcclxuICAgIHRoaXMuY3VycmVudFJpZ2h0SGVlbE92ZXJoYW5nID0gTWF0aC5mbG9vcigoKHRoaXMuYm9hcmREYXRhLmJvb3RTaXplIC0gYWJzV2lkdGhBdEluc2VydCkgLyAyIC0gdGhpcy5ib2FyZERhdGEuYmluZGluZ09mZnNldFJpZ2h0ICogb2Zmc2V0KSAqIDEwMCkgLyAxMDA7XHJcbiAgICB0aGlzLmN1cnJlbnRSaWdodFRvZU92ZXJoYW5nID0gTWF0aC5mbG9vcigoKHRoaXMuYm9hcmREYXRhLmJvb3RTaXplIC0gYWJzV2lkdGhBdEluc2VydCkgLyAyICsgdGhpcy5ib2FyZERhdGEuYmluZGluZ09mZnNldFJpZ2h0ICogb2Zmc2V0KSAqIDEwMCkgLyAxMDA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZUxlZnRPdmVyaGFuZygpIHtcclxuICAgIGNvbnN0IHdpZHRoQXRJbnNlcnQgPSB0aGlzLmNhbGN1bGF0ZVdpZHRoQXRJbnNlcnRzKHRoaXMuYm9hcmREYXRhLnN0YW5jZSAvIDIgLSB0aGlzLmJvYXJkRGF0YS5zZXRCYWNrSW5JbmNoZXMgKiAyLjU0ICsgdGhpcy5ib2FyZERhdGEuc2lkZWN1dFNldGJhY2tJbkluY2hlcyAqIDIuNTQpO1xyXG4gICAgY29uc3QgYWJzV2lkdGhBdEluc2VydCA9IHRoaXMuY2FsY3VsYXRlQWJzQm9hcmRXaWR0aEF0SW5zZXJ0cyh0aGlzLmJvYXJkRGF0YS5sZWZ0QW5nbGUsIHdpZHRoQXRJbnNlcnQpO1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5jYWxjdWxhdGVBYnNCb2FyZFdpZHRoQXRJbnNlcnRzKHRoaXMuYm9hcmREYXRhLmxlZnRBbmdsZSwgMSk7XHJcbiAgICB0aGlzLmN1cnJlbnRMZWZ0VG9lT3ZlcmhhbmcgPSBNYXRoLmZsb29yKCgodGhpcy5ib2FyZERhdGEuYm9vdFNpemUgLSBhYnNXaWR0aEF0SW5zZXJ0KSAvIDIgKyB0aGlzLmJvYXJkRGF0YS5iaW5kaW5nT2Zmc2V0TGVmdCAqIG9mZnNldCkgKiAxMDApIC8gMTAwO1xyXG4gICAgdGhpcy5jdXJyZW50TGVmdEhlZWxPdmVyaGFuZyA9IE1hdGguZmxvb3IoKCh0aGlzLmJvYXJkRGF0YS5ib290U2l6ZSAtIGFic1dpZHRoQXRJbnNlcnQpIC8gMiAtIHRoaXMuYm9hcmREYXRhLmJpbmRpbmdPZmZzZXRMZWZ0ICogb2Zmc2V0KSAqIDEwMCkgLyAxMDA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZVdpZHRoQXRJbnNlcnRzKHN0YW5jZVBsYWNlbWVudCkge1xyXG4gICAgY29uc3QgaHlwb0luQ20gPSB0aGlzLmJvYXJkRGF0YS5zaWRlY3V0SW5NICogMTAwO1xyXG4gICAgY29uc3Qga2F0MSA9IHN0YW5jZVBsYWNlbWVudDtcclxuICAgIGNvbnN0IGh5cG9Qb3cgPSBNYXRoLnBvdyhoeXBvSW5DbSwgMik7XHJcbiAgICBjb25zdCBrYXQxUG93ID0gTWF0aC5wb3coa2F0MSwgMik7XHJcbiAgICBjb25zdCBrYXQyUG93ID0gaHlwb1BvdyAtIGthdDFQb3c7XHJcbiAgICBjb25zdCBrYXQyID0gTWF0aC5zcXJ0KGthdDJQb3cpO1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmREYXRhLndhaXN0ICsgKGh5cG9JbkNtIC0ga2F0MikgKiAyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVBYnNCb2FyZFdpZHRoQXRJbnNlcnRzKGFuZ2xlVmFsdWU6IG51bWJlciwgd2lkdGhBdEluc2VydHM6IG51bWJlcikge1xyXG4gICAgLyoqXHJcbiAgICAgKiByaWdodCB0cmlhbmdsZSB3aXRoXHJcbiAgICAgKiBhID0gd2lkdGhBdEluc2VydHNcclxuICAgICAqIGFuZ2xlIGEvYiA9IDkwwrBcclxuICAgICAqIGFuZ2xlIGEvYyA9IGFuZ2xlVmFsdWVcclxuICAgICAqL1xyXG4gICAgbGV0IGFscGhhO1xyXG4gICAgbGV0IGJldGE7XHJcbiAgICBjb25zdCBnYW1tYSA9IDkwO1xyXG4gICAgaWYgKGFuZ2xlVmFsdWUgPj0gMCkge1xyXG4gICAgICBiZXRhID0gYW5nbGVWYWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJldGEgPSAtYW5nbGVWYWx1ZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGEgPSB3aWR0aEF0SW5zZXJ0cztcclxuICAgIGlmIChiZXRhID09PSAwIHx8IGEgPT09IDApIHtcclxuICAgICAgcmV0dXJuIGE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbHBoYSA9IDkwIC0gYmV0YTtcclxuICAgIH1cclxuICAgIGNvbnN0IGMgPSBhICogTWF0aC5zaW4oZ2FtbWEgKiBNYXRoLlBJIC8gMTgwKSAvIE1hdGguc2luKGFscGhhICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICByZXR1cm4gYztcclxuICB9XHJcbn1cclxuIl19