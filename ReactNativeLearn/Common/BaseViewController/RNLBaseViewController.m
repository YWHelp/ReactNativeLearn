//
//  RNLBaseViewController.m
//  ReactNativeLearn
//
//  Created by admin on 2018/9/7.
//  Copyright © 2018年 Gaoxin. All rights reserved.
//

#import "RNLBaseViewController.h"
#import "UIColor+Hex.h"
@interface RNLBaseViewController ()

@end

@implementation RNLBaseViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    [self.tabBarItem setTitleTextAttributes:[NSDictionary dictionaryWithObjectsAndKeys:[UIColor colorWithHexString:@"#888888"], NSForegroundColorAttributeName,[UIFont systemFontOfSize:10.0f],NSFontAttributeName,nil] forState:UIControlStateNormal];
    
    [self.tabBarItem setTitleTextAttributes:[NSDictionary dictionaryWithObjectsAndKeys:[UIColor colorWithHexString:@"#F44B50"], NSForegroundColorAttributeName,[UIFont systemFontOfSize:10.0f],NSFontAttributeName,nil] forState:UIControlStateSelected];
}
-(void)viewWillAppear:(BOOL)animated
{
    [super viewWillAppear:animated];
    [[UIApplication sharedApplication] setStatusBarStyle:UIStatusBarStyleDefault animated:NO];
    self.navigationController.navigationBar.translucent = NO;
    //导航栏背景色
    self.navigationController.navigationBar.barTintColor = [UIColor colorWithHexString:@"#FFFFFF"];
    //设置字体的颜色，大小
    UIColor * color = [UIColor colorWithHexString:@"#26272A"];
    //这里我们设置的是颜色，还可以设置shadow等，具体可以参见api
    NSDictionary * dict = [NSDictionary dictionaryWithObjectsAndKeys:color,NSForegroundColorAttributeName,[UIFont systemFontOfSize:17.0],NSFontAttributeName,nil];
    self.navigationController.navigationBar.titleTextAttributes = dict;
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
