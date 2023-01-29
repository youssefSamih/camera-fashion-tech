//
//  CameraViewManager.swift
//  CameraFashionTech
//
//  Created by Youssef samih on 29/1/2023.
//

import Foundation
import UIKit

@objc(CameraViewManager)
class CameraViewManager: RCTViewManager {
  
  private var cameraView = CameraView()
  
  override func view() -> UIView {
    return cameraView;
  }
  
  @objc func takePhoto(){
    cameraView.takePhoto()
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
