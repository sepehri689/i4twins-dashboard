import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TranslateService {
    private translations: Record<string, string> = {
        'open': 'پاسخ داده شده',
        'pending': 'در انتظار پشتیبان',
        'closed': 'بسته شده',
    };

    translate(key: string): string {
        return this.translations[key];
    }
}
