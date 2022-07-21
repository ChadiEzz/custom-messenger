//Instantiate Kafka Brokers 1 and 2
const { Kafka } = require('kafkajs')
const { Partitioners } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'],
})

//Producer
const producer = kafka.producer({ createPartitioner: Partitioners.DefaultPartitioner })

const produce = async() => {
    await producer.connect().then(async() => {
        await producer.send({
            topic: 'test-topic',
            messages: [
                { value: 'Coucou ça fonctionne !' },
            ],
        }).then(async(response) => {
            await producer.disconnect()
        });
    })
}

produce();

//Consumer
const consumer = kafka.consumer({ groupId: 'test-group' })

const consume = async() => {
    await consumer.connect().then(async() => {
        await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })
    });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                value: message.value.toString(),
            })
        },
    })
}

consume();

/*server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});*/