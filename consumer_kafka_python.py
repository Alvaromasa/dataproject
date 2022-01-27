from kafka import KafkaConsumer
import json


if __name__ == '__main__':
    #Consumidor de Kafka
    consumer = KafkaConsumer('topic_users', bootstrap_servers='localhost:9092', auto_offset_reset='earliest')
    for users in consumer:
        print(json.loads(users.value))