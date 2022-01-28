import kafka
import json


if __name__ == '__main__':
    #Consumidor de Kafka
    consumer = kafka.KafkaConsumer('topic_users', bootstrap_servers=['localhost:9092'], auto_offset_reset='earliest', enable_auto_commit=True)
    for users in consumer:
        print(json.loads(users.value))
