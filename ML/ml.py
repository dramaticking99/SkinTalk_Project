import sys
import json
from ultralytics import YOLO




def ml_model(img_path):
    print("Python script started.")  # Add this line for diagnostic purposes
    model = YOLO("/Users/chetansanwariya/Desktop/SkinTalk_Project/ML/best (2) .pt")

    try:
        results = model.predict(source=img_path)
        l = []
        names = {0: 'blackheads', 1: 'dark spot', 2: 'nodules', 3: 'papules', 4: 'pustules', 5: 'whiteheads'}

        for idx, result in enumerate(results[0].boxes.xyxy):
            l.append(names[results[0].boxes.cls[idx].item()])

        d = {}
        for key, value in names.items():
            d[value] = l.count(value)

        json_str = json.dumps(d)
        print("Python script executed successfully.")  # Add this line for diagnostic purposes
        return json_str
    except Exception as e:
        print("Python script encountered an error:", str(e))  # Add this line for diagnostic purposes
        return '{"error": "' + str(e) + '"}'