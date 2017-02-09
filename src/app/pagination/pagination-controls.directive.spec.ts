import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {TestBed, fakeAsync, tick, ComponentFixture} from '@angular/core/testing';

import {getPageLinkItems} from './testing/testing-helpers';
import {PaginationService} from './pagination.service';
import {PaginatePipe} from './paginate.pipe';
import {PaginationControlsDirective} from './pagination-controls.directive';
import {PaginationInstance} from './pagination-instance';

describe('PaginationControlsDirective:', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PaginationControlsDirective, DirectiveTestComponent, PaginatePipe],
            providers: [PaginationService],
        });
    });

    describe('template api', () => {

        function getControlsDirective(fixture: ComponentFixture<DirectiveTestComponent>): PaginationControlsDirective {
            let testCmpInstance = fixture.componentInstance;
            testCmpInstance.config.currentPage = 2;
            let controlsDirective: PaginationControlsDirective = fixture
                .debugElement.query(By.css('pagination-template')).references['p'];
            fixture.detectChanges();
            return controlsDirective;
        }

        it('"pages" should be an array of page objects', () => {
            let fixture = TestBed.createComponent(DirectiveTestComponent);
            let controlsDirective = getControlsDirective(fixture);
            expect(controlsDirective.pages instanceof Array).toBe(true);
        });

        it('"maxSize" should be a number', () => {
            let fixture = TestBed.createComponent(DirectiveTestComponent);
            let controlsDirective = getControlsDirective(fixture);
            expect(controlsDirective.maxSize).toBe(9);
        });

        it('"getCurrent()" should return current page', () => {
            let fixture = TestBed.createComponent(DirectiveTestComponent);
            let controlsDirective = getControlsDirective(fixture);
            expect(controlsDirective.getCurrent()).toBe(2);
        });

        it('"setCurrent()" should emit pageChange event with correct value', fakeAsync(() => {
            let fixture = TestBed.createComponent(DirectiveTestComponent);
            let testCmpInstance = fixture.componentInstance;
            let controlsDirective = getControlsDirective(fixture);
            spyOn(testCmpInstance, 'pageChanged');
            controlsDirective.setCurrent(3);
            tick();

            expect(testCmpInstance.pageChanged).toHaveBeenCalledWith(3);
        }));

        it('"previous()" should emit pageChange event with correct value', fakeAsync(() => {
            let fixture = TestBed.createComponent(DirectiveTestComponent);
            let testCmpInstance = fixture.componentInstance;
            let controlsDirective = getControlsDirective(fixture);
            spyOn(testCmpInstance, 'pageChanged');
            controlsDirective.previous();
            tick();

            expect(testCmpInstance.pageChanged).toHaveBeenCalledWith(1);
        }));

        it('"next()" should emit pageChange event with correct value', fakeAsync(() => {
            let fixture = TestBed.createComponent(DirectiveTestComponent);
            let testCmpInstance = fixture.componentInstance;
            let controlsDirective = getControlsDirective(fixture);
            spyOn(testCmpInstance, 'pageChanged');
            controlsDirective.next();
            tick();

            expect(testCmpInstance.pageChanged).toHaveBeenCalledWith(3);
        }));

        it('"isFirstPage()" should return the correct value', fakeAsync(() => {
            let fixture = TestBed.createComponent(DirectiveTestComponent);
            let testCmpInstance = fixture.componentInstance;
            let controlsDirective = getControlsDirective(fixture);
            testCmpInstance.config.currentPage = 1;
            fixture.detectChanges();
            tick();

            expect(controlsDirective.isFirstPage()).toBe(true);

            testCmpInstance.config.currentPage = 2;
            fixture.detectChanges();
            tick();

            expect(controlsDirective.isFirstPage()).toBe(false);
        }));

        it('"isLastPage()" should return the correct value', fakeAsync(() => {
            let fixture = TestBed.createComponent(DirectiveTestComponent);
            let testCmpInstance = fixture.componentInstance;
            let controlsDirective = getControlsDirective(fixture);
            testCmpInstance.config.currentPage = 1;
            fixture.detectChanges();
            tick();

            expect(controlsDirective.isLastPage()).toBe(false);

            testCmpInstance.config.currentPage = 10;
            fixture.detectChanges();
            tick();

            expect(controlsDirective.isLastPage()).toBe(true);
        }));

    });

    describe('custom templates', () => {

        it('should display the correct page links (simple)', fakeAsync(() => {
            let fixture = TestBed.createComponent(DirectiveTestComponent);
            let instance = fixture.componentInstance;
            instance.config.itemsPerPage = 30;
            instance.maxSize = 7;
            let expected = ['1', '2', '3', '4'];

            fixture.detectChanges();

            expect(getPageLinkItems(fixture, 'div.page-link')).toEqual(expected);
        }));

        it('should display the correct page links (end ellipsis)', fakeAsync(() => {
            let fixture = TestBed.createComponent(DirectiveTestComponent);
            let instance = fixture.componentInstance;
            instance.config.itemsPerPage = 10;
            instance.maxSize = 7;
            let expected = ['1', '2', '3', '4', '5', '...', '10'];

            fixture.detectChanges();

            expect(getPageLinkItems(fixture, 'div.page-link')).toEqual(expected);
        }));

        it('should display the correct page links (start ellipsis)', fakeAsync(() => {
            let fixture = TestBed.createComponent(DirectiveTestComponent);
            let instance = fixture.componentInstance;
            instance.config.itemsPerPage = 10;
            instance.config.currentPage = 10;
            instance.maxSize = 7;
            let expected = ['1', '...', '6', '7', '8', '9', '10'];

            fixture.detectChanges();

            expect(getPageLinkItems(fixture, 'div.page-link')).toEqual(expected);
        }));

        it('should display the correct page links (double ellipsis)', fakeAsync(() => {
            let fixture = TestBed.createComponent(DirectiveTestComponent);
            let instance = fixture.componentInstance;
            instance.config.itemsPerPage = 1;
            instance.config.currentPage = 50;
            instance.maxSize = 7;
            let expected = ['1', '...', '49', '50', '51', '...', '100'];

            fixture.detectChanges();

            expect(getPageLinkItems(fixture, 'div.page-link')).toEqual(expected);
        }));
    });
});

/**
 * Test Component for testing the default controls component
 */
@Component({
    template: `
    <ul>
        <li *ngFor="let item of collection | paginate: config" class="list-item">{{ item }}</li>
    </ul>
    <pagination-template #p="paginationApi"
                         [id]="config.id"
                         [maxSize]="maxSize"
                         (pageChange)="pageChanged($event)">
        <div class="custom-template">
            <div class="pagination-previous" [class.disabled]="p.isFirstPage()" *ngIf="p.directionLinks">
                <span *ngIf="!p.isFirstPage()" (click)="p.previous()">back</span>
            </div>
        
            <div class="page-link" [class.current]="p.getCurrent() === page.value" *ngFor="let page of p.pages">
                <span (click)="p.setCurrent(page.value)">{{ page.label }}</span>
            </div>
        
            <div class="pagination-next" [class.disabled]="p.isLastPage()" *ngIf="p.directionLinks">
                <span *ngIf="!p.isLastPage()" (click)="p.next()">forward</span>
            </div>
        </div>
    </pagination-template>`
})
export class DirectiveTestComponent {
    maxSize: number = 9;
    directionLinks: boolean = true;
    autoHide: boolean = true;
    collection: string[] = [];
    config: PaginationInstance = {
        id: 'test',
        itemsPerPage: 10,
        currentPage: 1
    };
    pageChanged() {}

    constructor() {
        this.collection = Array.from(new Array(100), (x, i) => `item ${i + 1}`);
    }
}
