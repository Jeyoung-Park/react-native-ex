#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(CounterManager, RCTViewManager)
// Props 연동 (연동할 Props 이름, 타입)
  RCT_EXPORT_VIEW_PROPERTY(value, NSNumber)
  RCT_EXPORT_VIEW_PROPERTY(leftButtonText, NSString)
  RCT_EXPORT_VIEW_PROPERTY(rightButtonText, NSString)
@end
