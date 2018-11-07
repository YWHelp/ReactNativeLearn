//
//  HomePageViewController.m
//  ReactNativeLearn
//
//  Created by admin on 2018/9/7.
//  Copyright © 2018年 Gaoxin. All rights reserved.
//

#import "RNLHomePageViewController.h"
#import "RNLHomePageDetailViewController.h"
#import <React/RCTBridgeModule.h>
#import "AppDelegate.h"
@interface RNLHomePageViewController ()<RCTBridgeModule>
@end

@implementation RNLHomePageViewController
RCT_EXPORT_MODULE(jsBridgeModule);
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
//    NSLog(@"Pretending to create an event %@ at %@", name, location);
//    dispatch_async(dispatch_get_main_queue(), ^{
        [self push];
//    });
}
- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
- (instancetype)init
{
    self = [super init];
    if (self) {
        UIImage *tabIcon = [UIImage imageNamed:@"tabBar_news_unSelected"];
        UIImage *tabIconSel = [[UIImage imageNamed:@"tabBar_news_selected"] imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal];
        self.tabBarItem = [[UITabBarItem alloc] initWithTitle:@"首页" image:tabIcon selectedImage:tabIconSel];
    }
    return self;
}


- (void)viewDidLoad {
    [super viewDidLoad];
    self.title = @"首页";
    NSString * strUrl = @"http://172.18.7.203:8081/index.bundle?platform=ios";
    NSURL * jsCodeLocation = [NSURL URLWithString:strUrl];
    RCTRootView *rootView =
    [[RCTRootView alloc] initWithBundleURL: jsCodeLocation
                                moduleName: @"ReactNativeLearn"
                            initialProperties:nil
                             launchOptions: nil];
    self.view = rootView;
}
- (void)push{
    RNLHomePageDetailViewController *detailVc = [[RNLHomePageDetailViewController alloc]init];
    detailVc.hidesBottomBarWhenPushed = YES;
    AppDelegate *app = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    [app.window.rootViewController.childViewControllers.firstObject pushViewController:detailVc animated:YES];
}
@end
