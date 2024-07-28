// @ts-nocheck
"use client";

import { useEffect, useRef } from "react";
import "@tensorflow/tfjs-backend-cpu";
import "@tensorflow/tfjs-backend-webgl";

import Webcam from "react-webcam";
import * as cocossd from "@tensorflow-models/coco-ssd";
import { cn } from "@nextui-org/react";

const drawRect: any = (detections, ctx) =>{
    // Loop through each prediction
    detections.forEach(prediction => {

      // Extract boxes and classes
      const [x, y, width, height] = prediction['bbox'];
      const text = prediction['class'];

      // Set styling
      const color = Math.floor(Math.random()*16777215).toString(16);
      ctx.strokeStyle = '#' + color
      ctx.font = '18px Arial';

      // Draw rectangles and text
      ctx.beginPath();
      ctx.fillStyle = '#' + color
      ctx.fillText(text, x, y);
      ctx.rect(x, y, width, height);
      ctx.stroke();
    });
  }

export default function Video({ isMonitoring, setIsMonitoring, setIsSecurityThread })
{
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const detectedObjects = useRef(null);
    const timeRef = useRef(null);
    const intervalRef = useRef();

    const detect = async (net, isMonitoringNow) => {
        // Check data is available
        if (
          typeof webcamRef.current !== "undefined" &&
          webcamRef.current !== null &&
          webcamRef.current.video.readyState === 4
        ) {
          // Get Video Properties
          const video = webcamRef.current.video;
          const videoWidth = webcamRef.current.video.videoWidth;
          const videoHeight = webcamRef.current.video.videoHeight;

          // Set video width
          webcamRef.current.video.width = videoWidth;
          webcamRef.current.video.height = videoHeight;

          canvasRef.current.width = videoWidth;
          canvasRef.current.height = videoHeight;

          // Make Detections
          let obj = await net.detect(video);
          obj = obj.filter(f => f.class !== "person")
        //   console.debug("obj", obj.length, isMonitoringNow)

        // if (isMonitoringNow) {
        //     // console.debug("isMonitoringNow obj", obj.length)
        //   if (!detectedObjects.current?.length && !!obj.length) {
        //     detectedObjects.current = obj;
        //     console.debug("detectedObjects", obj)
        //   };

        //   if (!!detectedObjects.current) {
        //     const missingObjects = detectedObjects.current.length !== obj.length;

        //     if (missingObjects) {
        //         console.debug("missingObjects")

        //         if (!!timeRef.current) {
        //             clearTimeout(timeRef.current);
        //             console.debug("clearTimeout")
        //         };

        //         timeRef.current = setTimeout(() => {
        //             console.debug("Missing objects", missingObjects);
        //             timeRef.current = null;

        //             if (!!intervalRef.current) {
        //                 clearInterval(intervalRef.current);
        //                 console.debug("clearInterval")
        //             };

        //             setIsMonitoring();
        //             detectedObjects.current = null;

        //             if (!!intervalRef.current) {
        //                 clearInterval(intervalRef.current);
        //                 intervalRef.current = null;
        //             };

        //             setIsSecurityThread(true);
        //         }, 500);
        //     };
        //   };
        // };

          // Draw mesh
          const ctx = canvasRef.current.getContext("2d");
          drawRect(obj, ctx);
        }
    };

    const runCoco = async () => {
        const net = await cocossd.load();
        console.log("Handpose model loaded.");

        if (!!intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        };

        //  Loop and detect hands
        intervalRef.current = setInterval(() => {
            detect(net, isMonitoring);
        }, 10);
    };

    useEffect(() => {
        runCoco();
    },[isMonitoring]);

    return (
        <>
            <Webcam
                ref={webcamRef}
                muted={true}
                className={cn("absolute left-0 right-0 z-10 w-full h-full m-auto", {
                    "-z-[10]": isMonitoring
                })}
            />

            <canvas
                ref={canvasRef}
                className={cn("absolute left-0 right-0 z-20 w-full h-full m-auto", {
                    "-z-[10]": isMonitoring
                })}
            />
        </>
    );
};