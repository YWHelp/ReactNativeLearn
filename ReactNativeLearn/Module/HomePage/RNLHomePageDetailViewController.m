//
//  RNLHomePageDetailViewController.m
//  ReactNativeLearn
//
//  Created by admin on 2018/9/27.
//  Copyright © 2018年 Gaoxin. All rights reserved.
//

#import "RNLHomePageDetailViewController.h"
@interface RNLHomePageDetailViewController ()
@end
@implementation RNLHomePageDetailViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    NSString * strUrl = @"http://172.18.7.203:8081/pages/home/TabBar.bundle?platform=ios";
    NSURL * jsCodeLocation = [NSURL URLWithString:strUrl];
    RCTRootView *rootView =
    [[RCTRootView alloc] initWithBundleURL: jsCodeLocation
                                moduleName: @"TabBar"
                         initialProperties:nil
                             launchOptions: nil];
    self.view = rootView;
}

@end
