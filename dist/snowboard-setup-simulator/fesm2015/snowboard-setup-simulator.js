import { TranslationProvider } from 'snowboard-setup-simulator/translation/translation-provider';
import { FormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import localeDe from '@angular/common/locales/de';
import localeEn from '@angular/common/locales/en';
import { Injectable, Component, Input, NgModule, defineInjectable } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SnowboardSetupSimulatorService {
    constructor() { }
}
SnowboardSetupSimulatorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SnowboardSetupSimulatorService.ctorParameters = () => [];
/** @nocollapse */ SnowboardSetupSimulatorService.ngInjectableDef = defineInjectable({ factory: function SnowboardSetupSimulatorService_Factory() { return new SnowboardSetupSimulatorService(); }, token: SnowboardSetupSimulatorService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SnowboardSetupSimulatorComponent {
    /**
     * @param {?} translate
     */
    constructor(translate) {
        this.translate = translate;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.translationSetup();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.translationSetup();
    }
    /**
     * @private
     * @return {?}
     */
    translationSetup() {
        TranslationProvider.setupTranslationProvider(this.translate, this.locale);
    }
}
SnowboardSetupSimulatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-snowboard-setup-simulator',
                template: `
    <app-board-panel></app-board-panel>
  `
            }] }
];
/** @nocollapse */
SnowboardSetupSimulatorComponent.ctorParameters = () => [
    { type: TranslateService }
];
SnowboardSetupSimulatorComponent.propDecorators = {
    locale: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BoardDataDto {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BoardComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BoardPanelComponent {
    constructor() {
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
    ngOnInit() {
    }
}
BoardPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-board-panel',
                template: "<div class=\"main\">\r\n  <div class=\"panel__bd board\">\r\n    <app-board [boardData]=\"boardData\"></app-board>\r\n  </div>\r\n  <app-data-input-form [boardData]=\"boardData\"></app-data-input-form>\r\n</div>\r\n",
                styles: [".board{min-height:80px;margin:0 auto}.main{width:100%;min-width:300px;margin-bottom:5rem}"]
            }] }
];
/** @nocollapse */
BoardPanelComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BindingComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
    /**
     * @return {?}
     */
    getFootbedClass() {
        if (this.isActive) {
            if (['bindingsBootPlateLeft', 'bindingsBootPlateRight', 'boots'].indexOf(this.activeType) >= 0) {
                return 'plate-active';
            }
        }
        return '';
    }
    /**
     * @return {?}
     */
    getBidingClass() {
        if (this.isActive) {
            if (['bindings', 'leftBinding', 'rightBinding', 'boots'].indexOf(this.activeType) >= 0) {
                return 'binding-active';
            }
        }
        return '';
    }
}
BindingComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-binding',
                template: "<div class=\"binding {{getBidingClass()}}\" [style.transform]=\"'rotate(' + (360 - angle) + 'deg)'\" [style.height.px]=\"bootSize * 2\"\r\n     [style.width.px]=\"bootSize/5 * 4\" [style.margin-left.px]=\"-bootSize/5 * 2\" [style.margin-top.px]=\"(boardWidth - bootSize *2)/2  - bindingOffset*2\">\r\n  <div class=\"footbed {{getFootbedClass()}}\" [style.width.px]=\"bootSize/5 * 4 -2\" [style.height.px]=\"bootSize * 1.25\" [style.margin-top.px]=\"bootSize/5 * 1.7\">\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n    /\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\<br>\r\n  </div>\r\n</div>\r\n",
                styles: [".binding{border-radius:40% 40% 38% 38%;border:1px solid #000;border-bottom:5px solid #000;border-top:2px solid #000;position:absolute;overflow:hidden;z-index:10;margin-top:0}.footbed{text-align:center;overflow:hidden;font-size:.6rem;background-color:gray}.plate-active{background-color:rgba(255,0,0,.5)}.binding-active{border:3px solid red}"]
            }] }
];
/** @nocollapse */
BindingComponent.ctorParameters = () => [];
BindingComponent.propDecorators = {
    angle: [{ type: Input }],
    bootSize: [{ type: Input }],
    boardWidth: [{ type: Input }],
    bindingOffset: [{ type: Input }],
    isActive: [{ type: Input }],
    activeType: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OverhangPanelComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} overhang
     * @return {?}
     */
    getWarningLevel(overhang) {
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
    }
    /**
     * @param {?} overhang
     * @return {?}
     */
    getWarningWidth(overhang) {
        if (overhang < 2) {
            return 2;
        }
        if (overhang < 2.5) {
            return 3;
        }
        return 4;
    }
}
OverhangPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-overhang-panel',
                template: "<div class=\"overhang\" *ngIf=\"boardData\" [style.width.px]=\"boardData.length * 2\">\r\n  <span class=\"overhang-label--{{placement}}\" [style.float]=\"'left'\" [style.left.px]=\"boardData.length - (2 + boardData.stance - boardData.setBackInInches *2.54 * 2) - 30\">{{leftOverhang}} cm</span>\r\n  <span class=\"overhang-label--{{placement}}\" [style.float]=\"'right'\" [style.right.px]=\"boardData.length  - (2 + boardData.stance + boardData.setBackInInches *2.54 * 2) - 30\">{{rightOverhang}} cm</span>\r\n  <span *ngIf=\"leftOverhang >= 1\" class=\"overhang-warning-{{placement}}\"\r\n        [style.border-color]=\"getWarningLevel(leftOverhang)\"\r\n        [style.border-width.px]=\"getWarningWidth(leftOverhang)\"\r\n        [style.float]=\"'left'\"\r\n        [style.left.px]=\"boardData.length - (2 + boardData.stance - boardData.setBackInInches *2.54 * 2) - 25\">\r\n        </span>\r\n  <span *ngIf=\"rightOverhang >= 1\" class=\"overhang-warning-{{placement}}\"\r\n        [style.border-color]=\"getWarningLevel(rightOverhang)\"\r\n        [style.border-width.px]=\"getWarningWidth(rightOverhang)\"\r\n        [style.float]=\"'right'\"\r\n        [style.right.px]=\"boardData.length  - (2 + boardData.stance + boardData.setBackInInches *2.54 * 2) - 25\">\r\n        </span>\r\n  <div class=\"overhang-{{placement}}-title\">\r\n    <ng-container *ngIf=\"placement === 'top'\">\r\n      {{'page.snowboardSetup.toeOverhang' | translate}}\r\n    </ng-container>\r\n    <ng-container *ngIf=\"placement === 'bot'\">\r\n      {{'page.snowboardSetup.heelOverhang' | translate}}\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n",
                styles: [".overhang{position:relative;margin:10px auto;text-align:center}.overhang-label--top{position:absolute;bottom:-2.5rem}.overhang-label--bot{position:absolute;top:-2.5rem}.overhang-top-title{margin-bottom:4rem}.overhang-bot-title{margin-top:4rem}.overhang-warning-top{position:absolute;bottom:-5.2rem;z-index:20;height:1.5rem;width:5rem;border-style:dashed}.overhang-warning-bot{margin-top:-2.7rem;z-index:20;height:1.5rem;width:5rem;border-style:dashed;position:absolute;top:-2.5rem}"]
            }] }
];
/** @nocollapse */
OverhangPanelComponent.ctorParameters = () => [];
OverhangPanelComponent.propDecorators = {
    boardData: [{ type: Input }],
    leftOverhang: [{ type: Input }],
    rightOverhang: [{ type: Input }],
    placement: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataInputFormComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} type
     * @return {?}
     */
    setMarkPart(type) {
        this.boardData.markPart = type;
    }
}
DataInputFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-data-input-form',
                template: "<div class=\"container-fluid\" *ngIf=\"boardData\">\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">{{'page.snowboardSetup.length' | translate}}:</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.length\"  step=\"3\" (focus)=\"setMarkPart('length')\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">{{'page.snowboardSetup.waist' | translate}}:</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.waist\" step=\"0.1\" (focus)=\"setMarkPart('waist')\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">{{'page.snowboardSetup.sidecutRadius' | translate}}:</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.sidecutInM\" step=\"0.1\" max=\"10\" min=\"6\" (focus)=\"setMarkPart('sidecut')\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">{{'page.snowboardSetup.sidecutSetback' | translate}}:</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.sidecutSetbackInInches\" step=\"0.1\" (focus)=\"setMarkPart('sidecut')\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">{{'page.snowboardSetup.stanceSetback' | translate}}:</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.setBackInInches\"  step=\"0.1\" (focus)=\"setMarkPart('bindings')\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">{{'page.snowboardSetup.stanceWidth' | translate}}:</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.stance\" (focus)=\"setMarkPart('bindings')\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">{{'page.snowboardSetup.angleLeft' | translate}}:</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.leftAngle\" step=\"3\" (focus)=\"setMarkPart('leftBinding')\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">{{'page.snowboardSetup.angleRight' | translate}}:</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.rightAngle\" step=\"3\" (focus)=\"setMarkPart('rightBinding')\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">{{'page.snowboardSetup.bootProfile' | translate}}:</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.bootSize\" step=\"0.5\" (focus)=\"setMarkPart('boots')\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">{{'page.snowboardSetup.bindingOffsetLeft' | translate}}:</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.bindingOffsetLeft\" step=\"0.1\" (focus)=\"setMarkPart('bindingsBootPlateLeft')\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"col-xs-8\">{{'page.snowboardSetup.bindingOffsetRight' | translate}}:</label>\r\n    <input class=\"col-xs-3\" type=\"number\" [(ngModel)]=\"boardData.bindingOffsetRight\" step=\"0.1\" (focus)=\"setMarkPart('bindingsBootPlateRight')\">\r\n  </div>\r\n</div>\r\n",
                styles: [".row{margin-bottom:.5rem;padding-left:3rem;padding-right:3rem}.container-fluid{margin-bottom:3rem}.plate-active{background-color:rgba(255,11,0,.5)}"]
            }] }
];
/** @nocollapse */
DataInputFormComponent.ctorParameters = () => [];
DataInputFormComponent.propDecorators = {
    boardData: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
registerLocaleData(localeDe);
registerLocaleData(localeEn);
class SnowboardSetupSimulatorModule {
}
SnowboardSetupSimulatorModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    BoardComponent,
                    BoardPanelComponent,
                    BindingComponent,
                    OverhangPanelComponent,
                    DataInputFormComponent,
                    SnowboardSetupSimulatorComponent
                ],
                imports: [
                    BrowserModule,
                    FormsModule,
                    CommonModule,
                    TranslateModule.forRoot()
                ],
                exports: [SnowboardSetupSimulatorComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SnowboardSetupSimulatorService, SnowboardSetupSimulatorComponent, SnowboardSetupSimulatorModule, BindingComponent as ɵc, BoardPanelComponent as ɵb, BoardComponent as ɵa, DataInputFormComponent as ɵe, OverhangPanelComponent as ɵd };

//# sourceMappingURL=snowboard-setup-simulator.js.map