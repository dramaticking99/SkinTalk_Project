
# import sys
# import json
# from ultralytics import YOLO


# def ml_model(img_path):
#     print("Python script started.")  # Add this line for diagnostic purposes
#     model = YOLO("/Users/chetansanwariya/Desktop/SkinTalk_Project/ML/best (2) .pt")

#     try:
#         results = model.predict(source=img_path)
#         l = []
#         names = {0: 'blackheads', 1: 'dark spot', 2: 'nodules', 3: 'papules', 4: 'pustules', 5: 'whiteheads'}

#         for idx, result in enumerate(results[0].boxes.xyxy):
#             l.append(names[results[0].boxes.cls[idx].item()])

#         d = {}
#         for key, value in names.items():
#             d[value] = l.count(value)

#         json_str = json.dumps(d)
#         print("Python script executed successfully.")  # Add this line for diagnostic purposes
#         return json_str
#         return d
#     except Exception as e:
#         print("Python script encountered an error:", str(e))  # Add this line for diagnostic purposes
#         return '{"error": "' + str(e) + '"}'

    

# #data = ml_model('/Users/chetansanwariya/Desktop/SkinTalk_Project/public/Image2.jpg')

# #print(data)
'''
import sys
import json
from ultralytics import YOLO

print("in the python file")

def ml_model():
    # Check if an argument was provided
    if len(sys.argv) < 2:
        print("Usage: python script.py <image_path>")
        return '{"error": "No image path provided"}'

    img_path = sys.argv[1]  # Get the argument (image path) from sys.argv
    print(img_path)

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

# Call the ml_model function
result = ml_model()
print(result)  # Print the result to be captured by Node.js
'''

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

if __name__ == "__main__":
    if len(sys.argv) > 1:
        img_path = sys.argv[1]
        result = ml_model(img_path)
        print(result)
    else:
        print("Usage: python script.py <image_path>")

