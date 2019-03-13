/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { De } from './de';
import { En } from './en';
export class TranslationProvider {
    /**
     * @param {?} translate
     * @param {?=} defaultLocale
     * @return {?}
     */
    static setupTranslationProvider(translate, defaultLocale) {
        translate.setTranslation('de', De.translation(), true);
        translate.setTranslation('en', En.translation(), true);
        if (defaultLocale) {
            translate.setDefaultLang(defaultLocale);
        }
        else {
            translate.setDefaultLang('de');
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24tcHJvdmlkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbm93Ym9hcmQtc2V0dXAtc2ltdWxhdG9yLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0aW9uL3RyYW5zbGF0aW9uLXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUMsRUFBRSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3hCLE9BQU8sRUFBQyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFeEIsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBQ3ZCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxTQUEyQixFQUFFLGFBQXNCO1FBQ3hGLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RCxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkQsSUFBSSxhQUFhLEVBQUU7WUFDakIsU0FBUyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN6QzthQUFNO1lBQ0wsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7RGV9IGZyb20gJy4vZGUnO1xyXG5pbXBvcnQge0VufSBmcm9tICcuL2VuJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGlvblByb3ZpZGVyIHtcclxuICBwdWJsaWMgc3RhdGljIHNldHVwVHJhbnNsYXRpb25Qcm92aWRlcih0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmcpIHtcclxuICAgIHRyYW5zbGF0ZS5zZXRUcmFuc2xhdGlvbignZGUnLCBEZS50cmFuc2xhdGlvbigpLCB0cnVlKTtcclxuICAgIHRyYW5zbGF0ZS5zZXRUcmFuc2xhdGlvbignZW4nLCBFbi50cmFuc2xhdGlvbigpLCB0cnVlKTtcclxuICAgIGlmIChkZWZhdWx0TG9jYWxlKSB7XHJcbiAgICAgIHRyYW5zbGF0ZS5zZXREZWZhdWx0TGFuZyhkZWZhdWx0TG9jYWxlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRyYW5zbGF0ZS5zZXREZWZhdWx0TGFuZygnZGUnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19