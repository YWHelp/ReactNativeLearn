//
//  MessageCenterViewController.m
//  ReactNativeLearn
//
//  Created by admin on 2018/9/7.
//  Copyright © 2018年 Gaoxin. All rights reserved.
//

#import "RNLMessageCenterViewController.h"

@interface RNLMessageCenterViewController ()

@end

@implementation RNLMessageCenterViewController
- (instancetype)init
{
    self = [super init];
    if (self) {
        UIImage *tabIcon = [UIImage imageNamed:@"tabBar_message_unSelected"];
        UIImage *tabIconSel = [[UIImage imageNamed:@"tabBar_message_selected"] imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal];
        self.tabBarItem = [[UITabBarItem alloc] initWithTitle:@"消息" image:tabIcon selectedImage:tabIconSel];
    }
    return self;
}
- (void)viewDidLoad {
    [super viewDidLoad];
    self.title = @"消息";
    NSString * strUrl = @"http://172.18.7.163:8081/pages/home/SvgAnimation.bundle?platform=ios";
    NSURL * jsCodeLocation = [NSURL URLWithString:strUrl];
    RCTRootView *rootView =
    [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                moduleName:@"SvgAnimation"
                         initialProperties:nil
                             launchOptions: nil];
    self.view = rootView;
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
