/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../app/album/album.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/album/album.service';
import * as import9 from './album.component.scss.shim.ngstyle';
import * as import10 from '@angular/material/card/card';
import * as import11 from '../../node_modules/@angular/material/card/card.ngfactory';
import * as import12 from '../../node_modules/@angular/material/core/compatibility/style-compatibility.ngfactory';
import * as import13 from '../../../app/album/photo/photo.component';
import * as import14 from './photo/photo.component.ngfactory';
import * as import15 from '@angular/material/progress-circle/progress-circle';
import * as import16 from '../../node_modules/@angular/material/progress-circle/progress-circle.ngfactory';
import * as import17 from 'ng2-pagination/dist/pagination-controls.component';
import * as import18 from '../../node_modules/ng2-pagination/dist/pagination-controls.component.ngfactory';
import * as import19 from '@angular/core/src/linker/view_container';
import * as import20 from '@angular/core/src/change_detection/change_detection_util';
import * as import21 from '@angular/core/src/linker/element_ref';
import * as import22 from '@angular/core/src/zone/ng_zone';
import * as import23 from '@angular/material/core/compatibility/style-compatibility';
import * as import24 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import25 from 'ng2-pagination/dist/paginate.pipe';
import * as import26 from '@angular/core/src/linker/template_ref';
import * as import27 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import28 from 'ng2-pagination/dist/pagination.service';
import * as import29 from '@angular/common/src/directives/ng_for';
export class Wrapper_AlbumComponent {
  /*private*/ _eventHandler:Function;
  context:import0.AlbumComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.AlbumComponent(p0);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_AlbumComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_AlbumComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.AlbumComponent>;
  _AlbumComponent_0_3:Wrapper_AlbumComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AlbumComponent_Host0,renderType_AlbumComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'app-album',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_AlbumComponent0(this.viewUtils,this,0,this._el_0);
    this._AlbumComponent_0_3 = new Wrapper_AlbumComponent(this.injectorGet(import8.AlbumService,this.parentIndex));
    this.compView_0.create(this._AlbumComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._AlbumComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AlbumComponent) && (0 === requestNodeIndex))) { return this._AlbumComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AlbumComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const AlbumComponentNgFactory:import7.ComponentFactory<import0.AlbumComponent> = new import7.ComponentFactory<import0.AlbumComponent>('app-album',View_AlbumComponent_Host0,import0.AlbumComponent);
const styles_AlbumComponent:any[] = [import9.styles];
class View_AlbumComponent1 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import10.MdCard>;
  _MdCard_0_3:import11.Wrapper_MdCard;
  _StyleCompatibility_0_4:import12.Wrapper_StyleCompatibility;
  _text_1:any;
  _el_2:any;
  _MdCardTitle_2_3:import11.Wrapper_MdCardTitle;
  _StyleCompatibility_2_4:import12.Wrapper_StyleCompatibility;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _MdCardContent_5_3:import11.Wrapper_MdCardContent;
  _StyleCompatibility_5_4:import12.Wrapper_StyleCompatibility;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _el_9:any;
  compView_9:import1.AppView<import13.PhotoComponent>;
  _PhotoComponent_9_3:import14.Wrapper_PhotoComponent;
  _text_10:any;
  _el_11:any;
  compView_11:import1.AppView<import15.MdSpinner>;
  _MdSpinner_11_3:import16.Wrapper_MdSpinner;
  _StyleCompatibility_11_4:import12.Wrapper_StyleCompatibility;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _el_16:any;
  compView_16:import1.AppView<import17.PaginationControlsComponent>;
  _PaginationControlsComponent_16_3:import18.Wrapper_PaginationControlsComponent;
  _text_17:any;
  /*private*/ _expr_32:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import19.ViewContainer) {
    super(View_AlbumComponent1,renderType_AlbumComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_32 = import20.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'md-card',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_0 = new import11.View_MdCard0(this.viewUtils,this,0,this._el_0);
    this._MdCard_0_3 = new import11.Wrapper_MdCard();
    this._StyleCompatibility_0_4 = new import12.Wrapper_StyleCompatibility(this.renderer,new import21.ElementRef(this._el_0));
    this._text_1 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,(null as any),'md-card-title',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._MdCardTitle_2_3 = new import11.Wrapper_MdCardTitle();
    this._StyleCompatibility_2_4 = new import12.Wrapper_StyleCompatibility(this.renderer,new import21.ElementRef(this._el_2));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,(null as any),'md-card-content',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._MdCardContent_5_3 = new import11.Wrapper_MdCardContent();
    this._StyleCompatibility_5_4 = new import12.Wrapper_StyleCompatibility(this.renderer,new import21.ElementRef(this._el_5));
    this._text_6 = this.renderer.createText(this._el_5,'\n            ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_5,'div',new import3.InlineArray2(2,'class','photos'),(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'\n                ',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_7,'app-photo',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_9 = new import14.View_PhotoComponent0(this.viewUtils,this,9,this._el_9);
    this._PhotoComponent_9_3 = new import14.Wrapper_PhotoComponent(this.parentView.parentView.injectorGet(import8.AlbumService,this.parentView.parentIndex));
    this._text_10 = this.renderer.createText((null as any),'\n                    ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,(null as any),'md-spinner',new import3.InlineArray8(6,'class','app-spinner','mode','indeterminate','role','progressbar'),(null as any));
    this.compView_11 = new import16.View_MdSpinner0(this.viewUtils,this,11,this._el_11);
    this._MdSpinner_11_3 = new import16.Wrapper_MdSpinner(this.compView_11.ref,new import21.ElementRef(this._el_11),this.parentView.parentView.injectorGet(import22.NgZone,this.parentView.parentIndex));
    this._StyleCompatibility_11_4 = new import12.Wrapper_StyleCompatibility(this.renderer,new import21.ElementRef(this._el_11));
    this.compView_11.create(this._MdSpinner_11_3.context);
    this._text_12 = this.renderer.createText((null as any),'\n                ',(null as any));
    this.compView_9.create(this._PhotoComponent_9_3.context);
    this._text_13 = this.renderer.createText(this._el_7,'\n            ',(null as any));
    this._text_14 = this.renderer.createText(this._el_5,'\n        ',(null as any));
    this._text_15 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_16 = import3.createRenderElement(this.renderer,(null as any),'pagination-controls',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_16 = new import18.View_PaginationControlsComponent0(this.viewUtils,this,16,this._el_16);
    this._PaginationControlsComponent_16_3 = new import18.Wrapper_PaginationControlsComponent();
    this.compView_16.create(this._PaginationControlsComponent_16_3.context);
    this._text_17 = this.renderer.createText((null as any),'\n    ',(null as any));
    this.compView_0.create(this._MdCard_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_16,new import3.InlineArray2(2,'pageChange',(null as any)),this.eventHandler(this.handleEvent_16));
    this._PaginationControlsComponent_16_3.subscribe(this,this.eventHandler(this.handleEvent_16),true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._text_14,
      this._text_15,
      this._el_16,
      this._text_17
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.MdCardTitle) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._MdCardTitle_2_3.context; }
    if (((token === import23.StyleCompatibility) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._StyleCompatibility_2_4.context; }
    if (((token === import15.MdSpinner) && (11 === requestNodeIndex))) { return this._MdSpinner_11_3.context; }
    if (((token === import23.StyleCompatibility) && (11 === requestNodeIndex))) { return this._StyleCompatibility_11_4.context; }
    if (((token === import13.PhotoComponent) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 12)))) { return this._PhotoComponent_9_3.context; }
    if (((token === import10.MdCardContent) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._MdCardContent_5_3.context; }
    if (((token === import23.StyleCompatibility) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._StyleCompatibility_5_4.context; }
    if (((token === import17.PaginationControlsComponent) && (16 === requestNodeIndex))) { return this._PaginationControlsComponent_16_3.context; }
    if (((token === import10.MdCard) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._MdCard_0_3.context; }
    if (((token === import23.StyleCompatibility) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._StyleCompatibility_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._MdCard_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this._StyleCompatibility_0_4.ngDoCheck(this,this._el_0,throwOnChange);
    this._MdCardTitle_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    this._StyleCompatibility_2_4.ngDoCheck(this,this._el_2,throwOnChange);
    this._MdCardContent_5_3.ngDoCheck(this,this._el_5,throwOnChange);
    this._StyleCompatibility_5_4.ngDoCheck(this,this._el_5,throwOnChange);
    const currVal_9_0_0:any = this.context.$implicit;
    this._PhotoComponent_9_3.check_album(currVal_9_0_0,throwOnChange,false);
    this._PhotoComponent_9_3.ngDoCheck(this,this._el_9,throwOnChange);
    this._MdSpinner_11_3.ngDoCheck(this,this._el_11,throwOnChange);
    this._StyleCompatibility_11_4.ngDoCheck(this,this._el_11,throwOnChange);
    if (this._PaginationControlsComponent_16_3.ngDoCheck(this,this._el_16,throwOnChange)) { this.compView_16.markAsCheckOnce(); }
    const currVal_32:any = import3.inlineInterpolate(1,'\n            ',this.context.$implicit.title,'\n        ');
    if (import3.checkBinding(throwOnChange,this._expr_32,currVal_32)) {
      this.renderer.setText(this._text_3,currVal_32);
      this._expr_32 = currVal_32;
    }
    this.compView_0.internalDetectChanges(throwOnChange);
    this.compView_9.internalDetectChanges(throwOnChange);
    this.compView_11.internalDetectChanges(throwOnChange);
    this.compView_16.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this.compView_9.destroy();
    this.compView_11.destroy();
    this.compView_16.destroy();
    this._PaginationControlsComponent_16_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 0) && (ngContentIndex == 0))) {
      cb(this._text_1,ctx);
      cb(this._el_2,ctx);
      cb(this._text_4,ctx);
      cb(this._el_5,ctx);
      cb(this._text_15,ctx);
      cb(this._el_16,ctx);
      cb(this._text_17,ctx);
    }
  }
  handleEvent_16(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'pageChange')) {
      const pd_sub_0:any = ((<any>(this.parentView.context.p = $event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
var renderType_AlbumComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_AlbumComponent,{});
export class View_AlbumComponent0 extends import1.AppView<import0.AlbumComponent> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import19.ViewContainer;
  _TemplateRef_2_5:any;
  _NgFor_2_6:import24.Wrapper_NgFor;
  _text_3:any;
  _map_7:any;
  _pipe_paginate_0:import25.PaginatePipe;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AlbumComponent0,renderType_AlbumComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._map_7 = import3.pureProxy2((p0:any,p1:any):{[key: string]:any} => {
      return {
        itemsPerPage: p0,
        currentPage: p1
      }
      ;
    });
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','container'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n\n    ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_2 = new import19.ViewContainer(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import26.TemplateRef_(this,2,this._anchor_2);
    this._NgFor_2_6 = new import24.Wrapper_NgFor(this._vc_2.vcRef,this._TemplateRef_2_5,this.parentView.injectorGet(import27.IterableDiffers,this.parentIndex),this.ref);
    this._text_3 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._pipe_paginate_0 = new import25.PaginatePipe(this.parentView.injectorGet(import28.PaginationService,this.parentIndex));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import26.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import29.NgFor) && (2 === requestNodeIndex))) { return this._NgFor_2_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import20.ValueUnwrapper();
    valUnwrapper.reset();
    const currVal_2_0_0:any = valUnwrapper.unwrap(this._pipe_paginate_0.transform(this.context.albums,this._map_7(1,this.context.p)));
    this._NgFor_2_6.check_ngForOf(currVal_2_0_0,throwOnChange,valUnwrapper.hasWrappedValue);
    this._NgFor_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 2)) { return new View_AlbumComponent1(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    return (null as any);
  }
}