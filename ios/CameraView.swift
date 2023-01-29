//
//  CameraView.swift
//  CameraFashionTech
//
//  Created by Youssef samih on 29/1/2023.
//

import Foundation
import React
import ARKit
import UIKit

func imageFrom(scene:ARSCNView) -> UIImage {
    UIGraphicsBeginImageContextWithOptions(scene.bounds.size, scene.isOpaque, 0.0)
    scene.drawHierarchy(in: scene.bounds, afterScreenUpdates: false)
    let image = UIGraphicsGetImageFromCurrentImageContext()
    UIGraphicsEndImageContext()
  
    if let unwrappedImage = image {
        return UIImage(cgImage: unwrappedImage.cgImage!)
    }
  
    return UIImage(named: "defaultImage") ?? UIImage()
}

@objc(CameraView) @objcMembers
class CameraView: UIView, ARSCNViewDelegate {
    var sceneView: ARSCNView?
    var lightModel: SCNMaterial.LightingModel = .physicallyBased
    var videoFormat: ARFaceTrackingConfiguration.VideoFormat?
    public var onResultImageExported: RCTBubblingEventBlock?
  
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        let rect = CGRect(x: 0, y: 0, width: frame.width, height: frame.height)
        sceneView = ARSCNView(frame: rect)
        self.layer.cornerRadius = 25
        self.layer.masksToBounds = true;
        self.addSubview(sceneView!)
        sceneView!.delegate = self
        sceneView!.showsStatistics = false
        
        let configuration = ARFaceTrackingConfiguration()
        videoFormat = configuration.videoFormat
      
        self.start()
    }
  
    required init?(coder: NSCoder) {
        super.init(coder: coder)
    }
  
    override func layoutSubviews() {
        super.layoutSubviews()
        let rect = CGRect(x: 0, y: 0, width: self.frame.width, height: self.frame.height)
        self.sceneView?.frame = rect
    }
    
    public func start() {
        let configuration = ARFaceTrackingConfiguration()
        configuration.isLightEstimationEnabled = true
        if let unwrappedVideoFormat = videoFormat {
            configuration.videoFormat = unwrappedVideoFormat
        }
        sceneView!.session.run(configuration)
    }
  
    public func takePhoto() {
      let path = NSSearchPathForDirectoriesInDomains(.documentDirectory, .userDomainMask, true).first!
      let url = URL(fileURLWithPath: path).appendingPathComponent("photoProcessed.png")
      
      try! imageFrom(scene: self.sceneView!).pngData()?.write(to: url)
      
      self.onResultImageExported?(["resultUrl":url.path])
    }
}
