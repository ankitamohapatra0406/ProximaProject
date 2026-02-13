import cv2
import os
import numpy as np
from ultralytics import YOLO

MODEL_PATH = os.path.join("model", "yolov8n.pt")
model = YOLO(MODEL_PATH)

def detect_occupancy_from_bytes(image_bytes: bytes, confidence_threshold: float = 0.5):

    np_arr = np.frombuffer(image_bytes, np.uint8)
    image = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

    if image is None:
        return "invalid"

    results = model(image, verbose=False)

    for result in results:
        if result.boxes is None:
            continue

        for box in result.boxes:
            class_id = int(box.cls[0])
            class_name = model.names[class_id]
            confidence = float(box.conf[0])

            if class_name == "person" and confidence >= confidence_threshold:
                return "occupied"

    return "empty"