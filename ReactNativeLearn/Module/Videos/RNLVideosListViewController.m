//
//  RNLVideosListViewController.m
//  ReactNativeLearn
//
//  Created by admin on 2018/9/7.
//  Copyright © 2018年 Gaoxin. All rights reserved.
//

#import "RNLVideosListViewController.h"

@interface RNLVideosListViewController ()

@end

@implementation RNLVideosListViewController

- (instancetype)init
{
    self = [super init];
    if (self) {
        UIImage *tabIcon = [UIImage imageNamed:@"tabBar_videos_unSelected"];
        UIImage *tabIconSel = [[UIImage imageNamed:@"tabBar_videos_selected"] imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal];
        self.tabBarItem = [[UITabBarItem alloc] initWithTitle:@"视频" image:tabIcon selectedImage:tabIconSel];
    }
    return self;
}
- (void)viewDidLoad {
    [super viewDidLoad];
    self.title = @"视频";
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
