#import "React/RCTBridgeModule.h"

// 모듈 등록 -> BrightnessModule란 이름으로 모듈을 등록
@interface RCT_EXTERN_REMAP_MODULE(BrightnessModule, BrightnessModule, NSObject)
RCT_EXTERN_METHOD(
  getBrightness: (RCTPromiseResolveBlock)resolve
  rejecter: (RCTPromiseRejectBlock)reject
)
  RCT_EXTERN_METHOD(setBrightness: (CGFloat)brightness)
@end
