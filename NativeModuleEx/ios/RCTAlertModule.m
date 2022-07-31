#import "RCTAlertModule.h"

@implementation RCTAlertModule

// 네이티브 모듈을 내보내는 함수
// 파라미터에 들어가는 이름이 네이티브 모듈 이름이 됨
// 만약 파라미터가 비어있다면 클래스 이름에서 RCT가 제외된 이름이 모듈 이름이 됨
RCT_EXPORT_MODULE();

// 메서드 작성
RCT_EXPORT_METHOD(alert:(NSString *)message){
  UIAlertController* alert = [UIAlertController alertControllerWithTitle:@"My Alert" message:@"This is an alert." preferredStyle:UIAlertControllerStyleAlert];
  
  UIAlertAction* defaultAction = [UIAlertAction actionWithTitle:@"OK" style:UIAlertActionStyleDefault handler:^(UIAlertAction * action) {}];
  
  [alert addAction:defaultAction];
  
  UIViewController *rootViewController = [UIApplication sharedApplication].delegate.window.rootViewController;
  
  dispatch_async(dispatch_get_main_queue(), ^{
    [rootViewController presentViewController:alert animated:YES completion:nil];
  });
}

// 상수 내보내기
- (NSDictionary *)constantsToExport{
  return @{
    @"STRING_VALUE": @"Hello World",
    @"NUMBER_VALUE": @(15)
  };
}

+ (BOOL)requiresMainQueueSetup{
  return YES;
}

@end
