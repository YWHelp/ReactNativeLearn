//
//  RNLMainTabBarController.m
//  ReactNativeLearn
//
//  Created by admin on 2018/9/7.
//  Copyright © 2018年 Gaoxin. All rights reserved.
//

#import "RNLMainTabBarController.h"
#import "RNLBaseNavigationController.h"
#import "RNLHomePageViewController.h"
#import "RNLVideosListViewController.h"
#import "RNLMessageCenterViewController.h"
#import "RNLPersonalCenterViewController.h"
@interface RNLMainTabBarController ()

@end

@implementation RNLMainTabBarController
- (instancetype)init
{
    self = [super init];
    if (self) {
        [self constructViewControllers];
    }
    return self;
}
- (void)viewDidLoad {
    [super viewDidLoad];
}
-(void)constructViewControllers
{
    
    RNLHomePageViewController *homePageVc = [[RNLHomePageViewController alloc]init];
    RNLBaseNavigationController *homePageNav = [[RNLBaseNavigationController alloc] initWithRootViewController:homePageVc];
    
    RNLVideosListViewController *videosListVc = [[RNLVideosListViewController alloc]init];
    RNLBaseNavigationController *videosListNav = [[RNLBaseNavigationController alloc]initWithRootViewController:videosListVc];

    
    RNLMessageCenterViewController *messageCenterVc = [[RNLMessageCenterViewController alloc]init];
    RNLBaseNavigationController *messageCenterNav = [[RNLBaseNavigationController alloc]initWithRootViewController:messageCenterVc];
    
    RNLPersonalCenterViewController *personalCenterVc = [[RNLPersonalCenterViewController alloc]init];
    RNLBaseNavigationController *personalCenterNav = [[RNLBaseNavigationController alloc]initWithRootViewController:personalCenterVc];

    
    self.viewControllers = @[
                             homePageNav,
                             videosListNav,
                             messageCenterNav,
                             personalCenterNav,
                             ];
}


@end
