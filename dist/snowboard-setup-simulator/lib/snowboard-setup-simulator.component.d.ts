import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
export declare class SnowboardSetupSimulatorComponent implements OnInit, OnChanges {
    private translate;
    locale: string;
    constructor(translate: TranslateService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private translationSetup;
}
