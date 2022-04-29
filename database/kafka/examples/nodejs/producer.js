// import the `Kafka` instance from the kafkajs library
const { Kafka } = require("kafkajs")

const clientId = "my-app"
const brokers = process.env.KAFKA_URL.split(',')
const topic = process.env.TOPIC_NAME

const kafka = new Kafka({ clientId, brokers })
const producer = kafka.producer()

// we define an async function that writes a new message each second
const produce = async () => {
	await producer.connect()

	const message = {}

		try {
			await producer.send({
				topic,
				messages: [
					{
						key: String('ok'),
						value: JSON.stringify(message),
					},
				],
			})
			
		} catch (err) {
			console.error("could not write message " + err)
		}
}

module.exports = produce