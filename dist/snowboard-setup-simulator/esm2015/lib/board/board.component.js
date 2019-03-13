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
    getBoardClass() {
        if (this.boardData.markPart === 'length') {
            return 'red';
        }
        return '';
    }
    /**
     * @return {?}
     */
    getWaistClass() {
        if (this.boardData.markPart === 'waist') {
            return 'red';
        }
        return '';
    }
    /**
     * @return {?}
     */
    getSidecutClass() {
        if (['sidecut', 'length'].indexOf(this.boardData.markPart) >= 0) {
            return 'red';
        }
        return '';
    }
    /**
     * @param {?} binding
     * @return {?}
     */
    isBindingActive(binding) {
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
                template: "<div *ngIf=\"boardData\">\r\n  <app-overhang-panel [boardData]=\"boardData\" [placement]=\"'top'\" [leftOverhang]=\"currentLeftToeOverhang\" [rightOverhang]=\"currentRightToeOverhang\"></app-overhang-panel>\r\n  <div class=\"board\"  [style.width.px]=\"boardData.length * cmInPixelFactor + 6\">\r\n    <div class=\"binding--right\" [style.right.px]=\"boardData.length + 6 - (cmInPixelFactor + boardData.stance + boardData.setBackInInches * inchesInCm * cmInPixelFactor )\">\r\n      <app-binding [isActive]=\"isBindingActive('right')\" [activeType]=\"boardData.markPart\" [angle]=\"boardData.rightAngle\" [bootSize]=\"boardData.bootSize\" [boardWidth]=\"boardData.waist * cmInPixelFactor + boardData.sidecutInM\" [bindingOffset]=\"boardData.bindingOffsetRight\"></app-binding>\r\n    </div>\r\n    <div class=\"binding--left\" [style.left.px]=\"boardData.length + 6 - boardData.stance + boardData.setBackInInches * inchesInCm * cmInPixelFactor\">\r\n      <app-binding [isActive]=\"isBindingActive('left')\" [activeType]=\"boardData.markPart\" [angle]=\"boardData.leftAngle\" [bootSize]=\"boardData.bootSize\" [boardWidth]=\"boardData.waist * cmInPixelFactor + boardData.sidecutInM\" [bindingOffset]=\"boardData.bindingOffsetLeft\"></app-binding>\r\n    </div>\r\n    <div class=\"board-container\" [style.width.px]=\"boardData.length * cmInPixelFactor + 6\" [style.height.px]=\"boardData.waist * cmInPixelFactor + boardData.sidecutInM\" #boardContainer>\r\n      <div class=\"board-boarder {{getBoardClass()}}\" [style.width.px]=\"boardData.length * cmInPixelFactor + 6\" [style.height.px]=\"boardData.waist * cmInPixelFactor + boardData.sidecutInM\">\r\n        <div class=\"sidecut sidecut-top {{getSidecutClass()}}\"\r\n             [style.width.px]=\"boardData.sidecutInM * mInPixelFactor * 2\"\r\n             [style.height.px]=\"boardData.sidecutInM * mInPixelFactor * 2\"\r\n             [style.margin-left.px]=\" - boardData.sidecutInM * 200 + cmInPixelFactor + boardData.length + boardData.sidecutSetbackInInches * inchesInCm\"\r\n             [style.margin-top.px]=\"-boardData.sidecutInM * mInPixelFactor * 2 + getContainerHeight() - boardData.waist * cmInPixelFactor - getSidecutMargin()\"\r\n        ></div>\r\n        <div class=\"waist {{getWaistClass()}}\" [style.right.px]=\"boardData.length - boardData.sidecutSetbackInInches * inchesInCm * cmInPixelFactor\"></div>\r\n        <div class=\"sidecut sidecut-bot {{getSidecutClass()}}\"\r\n             [style.width.px]=\"boardData.sidecutInM * mInPixelFactor * 2\"\r\n             [style.height.px]=\"boardData.sidecutInM * mInPixelFactor * 2\"\r\n             [style.margin-left.px]=\" - boardData.sidecutInM * 200 + cmInPixelFactor + boardData.length + boardData.sidecutSetbackInInches * inchesInCm\"\r\n             [style.margin-top.px]=\"boardData.waist * cmInPixelFactor + getSidecutMargin()\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-overhang-panel [boardData]=\"boardData\" [placement]=\"'bot'\" [leftOverhang]=\"currentLeftHeelOverhang\" [rightOverhang]=\"currentRightHeelOverhang\"></app-overhang-panel>\r\n</div>\r\n",
                styles: [".board-container{position:relative;overflow:hidden;margin:0 auto}.board-boarder{border-radius:50px;border:1px solid #000;position:relative}.board{position:relative;margin:0 auto}.sidecut{position:absolute;border:1px solid #000;border-radius:100%;z-index:5;background:#fff;margin:0 auto}.waist{min-width:0;min-height:100%;z-index:8;position:absolute;border:1px dashed #000}.binding--left,.binding--right{position:absolute}.red{border-color:red}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc25vd2JvYXJkLXNldHVwLXNpbXVsYXRvci8iLCJzb3VyY2VzIjpbImxpYi9ib2FyZC9ib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQVV2RCxNQUFNLE9BQU8sY0FBYztJQWN6QjtRQVRPLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsbUJBQWMsR0FBRyxHQUFHLENBQUM7SUFRNUIsQ0FBQzs7OztJQUVELFFBQVE7SUFFUixDQUFDOzs7O0lBRUQsU0FBUztRQUNQLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUM5QjtJQUNILENBQUM7Ozs7SUFFTSxrQkFBa0I7UUFDdkIsc0NBQXNDO1FBQ3RDLElBQUksQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFDekIsT0FBTyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDM0M7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7Ozs7SUFFTSxhQUFhO1FBQ2xCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQ3hDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7Ozs7SUFFTSxhQUFhO1FBQ2xCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEtBQUssT0FBTyxFQUFFO1lBQ3ZDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFP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QUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDL0UsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDOzs7WUEzSkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixvakdBQXFDOzthQUV0Qzs7Ozs7d0JBR0UsS0FBSzs7OztJQUFOLG1DQUMrQjs7SUFFL0IseUNBQTJCOztJQUMzQixvQ0FBeUI7O0lBQ3pCLHdDQUE0Qjs7SUFFNUIsaURBQXVDOztJQUN2QyxnREFBc0M7O0lBQ3RDLGtEQUF3Qzs7SUFDeEMsaURBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0JvYXJkRGF0YUR0b30gZnJvbSAnLi4vY2xhc3Nlcy9ib2FyZC1kYXRhLWR0byc7XHJcbmltcG9ydCB7RG9DaGVja30gZnJvbSAnQGFuZ3VsYXIvY29yZS9zcmMvbWV0YWRhdGEvbGlmZWN5Y2xlX2hvb2tzJztcclxuXHJcbmRlY2xhcmUgZnVuY3Rpb24gJChlbGVtZW50OiBzdHJpbmcpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtYm9hcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ib2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYm9hcmQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCb2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRG9DaGVjayB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGJvYXJkRGF0YTogQm9hcmREYXRhRHRvO1xyXG5cclxuICBwdWJsaWMgY21JblBpeGVsRmFjdG9yID0gMjtcclxuICBwdWJsaWMgaW5jaGVzSW5DbSA9IDIuNTQ7XHJcbiAgcHVibGljIG1JblBpeGVsRmFjdG9yID0gMjAwO1xyXG5cclxuICBwdWJsaWMgY3VycmVudFJpZ2h0VG9lT3Zlcmhhbmc6IG51bWJlcjtcclxuICBwdWJsaWMgY3VycmVudExlZnRUb2VPdmVyaGFuZzogbnVtYmVyO1xyXG4gIHB1YmxpYyBjdXJyZW50UmlnaHRIZWVsT3Zlcmhhbmc6IG51bWJlcjtcclxuICBwdWJsaWMgY3VycmVudExlZnRIZWVsT3Zlcmhhbmc6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ0RvQ2hlY2soKSB7XHJcbiAgICBpZiAodGhpcy5ib2FyZERhdGEpIHtcclxuICAgICAgdGhpcy5jYWxjdWxhdGVSaWdodE92ZXJoYW5nKCk7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlTGVmdE92ZXJoYW5nKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q29udGFpbmVySGVpZ2h0KCkge1xyXG4gICAgLy8gQ29udGFpbmVyIGhlaWdodCBtaW51cyBib3JkZXIgd2lkdGhcclxuICAgIGlmICgkKCcuYm9hcmQtY29udGFpbmVyJykpIHtcclxuICAgICAgcmV0dXJuICQoJy5ib2FyZC1jb250YWluZXInKS5oZWlnaHQoKSAtIDI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRCb2FyZENsYXNzKCkge1xyXG4gICAgaWYgKHRoaXMuYm9hcmREYXRhLm1hcmtQYXJ0ID09PSAnbGVuZ3RoJykge1xyXG4gICAgICByZXR1cm4gJ3JlZCc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0V2Fpc3RDbGFzcygpIHtcclxuICAgIGlmICh0aGlzLmJvYXJkRGF0YS5tYXJrUGFydCA9PT0gJ3dhaXN0Jykge1xyXG4gICAgICByZXR1cm4gJ3JlZCc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0U2lkZWN1dENsYXNzKCkge1xyXG4gICAgaWYgKFsnc2lkZWN1dCcsICdsZW5ndGgnXS5pbmRleE9mKHRoaXMuYm9hcmREYXRhLm1hcmtQYXJ0KSA+PSAwICkge1xyXG4gICAgICByZXR1cm4gJ3JlZCc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNCaW5kaW5nQWN0aXZlKGJpbmRpbmc6IHN0cmluZykge1xyXG4gICAgaWYgKFsnYmluZGluZ3MnLCAnYm9vdHMnXS5pbmRleE9mKHRoaXMuYm9hcmREYXRhLm1hcmtQYXJ0KSA+PSAwKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChiaW5kaW5nID09PSAncmlnaHQnICYmIFsncmlnaHRCaW5kaW5nJywgJ2JpbmRpbmdzQm9vdFBsYXRlUmlnaHQnXS5pbmRleE9mKHRoaXMuYm9hcmREYXRhLm1hcmtQYXJ0KSA+PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdyaWdodCBhY3RpdmUnKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGJpbmRpbmcgPT09ICdsZWZ0JyAmJiBbJ2xlZnRCaW5kaW5nJywgJ2JpbmRpbmdzQm9vdFBsYXRlTGVmdCddLmluZGV4T2YodGhpcy5ib2FyZERhdGEubWFya1BhcnQpID49IDApIHtcclxuICAgICAgY29uc29sZS5sb2coJ2xlZnQgYWN0aXZlJyk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFNpZGVjdXRNYXJnaW4oKSB7XHJcbiAgICBpZiAodGhpcy5ib2FyZERhdGEuc2lkZWN1dEluTSA8IDYuMykge1xyXG4gICAgICByZXR1cm4gLTI7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ib2FyZERhdGEuc2lkZWN1dEluTSA8IDYuNykge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ib2FyZERhdGEuc2lkZWN1dEluTSA8IDcuMikge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJvYXJkRGF0YS5zaWRlY3V0SW5NIDwgNy42KSB7XHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYm9hcmREYXRhLnNpZGVjdXRJbk0gPCA4LjUpIHtcclxuICAgICAgcmV0dXJuIDI7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ib2FyZERhdGEuc2lkZWN1dEluTSA8IDkpIHtcclxuICAgICAgcmV0dXJuIDM7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ib2FyZERhdGEuc2lkZWN1dEluTSA8IDkuNCkge1xyXG4gICAgICByZXR1cm4gNDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJvYXJkRGF0YS5zaWRlY3V0SW5NIDw9IDEwKSB7XHJcbiAgICAgIHJldHVybiA1O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDY7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZVJpZ2h0T3ZlcmhhbmcoKSB7XHJcbiAgICBjb25zdCB3aWR0aEF0SW5zZXJ0ID0gdGhpcy5jYWxjdWxhdGVXaWR0aEF0SW5zZXJ0cyh0aGlzLmJvYXJkRGF0YS5zdGFuY2UgLyAyICsgdGhpcy5ib2FyZERhdGEuc2V0QmFja0luSW5jaGVzICogMi41NCAtIHRoaXMuYm9hcmREYXRhLnNpZGVjdXRTZXRiYWNrSW5JbmNoZXMgKiAyLjU0KTtcclxuICAgIGNvbnN0IGFic1dpZHRoQXRJbnNlcnQgPSB0aGlzLmNhbGN1bGF0ZUFic0JvYXJkV2lkdGhBdEluc2VydHModGhpcy5ib2FyZERhdGEucmlnaHRBbmdsZSwgd2lkdGhBdEluc2VydCk7XHJcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmNhbGN1bGF0ZUFic0JvYXJkV2lkdGhBdEluc2VydHModGhpcy5ib2FyZERhdGEucmlnaHRBbmdsZSwgMSk7XHJcbiAgICB0aGlzLmN1cnJlbnRSaWdodEhlZWxPdmVyaGFuZyA9IE1hdGguZmxvb3IoKCh0aGlzLmJvYXJkRGF0YS5ib290U2l6ZSAtIGFic1dpZHRoQXRJbnNlcnQpIC8gMiAtIHRoaXMuYm9hcmREYXRhLmJpbmRpbmdPZmZzZXRSaWdodCAqIG9mZnNldCkgKiAxMDApIC8gMTAwO1xyXG4gICAgdGhpcy5jdXJyZW50UmlnaHRUb2VPdmVyaGFuZyA9IE1hdGguZmxvb3IoKCh0aGlzLmJvYXJkRGF0YS5ib290U2l6ZSAtIGFic1dpZHRoQXRJbnNlcnQpIC8gMiArIHRoaXMuYm9hcmREYXRhLmJpbmRpbmdPZmZzZXRSaWdodCAqIG9mZnNldCkgKiAxMDApIC8gMTAwO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVMZWZ0T3ZlcmhhbmcoKSB7XHJcbiAgICBjb25zdCB3aWR0aEF0SW5zZXJ0ID0gdGhpcy5jYWxjdWxhdGVXaWR0aEF0SW5zZXJ0cyh0aGlzLmJvYXJkRGF0YS5zdGFuY2UgLyAyIC0gdGhpcy5ib2FyZERhdGEuc2V0QmFja0luSW5jaGVzICogMi41NCArIHRoaXMuYm9hcmREYXRhLnNpZGVjdXRTZXRiYWNrSW5JbmNoZXMgKiAyLjU0KTtcclxuICAgIGNvbnN0IGFic1dpZHRoQXRJbnNlcnQgPSB0aGlzLmNhbGN1bGF0ZUFic0JvYXJkV2lkdGhBdEluc2VydHModGhpcy5ib2FyZERhdGEubGVmdEFuZ2xlLCB3aWR0aEF0SW5zZXJ0KTtcclxuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuY2FsY3VsYXRlQWJzQm9hcmRXaWR0aEF0SW5zZXJ0cyh0aGlzLmJvYXJkRGF0YS5sZWZ0QW5nbGUsIDEpO1xyXG4gICAgdGhpcy5jdXJyZW50TGVmdFRvZU92ZXJoYW5nID0gTWF0aC5mbG9vcigoKHRoaXMuYm9hcmREYXRhLmJvb3RTaXplIC0gYWJzV2lkdGhBdEluc2VydCkgLyAyICsgdGhpcy5ib2FyZERhdGEuYmluZGluZ09mZnNldExlZnQgKiBvZmZzZXQpICogMTAwKSAvIDEwMDtcclxuICAgIHRoaXMuY3VycmVudExlZnRIZWVsT3ZlcmhhbmcgPSBNYXRoLmZsb29yKCgodGhpcy5ib2FyZERhdGEuYm9vdFNpemUgLSBhYnNXaWR0aEF0SW5zZXJ0KSAvIDIgLSB0aGlzLmJvYXJkRGF0YS5iaW5kaW5nT2Zmc2V0TGVmdCAqIG9mZnNldCkgKiAxMDApIC8gMTAwO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVXaWR0aEF0SW5zZXJ0cyhzdGFuY2VQbGFjZW1lbnQpIHtcclxuICAgIGNvbnN0IGh5cG9JbkNtID0gdGhpcy5ib2FyZERhdGEuc2lkZWN1dEluTSAqIDEwMDtcclxuICAgIGNvbnN0IGthdDEgPSBzdGFuY2VQbGFjZW1lbnQ7XHJcbiAgICBjb25zdCBoeXBvUG93ID0gTWF0aC5wb3coaHlwb0luQ20sIDIpO1xyXG4gICAgY29uc3Qga2F0MVBvdyA9IE1hdGgucG93KGthdDEsIDIpO1xyXG4gICAgY29uc3Qga2F0MlBvdyA9IGh5cG9Qb3cgLSBrYXQxUG93O1xyXG4gICAgY29uc3Qga2F0MiA9IE1hdGguc3FydChrYXQyUG93KTtcclxuICAgIHJldHVybiB0aGlzLmJvYXJkRGF0YS53YWlzdCArIChoeXBvSW5DbSAtIGthdDIpICogMjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlQWJzQm9hcmRXaWR0aEF0SW5zZXJ0cyhhbmdsZVZhbHVlOiBudW1iZXIsIHdpZHRoQXRJbnNlcnRzOiBudW1iZXIpIHtcclxuICAgIC8qKlxyXG4gICAgICogcmlnaHQgdHJpYW5nbGUgd2l0aFxyXG4gICAgICogYSA9IHdpZHRoQXRJbnNlcnRzXHJcbiAgICAgKiBhbmdsZSBhL2IgPSA5MMKwXHJcbiAgICAgKiBhbmdsZSBhL2MgPSBhbmdsZVZhbHVlXHJcbiAgICAgKi9cclxuICAgIGxldCBhbHBoYTtcclxuICAgIGxldCBiZXRhO1xyXG4gICAgY29uc3QgZ2FtbWEgPSA5MDtcclxuICAgIGlmIChhbmdsZVZhbHVlID49IDApIHtcclxuICAgICAgYmV0YSA9IGFuZ2xlVmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBiZXRhID0gLWFuZ2xlVmFsdWU7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhID0gd2lkdGhBdEluc2VydHM7XHJcbiAgICBpZiAoYmV0YSA9PT0gMCB8fCBhID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBhO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxwaGEgPSA5MCAtIGJldGE7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjID0gYSAqIE1hdGguc2luKGdhbW1hICogTWF0aC5QSSAvIDE4MCkgLyBNYXRoLnNpbihhbHBoYSAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgcmV0dXJuIGM7XHJcbiAgfVxyXG59XHJcbiJdfQ==