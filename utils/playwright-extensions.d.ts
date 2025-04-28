import { ElementHandle, Page } from '@playwright/test';

declare module '@playwright/test' {
    interface Page {
        selectButtonAndClick(selector: string): Promise<void>;
        verifyCookies(selector: string): Promise<void>;
        isElementPresent(selector: string): Promise<boolean>;
        selectOriginFlight(origin: string): Promise<void>;
        selectDestinationFlight(destination: string): Promise<void>;
        selectDateInitFlight(date?: Date): Promise<void>;
        selectDateEndFlight(date?: Date): Promise<void>;
        selectElementDOM(selector: string): Promise<ElementHandle<SVGElement | HTMLElement> | null>
    }
}