from kafka import KafkaConsumer
from json import loads
from time import sleep
import json

from kafka import KafkaConsumer
import json


if __name__ == '__main__':
    #Consumidor de Kafka
    consumer = KafkaConsumer('topic_users', bootstrap_servers='localhost:9092', auto_offset_reset='earliest')
    for users in consumer:
        data = json.loads(users.value)
        processed_data = []
        for user_id, user_data in data.items():
            processed_data.append({"id": user_data["id"],"name": user_data["name"],"last_name": user_data["last_name"],"friends": user_data["friends"],"position" : user_data["position"],"transport" : user_data["transport"],"age" : user_data ["age"], "gender" :user_data["gender"],"cp": user_data["cp"], "time" : user_data["time"] })
        print(processed_data)

