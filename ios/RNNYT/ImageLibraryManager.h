//
//  ImageLibraryManager.h
//  RNNYT
//
//  Created by Le Ngoc Toan on 7/31/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import "React/RCTEventEmitter.h"
#import <UIKit/UIKit.h>

@interface ImageLibraryManager : RCTEventEmitter <RCTBridgeModule, UINavigationControllerDelegate, UIImagePickerControllerDelegate>
@end


//#endif /* ImageLibraryManager_h */
