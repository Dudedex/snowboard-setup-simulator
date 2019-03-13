/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { BoardDataDto } from '../classes/board-data-dto';
export class BoardComponent {
    constructor() {
        this.cmInPixelFactor = 2;
        this.inchesInCm = 2.54;
        this.mInPixelFactor = 200;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.boardData) {
            this.calculateRightOverhang();
            this.calculateLeftOverhang();
        }
    }
    /**
     * @return {?}
     */
    getContainerHeight() {
        // Container height minus border width
        if ($('.board-container')) {
            return $('.board-container').height() - 2;
        }
        return 0;
    }
    /**
     * @return {?}
     */
    getSidecutMargin() {
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
    }
    /**
     * @private
     * @return {?}
     */
    calculateRightOverhang() {
        /** @type {?} */
        const widthAtInsert = this.calculateWidthAtInserts(this.boardData.stance / 2 + this.boardData.setBackInInches * 2.54 - this.boardData.sidecutSetbackInInches * 2.54);
        /** @type {?} */
        const absWidthAtInsert = this.calculateAbsBoardWidthAtInserts(this.boardData.rightAngle, widthAtInsert);
        /** @type {?} */
        const offset = this.calculateAbsBoardWidthAtInserts(this.boardData.rightAngle, 1);
        this.currentRightHeelOverhang = Math.floor(((this.boardData.bootSize - absWidthAtInsert) / 2 - this.boardData.bindingOffsetRight * offset) * 100) / 100;
        this.currentRightToeOverhang = Math.floor(((this.boardData.bootSize - absWidthAtInsert) / 2 + this.boardData.bindingOffsetRight * offset) * 100) / 100;
    }
    /**
     * @private
     * @return {?}
     */
    calculateLeftOverhang() {
        /** @type {?} */
        const widthAtInsert = this.calculateWidthAtInserts(this.boardData.stance / 2 - this.boardData.setBackInInches * 2.54 + this.boardData.sidecutSetbackInInches * 2.54);
        /** @type {?} */
        const absWidthAtInsert = this.calculateAbsBoardWidthAtInserts(this.boardData.leftAngle, widthAtInsert);
        /** @type {?} */
        const offset = this.calculateAbsBoardWidthAtInserts(this.boardData.leftAngle, 1);
        this.currentLeftToeOverhang = Math.floor(((this.boardData.bootSize - absWidthAtInsert) / 2 + this.boardData.bindingOffsetLeft * offset) * 100) / 100;
        this.currentLeftHeelOverhang = Math.floor(((this.boardData.bootSize - absWidthAtInsert) / 2 - this.boardData.bindingOffsetLeft * offset) * 100) / 100;
    }
    /**
     * @private
     * @param {?} stancePlacement
     * @return {?}
     */
    calculateWidthAtInserts(stancePlacement) {
        /** @type {?} */
        const hypoInCm = this.boardData.sidecutInM * 100;
        /** @type {?} */
        const kat1 = stancePlacement;
        /** @type {?} */
        const hypoPow = Math.pow(hypoInCm, 2);
        /** @type {?} */
        const kat1Pow = Math.pow(kat1, 2);
        /** @type {?} */
        const kat2Pow = hypoPow - kat1Pow;
        /** @type {?} */
        const kat2 = Math.sqrt(kat2Pow);
        return this.boardData.waist + (hypoInCm - kat2) * 2;
    }
    /**
     * @private
     * @param {?} angleValue
     * @param {?} widthAtInserts
     * @return {?}
     */
    calculateAbsBoardWidthAtInserts(angleValue, widthAtInserts) {
        /**
         * right triangle with
         * a = widthAtInserts
         * angle a/b = 90°
         * angle a/c = angleValue
         * @type {?}
         */
        let alpha;
        /** @type {?} */
        let beta;
        /** @type {?} */
        const gamma = 90;
        if (angleValue >= 0) {
            beta = angleValue;
        }
        else {
            beta = -angleValue;
        }
        /** @type {?} */
        const a = widthAtInserts;
        if (beta === 0 || a === 0) {
            return a;
        }
        else {
            alpha = 90 - beta;
        }
        /** @type {?} */
        const c = a * Math.sin(gamma * Math.PI / 180) / Math.sin(alpha * Math.PI / 180);
        return c;
    }
}
BoardComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-board',
                template: "<div *ngIf=\"boardData\">\n  <app-overhang-panel [boardData]=\"boardData\" [placement]=\"'top'\" [leftOverhang]=\"currentLeftToeOverhang\" [rightOverhang]=\"currentRightToeOverhang\"></app-overhang-panel>\n  <div class=\"board\"  [style.width.px]=\"boardData.length * cmInPixelFactor + 6\">\n    <div class=\"binding--right\" [style.right.px]=\"boardData.length + 6 - (cmInPixelFactor + boardData.stance + boardData.setBackInInches * inchesInCm * cmInPixelFactor )\">\n      <app-binding [angle]=\"boardData.rightAngle\" [bootSize]=\"boardData.bootSize\" [boardWidth]=\"boardData.waist * cmInPixelFactor + boardData.sidecutInM\" [bindingOffset]=\"boardData.bindingOffsetRight\"></app-binding>\n    </div>\n    <div class=\"binding--left\" [style.left.px]=\"boardData.length + 6 - boardData.stance + boardData.setBackInInches * inchesInCm * cmInPixelFactor\">\n      <app-binding [angle]=\"boardData.leftAngle\" [bootSize]=\"boardData.bootSize\" [boardWidth]=\"boardData.waist * cmInPixelFactor + boardData.sidecutInM\" [bindingOffset]=\"boardData.bindingOffsetLeft\"></app-binding>\n    </div>\n    <div class=\"board-container\" [style.width.px]=\"boardData.length * cmInPixelFactor + 6\" [style.height.px]=\"boardData.waist * cmInPixelFactor + boardData.sidecutInM\" #boardContainer>\n      <div class=\"board-boarder\" [style.width.px]=\"boardData.length * cmInPixelFactor + 6\" [style.height.px]=\"boardData.waist * cmInPixelFactor + boardData.sidecutInM\">\n        <div class=\"sidecut sidecut-top\"\n             [style.width.px]=\"boardData.sidecutInM * mInPixelFactor * 2\"\n             [style.height.px]=\"boardData.sidecutInM * mInPixelFactor * 2\"\n             [style.margin-left.px]=\" - boardData.sidecutInM * 200 + cmInPixelFactor + boardData.length + boardData.sidecutSetbackInInches * inchesInCm\"\n             [style.margin-top.px]=\"-boardData.sidecutInM * mInPixelFactor * 2 + getContainerHeight() - boardData.waist * cmInPixelFactor - getSidecutMargin()\"\n        ></div>\n        <div class=\"waist\" [style.right.px]=\"boardData.length - boardData.sidecutSetbackInInches * inchesInCm * cmInPixelFactor\"></div>\n        <div class=\"sidecut sidecut-bot\"\n             [style.width.px]=\"boardData.sidecutInM * mInPixelFactor * 2\"\n             [style.height.px]=\"boardData.sidecutInM * mInPixelFactor * 2\"\n             [style.margin-left.px]=\" - boardData.sidecutInM * 200 + cmInPixelFactor + boardData.length + boardData.sidecutSetbackInInches * inchesInCm\"\n             [style.margin-top.px]=\"boardData.waist * cmInPixelFactor + getSidecutMargin()\"></div>\n      </div>\n    </div>\n  </div>\n  <app-overhang-panel [boardData]=\"boardData\" [placement]=\"'bot'\" [leftOverhang]=\"currentLeftHeelOverhang\" [rightOverhang]=\"currentRightHeelOverhang\"></app-overhang-panel>\n</div>\n",
                styles: [".board-container{position:relative;overflow:hidden;margin:0 auto}.board-boarder{border-radius:50px;border:1px solid #000;position:relative}.board{position:relative;margin:0 auto}.sidecut{position:absolute;border:1px solid #000;border-radius:100%;z-index:5;background:#fff;margin:0 auto}.waist{min-width:0;min-height:100%;z-index:8;position:absolute;border:1px dashed #000}.binding--left,.binding--right{position:absolute}"]
            }] }
];
/** @nocollapse */
BoardComponent.ctorParameters = () => [];
BoardComponent.propDecorators = {
    boardData: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc25vd2JvYXJkLXNldHVwLXNpbXVsYXRvci8iLCJzb3VyY2VzIjpbImxpYi9ib2FyZC9ib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQVV2RCxNQUFNLE9BQU8sY0FBYztJQWN6QjtRQVRPLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsbUJBQWMsR0FBRyxHQUFHLENBQUM7SUFRNUIsQ0FBQzs7OztJQUVELFFBQVE7SUFFUixDQUFDOzs7O0lBRUQsU0FBUztRQUNQLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUM5QjtJQUNILENBQUM7Ozs7SUFFTSxrQkFBa0I7UUFDdkIsc0NBQXNDO1FBQ3RDLElBQUksQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFDekIsT0FBTyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDM0M7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7Ozs7SUFFTSxnQkFBZ0I7UUFDckIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxHQUFHLEVBQUU7WUFDbkMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNYO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxHQUFHLEVBQUU7WUFDbkMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNYO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxH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QUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQy9FLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7O1lBdEhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsaXhGQUFxQzs7YUFFdEM7Ozs7O3dCQUdFLEtBQUs7Ozs7SUFBTixtQ0FDK0I7O0lBRS9CLHlDQUEyQjs7SUFDM0Isb0NBQXlCOztJQUN6Qix3Q0FBNEI7O0lBRTVCLGlEQUF1Qzs7SUFDdkMsZ0RBQXNDOztJQUN0QyxrREFBd0M7O0lBQ3hDLGlEQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Qm9hcmREYXRhRHRvfSBmcm9tICcuLi9jbGFzc2VzL2JvYXJkLWRhdGEtZHRvJztcbmltcG9ydCB7RG9DaGVja30gZnJvbSAnQGFuZ3VsYXIvY29yZS9zcmMvbWV0YWRhdGEvbGlmZWN5Y2xlX2hvb2tzJztcblxuZGVjbGFyZSBmdW5jdGlvbiAkKGVsZW1lbnQ6IHN0cmluZyk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1ib2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9ib2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2JvYXJkLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCb2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRG9DaGVjayB7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGJvYXJkRGF0YTogQm9hcmREYXRhRHRvO1xuXG4gIHB1YmxpYyBjbUluUGl4ZWxGYWN0b3IgPSAyO1xuICBwdWJsaWMgaW5jaGVzSW5DbSA9IDIuNTQ7XG4gIHB1YmxpYyBtSW5QaXhlbEZhY3RvciA9IDIwMDtcblxuICBwdWJsaWMgY3VycmVudFJpZ2h0VG9lT3Zlcmhhbmc6IG51bWJlcjtcbiAgcHVibGljIGN1cnJlbnRMZWZ0VG9lT3Zlcmhhbmc6IG51bWJlcjtcbiAgcHVibGljIGN1cnJlbnRSaWdodEhlZWxPdmVyaGFuZzogbnVtYmVyO1xuICBwdWJsaWMgY3VycmVudExlZnRIZWVsT3Zlcmhhbmc6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgaWYgKHRoaXMuYm9hcmREYXRhKSB7XG4gICAgICB0aGlzLmNhbGN1bGF0ZVJpZ2h0T3ZlcmhhbmcoKTtcbiAgICAgIHRoaXMuY2FsY3VsYXRlTGVmdE92ZXJoYW5nKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldENvbnRhaW5lckhlaWdodCgpIHtcbiAgICAvLyBDb250YWluZXIgaGVpZ2h0IG1pbnVzIGJvcmRlciB3aWR0aFxuICAgIGlmICgkKCcuYm9hcmQtY29udGFpbmVyJykpIHtcbiAgICAgIHJldHVybiAkKCcuYm9hcmQtY29udGFpbmVyJykuaGVpZ2h0KCkgLSAyO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTaWRlY3V0TWFyZ2luKCkge1xuICAgIGlmICh0aGlzLmJvYXJkRGF0YS5zaWRlY3V0SW5NIDwgNi4zKSB7XG4gICAgICByZXR1cm4gLTI7XG4gICAgfVxuICAgIGlmICh0aGlzLmJvYXJkRGF0YS5zaWRlY3V0SW5NIDwgNi43KSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGlmICh0aGlzLmJvYXJkRGF0YS5zaWRlY3V0SW5NIDwgNy4yKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKHRoaXMuYm9hcmREYXRhLnNpZGVjdXRJbk0gPCA3LjYpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBpZiAodGhpcy5ib2FyZERhdGEuc2lkZWN1dEluTSA8IDguNSkge1xuICAgICAgcmV0dXJuIDI7XG4gICAgfVxuICAgIGlmICh0aGlzLmJvYXJkRGF0YS5zaWRlY3V0SW5NIDwgOSkge1xuICAgICAgcmV0dXJuIDM7XG4gICAgfVxuICAgIGlmICh0aGlzLmJvYXJkRGF0YS5zaWRlY3V0SW5NIDwgOS40KSB7XG4gICAgICByZXR1cm4gNDtcbiAgICB9XG4gICAgaWYgKHRoaXMuYm9hcmREYXRhLnNpZGVjdXRJbk0gPD0gMTApIHtcbiAgICAgIHJldHVybiA1O1xuICAgIH1cbiAgICByZXR1cm4gNjtcbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlUmlnaHRPdmVyaGFuZygpIHtcbiAgICBjb25zdCB3aWR0aEF0SW5zZXJ0ID0gdGhpcy5jYWxjdWxhdGVXaWR0aEF0SW5zZXJ0cyh0aGlzLmJvYXJkRGF0YS5zdGFuY2UgLyAyICsgdGhpcy5ib2FyZERhdGEuc2V0QmFja0luSW5jaGVzICogMi41NCAtIHRoaXMuYm9hcmREYXRhLnNpZGVjdXRTZXRiYWNrSW5JbmNoZXMgKiAyLjU0KTtcbiAgICBjb25zdCBhYnNXaWR0aEF0SW5zZXJ0ID0gdGhpcy5jYWxjdWxhdGVBYnNCb2FyZFdpZHRoQXRJbnNlcnRzKHRoaXMuYm9hcmREYXRhLnJpZ2h0QW5nbGUsIHdpZHRoQXRJbnNlcnQpO1xuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuY2FsY3VsYXRlQWJzQm9hcmRXaWR0aEF0SW5zZXJ0cyh0aGlzLmJvYXJkRGF0YS5yaWdodEFuZ2xlLCAxKTtcbiAgICB0aGlzLmN1cnJlbnRSaWdodEhlZWxPdmVyaGFuZyA9IE1hdGguZmxvb3IoKCh0aGlzLmJvYXJkRGF0YS5ib290U2l6ZSAtIGFic1dpZHRoQXRJbnNlcnQpIC8gMiAtIHRoaXMuYm9hcmREYXRhLmJpbmRpbmdPZmZzZXRSaWdodCAqIG9mZnNldCkgKiAxMDApIC8gMTAwO1xuICAgIHRoaXMuY3VycmVudFJpZ2h0VG9lT3ZlcmhhbmcgPSBNYXRoLmZsb29yKCgodGhpcy5ib2FyZERhdGEuYm9vdFNpemUgLSBhYnNXaWR0aEF0SW5zZXJ0KSAvIDIgKyB0aGlzLmJvYXJkRGF0YS5iaW5kaW5nT2Zmc2V0UmlnaHQgKiBvZmZzZXQpICogMTAwKSAvIDEwMDtcbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlTGVmdE92ZXJoYW5nKCkge1xuICAgIGNvbnN0IHdpZHRoQXRJbnNlcnQgPSB0aGlzLmNhbGN1bGF0ZVdpZHRoQXRJbnNlcnRzKHRoaXMuYm9hcmREYXRhLnN0YW5jZSAvIDIgLSB0aGlzLmJvYXJkRGF0YS5zZXRCYWNrSW5JbmNoZXMgKiAyLjU0ICsgdGhpcy5ib2FyZERhdGEuc2lkZWN1dFNldGJhY2tJbkluY2hlcyAqIDIuNTQpO1xuICAgIGNvbnN0IGFic1dpZHRoQXRJbnNlcnQgPSB0aGlzLmNhbGN1bGF0ZUFic0JvYXJkV2lkdGhBdEluc2VydHModGhpcy5ib2FyZERhdGEubGVmdEFuZ2xlLCB3aWR0aEF0SW5zZXJ0KTtcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmNhbGN1bGF0ZUFic0JvYXJkV2lkdGhBdEluc2VydHModGhpcy5ib2FyZERhdGEubGVmdEFuZ2xlLCAxKTtcbiAgICB0aGlzLmN1cnJlbnRMZWZ0VG9lT3ZlcmhhbmcgPSBNYXRoLmZsb29yKCgodGhpcy5ib2FyZERhdGEuYm9vdFNpemUgLSBhYnNXaWR0aEF0SW5zZXJ0KSAvIDIgKyB0aGlzLmJvYXJkRGF0YS5iaW5kaW5nT2Zmc2V0TGVmdCAqIG9mZnNldCkgKiAxMDApIC8gMTAwO1xuICAgIHRoaXMuY3VycmVudExlZnRIZWVsT3ZlcmhhbmcgPSBNYXRoLmZsb29yKCgodGhpcy5ib2FyZERhdGEuYm9vdFNpemUgLSBhYnNXaWR0aEF0SW5zZXJ0KSAvIDIgLSB0aGlzLmJvYXJkRGF0YS5iaW5kaW5nT2Zmc2V0TGVmdCAqIG9mZnNldCkgKiAxMDApIC8gMTAwO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVXaWR0aEF0SW5zZXJ0cyhzdGFuY2VQbGFjZW1lbnQpIHtcbiAgICBjb25zdCBoeXBvSW5DbSA9IHRoaXMuYm9hcmREYXRhLnNpZGVjdXRJbk0gKiAxMDA7XG4gICAgY29uc3Qga2F0MSA9IHN0YW5jZVBsYWNlbWVudDtcbiAgICBjb25zdCBoeXBvUG93ID0gTWF0aC5wb3coaHlwb0luQ20sIDIpO1xuICAgIGNvbnN0IGthdDFQb3cgPSBNYXRoLnBvdyhrYXQxLCAyKTtcbiAgICBjb25zdCBrYXQyUG93ID0gaHlwb1BvdyAtIGthdDFQb3c7XG4gICAgY29uc3Qga2F0MiA9IE1hdGguc3FydChrYXQyUG93KTtcbiAgICByZXR1cm4gdGhpcy5ib2FyZERhdGEud2Fpc3QgKyAoaHlwb0luQ20gLSBrYXQyKSAqIDI7XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZUFic0JvYXJkV2lkdGhBdEluc2VydHMoYW5nbGVWYWx1ZTogbnVtYmVyLCB3aWR0aEF0SW5zZXJ0czogbnVtYmVyKSB7XG4gICAgLyoqXG4gICAgICogcmlnaHQgdHJpYW5nbGUgd2l0aFxuICAgICAqIGEgPSB3aWR0aEF0SW5zZXJ0c1xuICAgICAqIGFuZ2xlIGEvYiA9IDkwwrBcbiAgICAgKiBhbmdsZSBhL2MgPSBhbmdsZVZhbHVlXG4gICAgICovXG4gICAgbGV0IGFscGhhO1xuICAgIGxldCBiZXRhO1xuICAgIGNvbnN0IGdhbW1hID0gOTA7XG4gICAgaWYgKGFuZ2xlVmFsdWUgPj0gMCkge1xuICAgICAgYmV0YSA9IGFuZ2xlVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJldGEgPSAtYW5nbGVWYWx1ZTtcbiAgICB9XG4gICAgY29uc3QgYSA9IHdpZHRoQXRJbnNlcnRzO1xuICAgIGlmIChiZXRhID09PSAwIHx8IGEgPT09IDApIHtcbiAgICAgIHJldHVybiBhO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbHBoYSA9IDkwIC0gYmV0YTtcbiAgICB9XG4gICAgY29uc3QgYyA9IGEgKiBNYXRoLnNpbihnYW1tYSAqIE1hdGguUEkgLyAxODApIC8gTWF0aC5zaW4oYWxwaGEgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICByZXR1cm4gYztcbiAgfVxufVxuIl19