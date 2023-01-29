//
//  CameraView.m
//  CameraFashionTech
//
//  Created by Youssef samih on 29/1/2023.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(CameraViewManager, RCTViewManager)

  RCT_EXTERN_METHOD(takePhoto)
  RCT_EXPORT_VIEW_PROPERTY(onResultImageExported, RCTBubblingEventBlock)

@end
