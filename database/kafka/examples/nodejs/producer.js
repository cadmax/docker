// import the `Kafka` instance from the kafkajs library
const { Kafka } = require("kafkajs")

const clientId = "my-app"
const brokers = [process.env.KAFKA_URL]
const topic = "ads.event"

const kafka = new Kafka({ clientId, brokers })
const producer = kafka.producer()

// we define an async function that writes a new message each second
const produce = async () => {
	await producer.connect()

	const message = {
		"ok": 1
	}

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