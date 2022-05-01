#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(CounterManager, RCTViewManager)
// Props 연동 (연동할 Props 이름, 타입)
  RCT_EXPORT_VIEW_PROPERTY(value, NSNumber)
  RCT_EXPORT_VIEW_PROPERTY(leftButtonText, NSString)
  RCT_EXPORT_VIEW_PROPERTY(rightButtonText, NSString)
// 이벤트를 선언하는 경우 두 번째 파라미터에 RCTDirectEventBlock
  RCT_EXPORT_VIEW_PROPERTY(onPressLeftButton, RCTDirectEventBlock)
  RCT_EXPORT_VIEW_PROPERTY(onPressRightButton, RCTDirectEventBlock)
@end
