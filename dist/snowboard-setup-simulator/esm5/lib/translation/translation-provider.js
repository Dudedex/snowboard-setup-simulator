/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { De } from './de';
import { En } from './en';
var TranslationProvider = /** @class */ (function () {
    function TranslationProvider() {
    }
    /**
     * @param {?} translate
     * @param {?=} defaultLocale
     * @return {?}
     */
    TranslationProvider.setupTranslationProvider = /**
     * @param {?} translate
     * @param {?=} defaultLocale
     * @return {?}
     */
    function (translate, defaultLocale) {
        translate.setTranslation('de', De.translation());
        translate.setTranslation('en', En.translation());
        if (defaultLocale) {
            translate.setDefaultLang(defaultLocale);
        }
        else {
            translate.setDefaultLang('de');
        }
    };
    return TranslationProvider;
}());
export { TranslationProvider };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24tcHJvdmlkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbm93Ym9hcmQtc2V0dXAtc2ltdWxhdG9yLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0aW9uL3RyYW5zbGF0aW9uLXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUMsRUFBRSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3hCLE9BQU8sRUFBQyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFeEI7SUFBQTtJQVVBLENBQUM7Ozs7OztJQVRlLDRDQUF3Qjs7Ozs7SUFBdEMsVUFBdUMsU0FBMkIsRUFBRSxhQUFzQjtRQUN4RixTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNqRCxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNqRCxJQUFJLGFBQWEsRUFBRTtZQUNqQixTQUFTLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3pDO2FBQU07WUFDTCxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RyYW5zbGF0ZVNlcnZpY2V9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5pbXBvcnQge0RlfSBmcm9tICcuL2RlJztcclxuaW1wb3J0IHtFbn0gZnJvbSAnLi9lbic7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRpb25Qcm92aWRlciB7XHJcbiAgcHVibGljIHN0YXRpYyBzZXR1cFRyYW5zbGF0aW9uUHJvdmlkZXIodHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLCBkZWZhdWx0TG9jYWxlPzogc3RyaW5nKSB7XHJcbiAgICB0cmFuc2xhdGUuc2V0VHJhbnNsYXRpb24oJ2RlJywgRGUudHJhbnNsYXRpb24oKSk7XHJcbiAgICB0cmFuc2xhdGUuc2V0VHJhbnNsYXRpb24oJ2VuJywgRW4udHJhbnNsYXRpb24oKSk7XHJcbiAgICBpZiAoZGVmYXVsdExvY2FsZSkge1xyXG4gICAgICB0cmFuc2xhdGUuc2V0RGVmYXVsdExhbmcoZGVmYXVsdExvY2FsZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0cmFuc2xhdGUuc2V0RGVmYXVsdExhbmcoJ2RlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==